import React from 'react'
import { useSelector } from 'react-redux'
import Photo from './Photo'

function Photos (props) {
  const photos = useSelector(state => state.photos.photos);
  const selectedUserId = useSelector(state => state.photos.selectedUserId);
  const filteredPhotos = photos.filter(photo => photo.albumId === selectedUserId);

  if (selectedUserId === null) {
    return (
      <div className='null'>
        👈 выбери нужный альбом
      </div>
    )
  }
  return (
    <div className='photos'>
      {filteredPhotos.map(photo => {
          return <Photo photo={photo} key={photo.id}/>
        }
      )}
    </div>
  )
}

export default Photos