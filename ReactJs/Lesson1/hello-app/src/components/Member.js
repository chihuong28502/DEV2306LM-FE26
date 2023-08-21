import React from 'react'

export default function Member(props) {
  return (
    <div>
      <div className=''>
        <div>
          {props.name}
        </div>
        <div>
          {props.age}
        </div>
      </div>
    </div>
  )
}

