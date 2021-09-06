import React, { useState } from 'react';



function SelfCounter(){
    let [Counter , setCounter] = useState(1)
    let [genNum , setGenNum] = useState(['AbdulSaboor'])
    let [userName , setUserName] = useState(['AbdulSaboor','Hamza','Ali','Saboor'])

    function add(){
        setCounter(Counter + 1);
    }
    function minus(){
        setCounter(Counter - 1);
    }
    function updateUser(){
        let randomNumber = Math.floor(Math.random() * 3)
        // setUserName(userName[randomNumber])
        console.log(userName[randomNumber])
        let newName =userName[randomNumber];
        setGenNum(newName)
    }
    return(
        <div>
            <h1>{Counter}</h1>
            <h2>{genNum}</h2>
            <button onClick={add}>Add</button>
            <button onClick={minus}>Minus</button>
            <br />
            <button onClick={updateUser}>Update User</button>
        </div>
    )
}


export default SelfCounter;