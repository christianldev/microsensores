import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import ConnectioAWSDynamoDB from "../../../../config/aws.config";


const SellingApexChart = () => {

	const [dataInfo, setDatainfo] = React.useState([{
		name: "Temperatura",
		time: "2021-05-01T19:00:00.000Z",
		humidity: 0,
		temperature: 0,

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
		yaxis: {
			show: true,

			labels: {
				show: true,
				align: 'right',
				minWidth: 0,
				maxWidth: 160,
				style: {
					colors: '#787878',
					fontSize: '11px',
					fontFamily: 'poppins',
					fontWeight: 100,
					cssClass: 'apexcharts-yaxis-label',
				},
			},
		},
		tooltip: {
			x: {
				show: true
			}
		},
	});

	useEffect(() => {

		ConnectioAWSDynamoDB({ setDatainfo });
		OrderData(dataInfo);


	}, []);

	const OrderData = (data) => {
		const { Items } = data;
		dataInfo.map((item) => {
			console.log(item);
		}
		)
	};


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
