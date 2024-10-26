import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Card from './components/Card';
import TrackNew from './components/newTrack';
import axios from 'axios'
import './App.css'
import Edit from './components/Edit';


function App() {

  const [tracks, setTracks] = useState([])

  const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks/`;


  useEffect(() => {
    console.log('Tracks found:', tracks)
  }, [tracks])

  const fetchTracks = () => {
    axios
    .get(BASE_URL)
    .then(v => {
      setTracks(v.data)
    })
    .catch(error => {
      console.log('Error:', error)
    })
  }

  useEffect(() => {
    fetchTracks()
  }, [])

  return (
    <>
    <Link to={'/tracks/new'}><button>Add New Track</button></Link>
      <Routes>
        <Route path='/' element={<h1>Hello World</h1>} />
        <Route path='/tracks' element={< Card tracks={tracks} fetchTracks={fetchTracks} BASE_URL={BASE_URL} />} />
        <Route path='/tracks/new' element={< TrackNew setTracks={setTracks} tracks={tracks} BASE_URL={BASE_URL} fetchTracks={fetchTracks} />} />
        <Route path='/tracks/:id' element={<Edit tracks={tracks} BASE_URL={BASE_URL} fetchTracks={fetchTracks} />} />
        <Route path='*' element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  )
}

export default App
