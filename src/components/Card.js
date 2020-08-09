import React from 'react'

const Card = () => {
    return(
        <li class={"book-card"}>
            <span> One Hundred Years of Solitude </span>
            <span>Gabriel Garcia Marquez</span>
            <button className={"status-btn"}>Read</button>
            <button className={"remove-btn"}> x </button>
        </li>
       
        
    )
}

export default Card