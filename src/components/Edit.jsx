import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';



const Edit = (props) => {

    const trackToEdit = props.tracks.find(track => {
        return track._id === (useParams().id)
    })

    const [formData, setFormData] = useState(trackToEdit)
    const navigate = useNavigate();

    console.log('Track to Edit:', trackToEdit)
    console.log('Track to Edit id:', trackToEdit._id)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const editedTrack = await axios.put(`${props.BASE_URL}${trackToEdit._id}`, formData);
            console.log('Updated track:', editedTrack)
            props.fetchTracks()
        }catch(e) {
            console.log('Error creating new track!')
        }

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

export default Edit;