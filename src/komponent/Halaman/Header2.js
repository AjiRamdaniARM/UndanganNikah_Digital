import React from 'react'
import BismillahColorPink from '../image/bismillah-pink.png';
import PotoLaki from "../image/poto-nikah/laki.jpg";
import PotoPerempuan from "../image/poto-nikah/perempuan.jpg";
import data from "../data.json";

export const Header2 = () => {
    const data2 = data.data2;
    const cicrcle = {
        borderRadius: "100%",
        width: 100,
        height: 100,
        
    }
    console.log(data2);
    return(
        <div className='Header2'>
            <center>
            <div className='container card bg-white/70 w-96  rounded-xl p-5   z-20 '>
                <div className='Arab-Bismillah w-28 mt-10 '>
                    <img src={BismillahColorPink} alt='arab' />
                </div>
                <div className='container'>
                    <h1 style={{fontFamily: 'font1' , fontSize: "20px"}}>Assalamualaikum Wr. Wb.</h1>
                    <p className='w-80 mt-4'>Tanpa mengurangi rasa hormat,
                    kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami.
                    </p>
                </div>
                <div className='container flex justify-center items-center p-10'>
                    <img src={PotoLaki} style={cicrcle} alt='potoLaki'  />&nbsp;&nbsp;&nbsp;
                    <img src={PotoPerempuan} style={cicrcle} alt='potoPerempuan' />
                </div>
                <dvi className="Text-Nama ">
                    {data2 && data2.map(({namaPanjangPerempuan, namaBapakPr, namaIbuPr, namaBapakLaki,namaIbuLaki,namaPanjangLaki}) => (
                        <div  className='data-data '>
                        <h6 style={{fontFamily: "font1", fontSize: "25px"}}>{namaPanjangPerempuan}</h6>
                        <p style={{fontFamily: "Montserrat-bold"}}>Putri  {namaBapakPr} & {namaIbuPr}  </p>
                        <h1 style={{fontFamily: "font1"}} className='text-3xl mt-3'> & </h1>
                        <h6 style={{fontFamily: "font1", fontSize: "25px"}}>{namaPanjangLaki}</h6>
                        <p style={{fontFamily:"Montserrat-Bold"}}> Putra dari {namaBapakLaki} & {namaIbuLaki}</p>
                    </div>
                    ))}
                    
                </dvi>
            </div>
            </center>
        </div>
    )
}

export default Header2;