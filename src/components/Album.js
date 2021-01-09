import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAlbum } from '../redux/actions'

function Album (props) {
  const selectedUserId = useSelector(state => state.photos.selectedUserId);
  const dispatch = useDispatch();

  const handleSelectAlbum = () => {
    dispatch(selectAlbum(props.album.id))
  }

  return (
      <div className={`album ${props.album.id === selectedUserId && 'selected'}`}
           onClick={() => handleSelectAlbum()}>
        {props.album.title}
      </div>
  )
}

export default Album;