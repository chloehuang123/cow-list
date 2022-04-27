import React from 'react';

const Cow = ({ cow, handleCowClick }) => {
  return (
    <div onClick={handleCowClick}>
      {cow.name}
    </div>
  );
};

export default Cow;
