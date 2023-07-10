import React from 'react'
import BismillahColorPink from '../image/bismillah-pink.png';
import data from "../data.json";
import "../style/style.css";

export const Header2 = () => {
    const dataOrang = data.dataOrang;
    console.log(dataOrang);
    return(
        <div className='Header2'>
            <center>
            <div className='container  lg:max-w-xl max-w-sm  card bg-white/50 absolute mt-10 lg:-translate-x-12 lg:w-full lg:left-80  rounded-xl p-5  '>
                <div className='Arab-Bismillah w-28 mt-10 '>
                    <img src={BismillahColorPink} alt='arab' />
                </div>
                <div className='container'>
                    <h1 style={{fontFamily: 'font1' , fontSize: "20px"}}>Assalamualaikum Wr. Wb.</h1>
                    <p className='w-80 mt-4'>Tanpa mengurangi rasa hormat,
                    kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami.
                    </p>
                </div>
                <div className='container flex justify-center items-center p-10 '>
                  <div className='poto-laki shadow-lg'></div>&nbsp;&nbsp;
                  <div className='poto-pr shadow-lg'></div>
                </div> 
                <div className="Text-Nama ">
                    {dataOrang && dataOrang.map(({namaPanjangPerempuan, namaBapakPr, namaIbuPr, namaBapakLaki,namaIbuLaki,namaPanjangLaki}) => (
                        <div  className='data-data '>
                        <h6 style={{fontFamily: "font1", fontSize: "25px"}} className='text-pink-800'>{namaPanjangPerempuan}</h6>
                        <p style={{fontFamily: "Montserrat-bold"}}>Putri  {namaBapakPr} & {namaIbuPr}  </p>
                        <h1 style={{fontFamily: "font1"}} className='text-3xl mt-3'> & </h1>
                        <h6 style={{fontFamily: "font1", fontSize: "25px"}} className='text-pink-800'>{namaPanjangLaki}</h6>
                        <p style={{fontFamily:"Montserrat-Bold"}}> Putra dari {namaBapakLaki} & {namaIbuLaki}</p>
                    </div>
                    ))}
                    <br />
                    <br />
                    <br />
                </div>
            </div>
            </center>
        </div>
    )
}

export default Header2;