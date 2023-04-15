import AWS from 'aws-sdk';
import { useEffect, useState } from 'react';

const useDynamoDB = (tableName, options) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const dynamodb = new AWS.DynamoDB.DocumentClient(options);

        /* using KeyConditionExpression and FilterExpression to query data */
        const params = {
            TableName: tableName,
            // KeyConditionExpression: 'id = :id',
            // ExpressionAttributeValues: {
            //     ':id': '1',
            //     ':temperature': 0,
            //     ':humidity': 0,
            //     ':time': '2021-05-01T19:00:00.000Z'
            // },
        };

        dynamodb.scan(params, (err, data) => {
            if (err) {
                setError(err);
            } else {
                setData(data);
            }
            setLoading(false);
        }
        );

    }, []);

    return { data, loading, error };
};

export default useDynamoDB;