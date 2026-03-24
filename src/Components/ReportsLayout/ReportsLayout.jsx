import React from "react";
import "./ReportsLayout.css";

const ReportsLayout = () => {
    // Sample report data
    const reports = [
    {
      id: 1,
      doctorName: "Dr. John Doe",
      speciality: "Cardiology",
      reportFile: "/patient_report.pdf",
    },
    {
        id: 2,
        doctorName: "Dr. Jane Smith",
        speciality: "Dermatology",
        reportFile: "/patient_report.pdf",
    },
];

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
                        <a
                          href={report.reportFile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="report-btn-link"
                          >
                            View Report
                            </a>
                        </td>

                        <td>
                            <a
                            href={report.reportFile}
                            download="patient_report.pdf"
                            className="report-btn-link"
                            >
                                Download Report
                                </a>
                            </td>
                        </tr>
                     ))}
                </tbody>
            </table>
        </div>
    ); 
};

export default ReportsLayout;
