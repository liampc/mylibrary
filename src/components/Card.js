import React from 'react'

const Cell = () => {
    return(
        <li class="book-card" data-index="0">
            <span> One Hundred Years of Solitude </span>
            <span>Gabriel Garcia Marquez</span>
            <button class="status-btn">Read</button>
            <button class="remove-btn"> x </button>
        </li>
       
        
    )
}

export default Cell