import React from 'react';


function Story({heading,title,para}){
    return(
        <div>
            <h1>{heading}</h1>
            <h2>{title}</h2>
            <p>{para}</p>
        </div>
    )
}

export default Story;