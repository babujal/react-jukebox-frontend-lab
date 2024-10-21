import './Card.css'

const Card = (props) => {
    return (
        <>
            <div className="cardsDiv" >
                {props.songs.map((el) => (
                    <>
                        <div className="card" key={el._id} style={{margin: '10px'}}>
                            <p>{el.title} by {el.artist}</p>
                            <div>
                            <button>Play</button>
                            <button>Edit</button>
                            <button>Delete</button>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default Card