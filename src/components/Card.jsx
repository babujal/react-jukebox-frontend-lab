import './Card.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from "react";

const Card = (props) => {

    const [nowPlaying, setNowPlaying] = useState()

    const handleNowPlaying = (el) => {
        setNowPlaying(el)
        console.log('Now Playing:', nowPlaying)
    }

    const handleDelete = async (id) => {
        console.log(`delete URL: ${props.BASE_URL}${id}`)
        try {
            await axios.delete(`${props.BASE_URL}${id}`);
            props.fetchTracks()
        } catch (e) {
            console.log('Error deleting track!', e)
        }
    }

    return (
        <>
            <div>
                <h1 className='trackListh1'>Track List:</h1>
            </div>
            <div className="cardsDiv" >
                {props.tracks.map((el) => (
                    <>
                        <div className="card" key={el._id} style={{ margin: '10px' }}>
                            <p>{el.title} by {el.artist}</p>
                            <div>
                                <button onClick={() => handleNowPlaying(el)}>Play</button>
                                <Link to={`/tracks/${el._id}`}><button>Edit</button></Link>
                                <button onClick={() => handleDelete(el._id)}>Delete</button>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            {nowPlaying ?
                <div className='nowPlaying'>
                    <h2>Now Playing:</h2>
                    <p>Title: {nowPlaying.title}</p>
                    <p>Artist: {nowPlaying.artist}</p>
                </div> : null}
        </>
    )
}

export default Card