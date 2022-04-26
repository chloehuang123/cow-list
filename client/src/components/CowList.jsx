import React from 'react';
import Cow from './Cow.jsx'

const CowList = ({cows}) => {
  return (
    <div>
      {cows.map(i => {
        return <Cow cow={i} key={i.id}/>
      })}
    </div>
  )
}

export default CowList;