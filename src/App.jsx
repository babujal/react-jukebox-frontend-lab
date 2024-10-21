import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Card from './components/Card';
import TrackList from './components/TrackList';
import './App.css'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const songs = [
  {
    "_id": "67157773072a4950dd5db2b3",
    "title": "Purple Cats",
    "artist": "Chrypton",
    "__v": 0
},
{
    "_id": "67158ef5bb5679f1ce75fc36",
    "title": "Zatrinern",
    "artist": "Excavation",
    "__v": 0
},
{
  "_id": "67157773072a4950dd5db2b3",
  "title": "Purple Cats",
  "artist": "Chrypton",
  "__v": 0
},
{
  "_id": "67158ef5bb5679f1ce75fc36",
  "title": "Zatrinern",
  "artist": "Excavation",
  "__v": 0
}
]

function App() {
  return (
    <>
      <h1>Track List:</h1>
      <Routes>
        <Route path='/' element={<h1>Hello World</h1>} />
        <Route path='/tracks' element={< Card songs={songs} />} />
        {/* <Route path='/traks/new' element={<NewTrack />} />
        <Route path='/traks/:id' element={<EditTrack />} /> */}
        <Route path='*' element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  )
}

export default App
