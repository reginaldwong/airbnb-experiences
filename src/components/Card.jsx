import React from "react"

const Card = (props) => {
    return (
        <div className="card">
            {props.item.openSpots === 0 && <div className="card--badge">Sold Out!</div>}
            {props.item.staffPick && <div className="card--staff">Staff Pick!</div>}
            <img src={`src/assets/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="src/assets/star.png" alt="star" className="card--stats--star"/>
                <span className="card--stats--rating">{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount})</span> <span className="gray card--stats--location">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--host">Hosted by {props.item.host}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
        
       
}

export default Card;