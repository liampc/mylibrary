import React from 'react'

const Forms = () => {
    return (
       <form>
            <input type="text" name="add-title" id="input-title" placeholder="Title" />
            <input type="text" name="add-author" id="input-author" placeholder="Author" />
            <select id="status">
                <option value="To-Read">To Read</option>
                <option value="Read">Read</option>
            </select>
            <button> Save Book</button>
       </form>
    )
}

export default Forms