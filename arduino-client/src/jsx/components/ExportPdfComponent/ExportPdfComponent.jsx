import React, {useRef} from 'react';
import ReactToPrint from 'react-to-print';

const ExportPdfComponent = () => {
	const pdfExportComponent = useRef(null);

	const handleExportWithComponent = (event) => {
		pdfExportComponent.current.save();
	};
	return (
		<div
			className="
			    d-flex flex-column justify-content-end align-items-end
			">
			<ReactToPrint
				content={() => pdfExportComponent.current}
				trigger={() => (
					<button className="btn btn-primary">
						<i className="fas fa-file-pdf m-1"></i>
						Exportar PDF
					</button>
				)}
			/>
		</div>
	);
};

export default ExportPdfComponent;
