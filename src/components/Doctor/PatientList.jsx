import React from "react";

const PatientList = () => {
  const patients = [
    { name: "Alice Johnson", lastVisit: "2023-05-01" },
    { name: "Bob Williams", lastVisit: "2023-05-28" },
  ];

  return (
    <div className="patients">
      <h3>Recent Patients</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Visit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.name}</td>
              <td>{patient.lastVisit}</td>
              <td>
                <button className="view-button">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
