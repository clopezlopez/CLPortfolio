import React from 'react'


function Title ({title}) {
  return (
      <div className="title">
        <h1>{title}</h1>
        <div className="progress">
          <span className="progress-value"></span>
        </div>
      </div>
  )
}

export default Title