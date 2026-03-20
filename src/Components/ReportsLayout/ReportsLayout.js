import React from "react";
import "./ReportsLayout.css";

const ReportsLayout = () => {
    // Sample report data
    const reports = [
    {
      id: 1,
      doctorName: "Dr. John Doe",
      speciality: "Cardiology",
    },
    {
        id: 2,
        doctorName: "Dr. Jane Smith",
        speciality: "Dermatology",
    },
];

// View report
const handleViewReport = (doctorName) => {
    alert(`Viewing report for ${doctorName}`);
};

// Download report
const handleDownloadReport = (doctorName) => {
    alert(`Downloading report for ${doctorName}`);
};

return (
    <div className="reports-container">
        <h2 className="reports-title">Reports</h2>

        <table className="reports-table">
            <thead>
                <tr>
                    <th>Serial Number</th>
                    <th>Doctor Name</th>
                    <th>Doctor Speciality</th>
                    <th>View Report</th>
                    <th>Download Report</th>
                </tr>
            </thead>

            <tbody>
                {reports.map((report) => (
                    <tr key={report.id}>
                       <td>{report.id}</td>
                       <td>{report.doctorName}</td>
                       <td>{report.speciality}</td>
                       <td>
                        <button
                        className="report-btn"
                        onClick={() => handleViewReport(report.doctorName)}
                        >
                            View Report
                        </button>
                        </td>
                        <td>
                            <button
                            className="report-btn"
                            onClick={() => handleDownloadReport(report.doctorName)}
                            >
                             Download Report
                         </button>
                    </td>
                </tr>
            ))}
        </tbody>
        
     </table>
   </div>
  );
};

export default ReportsLayout;
