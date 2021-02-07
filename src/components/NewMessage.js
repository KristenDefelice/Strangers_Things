import React, { useState } from 'react'

const NewMessage = () => {
    const [title, setTitle] = useState()
    return (
        <form>
           <div>
                <div>Create New Message:</div>
            <label>Title: </label>
            <input type="text" id="text" onChange={(event) => setTitle(event.target.value) }/>  
            <input type="button" value="Submit"/>
            </div>
        </form>
    )
}
export default NewMessage;