import AWS from 'aws-sdk';


const ConnectioAWSDynamoDB = ({ setDatainfo }) => {

    const config = process.env;

    const dynamoDB = new AWS.DynamoDB({
        region: config.REACT_APP_AWS_REGION, // Cambia esto por la región en la que se encuentra tu tabla
        accessKeyId: config.REACT_APP_AWS_ACCESS_KEY_ID, // Cambia esto por tu accessKeyId
        secretAccessKey: config.REACT_APP_AWS_SECRET_ACCESS_KEY, // Cambia esto por tu secretAccessKey
        endpoint: config.REACT_APP_AWS_ENDPOINT, // Cambia esto por tu endpoint

    });


    const GetTablaTempHumed = () => {

        dynamoDB.scan({ TableName: 'Tabla_Temperatura' }, (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            setDatainfo(data);
        })
    }

    const GetTablaSensorGas = () => {

        dynamoDB.scan({ TableName: 'Tabla_SensorGas' }, (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            setDatainfo(data);
        })
    }

    return {
        GetTablaTempHumed,
        GetTablaSensorGas

    }

}


export default ConnectioAWSDynamoDB;