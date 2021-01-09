import React from 'react'

function Photo (props) {

  return (
    <div className='photo'>
      <img src={props.photo.thumbnailUrl} alt="img"/>
    </div>
  )
}

export default Photo;