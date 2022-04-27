import React from 'react';
import Cow from './Cow.jsx'

const CowList = ({cows, handleCowClick}) => {
  return (
    <div>
      {cows.map((i, index) => {
        return <Cow cow={i} key={index + i.name} handleCowClick={handleCowClick}/>
      })}
    </div>
  )
}

export default CowList;