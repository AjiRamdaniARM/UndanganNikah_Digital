import React from 'react'
import "../style/style.css";
import SaveTheDate from "../image/save-the-date.png";
import data from "../data.json";
import Map from "../image/Map.png";

export const Header3 = () => {
    const dataL = data.dataL;
    return(
        <div className='Header3 w-full'>
            <center>
            <div className='container p-20'>
                <div className='save-the-date-widget '>
                    <img style={{width:"100px"}} src={SaveTheDate} alt='saveTheDate'/>
                </div>
                <div className='TextData1-Widget p-3'>
                    <h1 style={{fontFamily: "font1"}} className='text-3xl text-pink-800'>Akad Nikah</h1>
                    {dataL && dataL.map(({Deadline, Waktu, LokasiAcara}) =>(
                        <div style={{ fontWeight: "bold"}} className='widget-datajson m-2'>
                            <h1 style={{textTransform : "uppercase", fontFamily: "Montserrat-Bold"}} className='w-full text-1xl'  >{Deadline}</h1>
                            <h6>{Waktu}</h6>
                           <div className='mt-10'>
                            <h6 className=''> Lokasi Acara</h6>
                            <p style={{fontFamily: "Montserrat", width: "290px", fontSize: "11px"}} className=' relative right-16'>{LokasiAcara}</p>
                            <div className='container flex justify-center items-center mt-3'>
                                <img src={Map} alt='iconMaps' className='w-5'/>
                                <h6>Lihat Maps</h6>
                            </div>
                           </div>
                            </div>
                    ))}


                </div>
            </div>
            </center>
        </div>
    )
}

export default Header3;