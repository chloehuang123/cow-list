import React from 'react';

const CowChosen = (props) => {
  return (
    <div style={{ color: 'red', fontWeight: 'bold' }}>
      <div>Name: {props.selectedCow.name}</div>
      <div>description: {props.selectedCow.description}</div>
    </div>
  );
};

export default CowChosen;
