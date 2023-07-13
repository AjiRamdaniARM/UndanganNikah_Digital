import React from 'react'
import "../style/style.css"
import Elementh3 from "../image/element-header1.png"


export const Header5 = () => {

    return(
        <div className='Header5'>
        <div className='container w-full p-10'>
            <center>
            <div className='Judul-widget mt-10'>
                <h1 style={{fontFamily: "font1"}} className='text-5xl text-pink-800'>Wishes</h1>
            </div>
            <p className=' text-1xl mt-10' style={{fontFamily: "Crimson-Italic" , }}>
            "Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu 
sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. 
Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
            </p>
            <div className='surat-widget mt-5' style={{fontFamily: "Crimson-Italic"}}>QS.Ar Rum : 21</div>
            <div className='container w-40 mt-5 lg:w-98 '>
                <img src={Elementh3} alt='element' />
           </div>
           </center>
        </div>
        </div>
    )
}

export default Header5