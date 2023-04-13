import AWS from 'aws-sdk';


const ConnectioAWSDynamoDB = ({ setDatainfo }) => {

    const dynamoDB = new AWS.DynamoDB({
        region: 'us-east-1', // Cambia esto por la región en la que se encuentra tu tabla
        accessKeyId: 'AKIAVTPHLRWYMMSSPDD6', // Cambia esto por tu accessKeyId
        secretAccessKey: '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', // Cambia esto por tu secretAccessKey
        endpoint: 'dynamodb.us-east-1.amazonaws.com', // Cambia esto por tu endpoint


    });

    dynamoDB.scan({ TableName: 'Tabla_Temperatura' }, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        setDatainfo(data);
    });
}


export default ConnectioAWSDynamoDB;