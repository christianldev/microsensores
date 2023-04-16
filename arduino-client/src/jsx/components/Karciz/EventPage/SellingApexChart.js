import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";

import useDynamoDB from "../../../../hooks/useDynamoDB";

const config = process.env;

const SellingApexChart = () => {

	const { data, loading, error } = useDynamoDB('Tabla_Temperatura',
		['temperature', 'humidity',],
		{
			region: config.REACT_APP_AWS_REGION, // Cambia esto por la región en la que se encuentra tu tabla
			accessKeyId: config.REACT_APP_AWS_ACCESS_KEY_ID, // Cambia esto por tu accessKeyId
			secretAccessKey: config.REACT_APP_AWS_SECRET_ACCESS_KEY, // Cambia esto por tu secretAccessKey
			endpoint: config.REACT_APP_AWS_ENDPOINT, // Cambia esto por tu endpoint
		},

	);

	const [dataInfo, setDatainfo] = React.useState([{
		name: 'Temperatura',
		data: [{
			humidity: 0,
			temperature: 0,
			timestamp: 0
		}]

	}]);
	const [options, setOptions] = React.useState({

		chart: {
			height: 350,
			type: "bar",
			stacked: true,
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				borderRadius: 6,
				columnWidth: "45%",
				startingShape: "rounded",
				colors: {
					backgroundBarColors: ['#f0f5f2', '#f0f5f2', '#f0f5f2', '#f0f5f2', '#f0f5f2', '#f0f5f2', '#f0f5f2', '#f0f5f2'],
					backgroundBarOpacity: 1,
					backgroundBarRadius: 5,
				}
			},
			distributed: true
		},
		colors: ['#1f8cf0'],
		legend: {
			show: false
		},
		fill: {
			opacity: 1,
		},
		dataLabels: {
			enabled: false,
			colors: ['#000'],
			dropShadow: {
				enabled: true,
				top: 1,
				left: 1,
				blur: 1,
				opacity: 1
			}
		},
		stroke: {
			show: true,
			width: 1,
			colors: ['transparent']
		},
		grid: {
			borderColor: '#f0f5f2'
		},
		xaxis: {
			categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			labels: {
				style: {
					colors: '#787878',
					fontSize: '13px',
					fontFamily: 'poppins',
					fontWeight: 100,
					cssClass: 'apexcharts-xaxis-label',
				},
			},
			crosshairs: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
		},
		// yaxis: {
		// 	show: true,

		// 	labels: {
		// 		show: true,
		// 		align: 'right',
		// 		minWidth: 0,
		// 		maxWidth: 160,
		// 		style: {
		// 			colors: '#787878',
		// 			fontSize: '11px',
		// 			fontFamily: 'poppins',
		// 			fontWeight: 100,
		// 			cssClass: 'apexcharts-yaxis-label',
		// 		},
		// 	},
		// },
		tooltip: {
			x: {
				show: true
			}
		},
	});






	useEffect(() => {
		console.log(data);

		if (data) {
			setStateData();
		}

	}, []);

	if (loading) {
		return <div>Cargando...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}


	const setStateData = () => {
		const { Items } = data;
		const dataInfo = Items.map((item) => {
			return {
				humidity: item.humidity,
				temperature: item.temperature,
				timestamp: item.timestamp
			}
		});
		setDatainfo([{
			name: 'Temperatura',
			data: [...dataInfo]
		}]);
	}

	console.log(dataInfo);







	return (
		<div id="lineChart" >
			<ReactApexChart
				options={options}
				series={dataInfo}
				type="bar"
				height={350}
			/>
		</div >
	);

}

export default SellingApexChart;
