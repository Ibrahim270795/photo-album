import React, { useEffect } from 'react'
import Albums from './Albums'
import Photos from './Photos'
import { loadAlbums, loadPhotos } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import ReactLoading from 'react-loading'

function App() {
  const loadingAlbums = useSelector(state => state.albums.loading);
  const loadingPhotos = useSelector(state => state.photos.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAlbums())
    dispatch(loadPhotos())
  }, [])

  if (loadingAlbums || loadingPhotos) {
    return <ReactLoading color='red'/>
  }

  return (
    <div className='container'>
        <Albums/>
        <Photos/>
    </div>
  );
}

export default App;
