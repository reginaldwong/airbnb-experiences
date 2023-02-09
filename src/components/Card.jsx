import React from "react"

const Card = (props) => {
    return (
        <div className="card">
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={`src/assets/${props.image}`} className="card--image" />
            <div className="card--stats">
                <img src="src/assets/star.png" alt="star" className="card--stats--star"/>
                <span className="card--stats--rating">{props.rating}</span>
                <span className="gray">({props.review})</span> <span className="gray card--stats--location">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--host">Hosted by {props.host}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
        
       
}

export default Card;