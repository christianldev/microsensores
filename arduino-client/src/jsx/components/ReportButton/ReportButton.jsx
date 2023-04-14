import React from 'react';
import EventPage from '../Dashboard/EventPage';
import {Button} from 'react-bootstrap';
import {
	PDFDownloadLink,
	PDFViewer,
} from '@react-pdf/renderer';

export const ReportButton = () => {
	return (
		<div className="d-flex justify-content-end">
			<Button
				className="me-2"
				variant="warning btn-rounded">
				<span className="btn-icon-left text-info p-1">
					<i className="fa fa-download color-warning" />
				</span>
				Exportar PDF
			</Button>
			{/* <PDFDownloadLink
				document={<EventPage />}
				fileName="reporteTemperatura.pdf">
				<Button variant="info">Descargar PDF</Button>
			</PDFDownloadLink> */}
		</div>
	);
};
