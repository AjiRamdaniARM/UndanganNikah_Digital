import React from 'react'
import Music1 from "./music/Shane Filan - Beautiful In White.mp3"
export const PopMusic = () => {

    return(
        <div className='PopUp-Music fixed bottom-28 left-5'>
<audio autoPlay controls loop="true" className="Play">
    <source src={Music1} type="audio/mpeg"></source>
   </audio>
        </div>
    )
}

export default PopMusic;