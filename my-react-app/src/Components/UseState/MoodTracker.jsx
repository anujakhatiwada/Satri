import React, { useState } from 'react'

const MoodTracker = () => {
    const[mood, setMood]= useState("😑")
    
        const happy =()=> {
            setMood("😁")
        };
        const neutral =()=> {
            setMood("😑")
        };
        const sad =()=> {
            setMood("😭")
        };
  return (
    <div>
      <h1>Current Mood: {mood}</h1>
        <button onClick={happy}>Happy</button>
        <button onClick={neutral}>Neutral</button>
        <button onClick={sad}>Sad</button>
    </div>
  )
}

export default MoodTracker
