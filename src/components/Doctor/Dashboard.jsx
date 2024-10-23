import React from "react";

const Dashboard = () => {
  const appointments = [
    { time: "10:00 AM", patientName: "John Doe", reason: "Annual Check-up" },
    { time: "10:30 AM", patientName: "Jane Smith", reason: "Follow-up" },
  ];

  const patients = [
    { name: "Alice Johnson", lastVisit: "2023-05-01" },
    { name: "Bob Williams", lastVisit: "2023-05-28" },
  ];
  return (
    <main className="content">
      <h2>Welcome, Dr. Smith</h2>

      <div className="appointments">
        <h3>Today's Appointments</h3>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Patient Name</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.time}</td>
                <td>{appointment.patientName}</td>
                <td>{appointment.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />

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
    </main>
  );
};

export default Dashboard;
