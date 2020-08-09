import React from 'react'
import library from "./assets/library.jpg"

const Banner = () => {
    const style = {
        backgroundImage: `url(${library})`
    }

    return(
        <header style={style}>
            <h1>My Library</h1>
        </header>
        
    )
}

export default Banner