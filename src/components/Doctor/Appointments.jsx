import React from 'react';

const Appointments = () => {
    const appointments = [
        { time: '10:00 AM', patientName: 'John Doe', reason: 'Annual Check-up' },
        { time: '10:30 AM', patientName: 'Jane Smith', reason: 'Follow-up' }
      ];
  return (
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
  )
};

export default Appointments;
