import React from "react"

const Card = (props) => {
    return (
        <div className="card">
            <img src={`src/assets/${props.image}`} />
            <div className="card--stats">
                <img src="src/assets/star.png" alt="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.review})</span> • <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
        
       
}

export default Card;