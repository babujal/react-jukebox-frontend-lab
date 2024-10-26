import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';



const TrackNew = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        artist: ''
    })
    const navigate = useNavigate();

    console.log(props)
    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent the submit default behavior to reload the page
        //it add to the pokemon array

        try {
            const newTrack = await axios.post(props.BASE_URL, formData);
            console.log('New track:', newTrack)
            props.fetchTracks()
        }catch(e) {
            console.log('Error creating new track!')
        }

        //navigate back to the /pokemon route
        navigate('/tracks');
    }

    const handleChange = e => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }


    return (
        <main>
            <h2>Add new track</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Title:</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                />

                <label htmlFor="name">Artist:</label>
                <input
                    type='text'
                    id='artist'
                    name='artist'
                    value={formData.artist}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default TrackNew;