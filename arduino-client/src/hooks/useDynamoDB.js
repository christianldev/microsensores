import AWS from 'aws-sdk';
import { useEffect, useState } from 'react';

const useDynamoDB = (tableName, colummns, options) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const dynamodb = new AWS.DynamoDB.DocumentClient(options);

        const attributeName = 'timestamp';

        // const dateFilter = dateFilters.map((date) => {
        //     return {
        //         [attributeName]: {
        //             ComparisonOperator: 'BETWEEN',
        //             AttributeValueList: [
        //                 `${date}T00:00:00.000Z`,
        //                 `${date}T23:59:59.999Z`
        //             ]
        //         }
        //     };
        // });

        // const date1 = dateFilters[0];
        // const date2 = dateFilters[1];

        const dataColumns = colummns.map((column) => {
            return `${column}`;
        });

        /* /* filter top 5 days with highest temperature */
        const params = {
            TableName: tableName,
            ProjectionExpression: `#date,${dataColumns}`,
            // KeyConditionExpression: `#date BETWEEN ${date1} AND ${date2}`,
            ExpressionAttributeNames: {
                '#date': attributeName,

            },
            // ExpressionAttributeValues: {
            //     ':date1': `${date1}`,
            //     ':date2': `${date2}`
            // },
            ScanIndexForward: false,
            Limit: 100

        };

        dynamodb.scan(params, (err, result) => {
            if (err) {
                setError(err);
            } else {

                setData(result);
            }


        });

        return () => {
            setLoading(false);
        };

    }, []);

    return { data, loading, error };
};

export default useDynamoDB;