import React from 'react';
import '../styles/Info.css'; 

const Info = ({ name, phone, email }) => {
  return (
    <div className="info-container">
      <h1>Інформація про мене</h1>
      <p><strong>ПІБ:</strong> {name}</p>
      <p><strong>Контактний телефон:</strong> {phone}</p>
      <p><strong>Електронна адреса:</strong> {email}</p>
    </div>
  );
};

export default Info;

