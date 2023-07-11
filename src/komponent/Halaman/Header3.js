import React, { Component } from 'react'
import "../style/style.css";
import SaveTheDate from "../image/save-the-date.png";
import data from "../data.json";
import Elementh3 from "../image/element-header1.png";
import MapsWhite from "../image/MapsWhite.png";

const dataL = data.dataL;
const LinkMap = data.Link;

export const Header3 = () => {
    return(
        <div className='Header3 w-full'>
            <center>
            <div className='container p-20'>
                <div className='save-the-date-widget '>
                    <img style={{width:"100px"}} src={SaveTheDate} alt='saveTheDate'/>
                </div>
                <div className='TextData1-Widget p-3'>
                    <h1 style={{fontFamily: "font1"}} className='text-3xl text-pink-800'>Akad Nikah</h1>
                    {dataL && dataL.map(({Deadline, Waktu, LokasiAcara, WaktuResepsi}) =>(
                        <div style={{ fontWeight: "bold"}} className='widget-datajson m-2'>
                            <h1 style={{textTransform : "uppercase", fontFamily: "Montserrat-Bold"}} className='w-full text-1xl'  >{Deadline}</h1>
                            <h6>{Waktu}</h6>
                           <div className='mt-3'>
                            <h6 className=''> Lokasi Acara</h6>
                            <p style={{fontFamily: "Montserrat", fontWeight: "normal" ,width: "290px", fontSize: "11px"}} className=' relative right-16'>{LokasiAcara}</p>
                            <ButtonMap />

                            <div className='container mt-10 lg:w-40 '>
                                <img src={Elementh3} alt='element' />
                            </div>

                            <div className='container widget-2'>
                            <div className='save-the-date-widget  mt-8'>
                    <img style={{width:"100px"}} src={SaveTheDate} alt='saveTheDate'/>
                </div>
                <h1 style={{fontFamily: "font1", fontWeight :"normal"}} className='text-3xl text-pink-800 mt-2'>Resepsi</h1>
                <div className='container w-full mt-2'>
                    <h1 style={{fontFamily :"Montserrat-Bold", fontWeight: "bold", textTransform: "uppercase"}} className='text-1xl w-full'>{Deadline}</h1>
                    <h6>{WaktuResepsi}</h6>
                </div>
                <div className='mt-3'>
                    <h6>Lokasi Acara</h6>
                    <p style={{fontFamily: "Montserrat", fontWeight:"normal", width: "290px", fontSize: "11PX"}} className='relative right-16'>{LokasiAcara}</p>
                </div>
                                </div>
                                <ButtonMap />
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

export const ButtonMap = () => {
    return(
        <div>
                {LinkMap && LinkMap.map(({LinkMap}) => (
                                 <a href={LinkMap} >
                                 <div className='container flex justify-center items-center mt-3 bg-pink-800 text-white rounded-full h-10'>
                                     <img src={MapsWhite} alt='iconMaps' className='w-5'/>
                                     <h6>Lihat Maps</h6>
                                 </div></a>
     
                            ))}
                           
        </div>
    )
}