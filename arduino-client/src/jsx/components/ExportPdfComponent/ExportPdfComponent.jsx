import React from 'react';

const ExportPdfComponent = ({handlePrint}) => {
	return (
		<div
			onClick={handlePrint}
			className="
			    d-flex flex-column justify-content-end align-items-end
			">
			<button className="btn btn-primary">
				<i className="fas fa-file-pdf m-1"></i>
				Export PDF
			</button>
		</div>
	);
};

export default ExportPdfComponent;
