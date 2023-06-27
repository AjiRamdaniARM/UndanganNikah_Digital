import React from "react";
import { motion } from "framer-motion"
import "./style/style.css";
import "../App.css";
import Object1 from "./image/object1.png";
import Object2 from "./image/Object2.png";
import { Link } from "react-router-dom/cjs/react-router-dom";


const HalamanDepan = () => {
// data nama dan api poto online
const namaLakilaki = "Aji";
const namaPerempuan = "Freya";
const namaTamu = "Anisa Rahmah";
const namaKota = "Kota Sukabumi";
const dataPoto1 = "https://cdn.popbela.com/content-images/post/20210312/139100098-1380320869032981-610290125731563906-n-5feb75ea0165023f41286ddc635c30e1.jpg";


// jalankan perintah code 
    return(
        <div  className="HalamaDepan">
             <div className="object1 container  absolute flex justify-end items-end lg:right-44 xl:-left-80">
                <img width={300}  src={Object1} alt="bunga1" />
            </div> 
            <center >
            <motion.div
            id="nama"
            initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 4,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
            >
                <div className="shape1 z-10">
                    <img width="190px" className="image-poto m-0 shadow-md" src={dataPoto1}/>

          
                <div id="nama" className="nama flex justify-center items-center text-4xl p-10">
                    <h2>{namaPerempuan}</h2>&nbsp;<text>&</text>&nbsp;
                    <h2>{namaLakilaki}</h2>
                </div>
              
                {/* data kedua  */}
                <div className="Tujuan">
                    <h6 className="p-3 font-serif">Kepada Bapak/Ibu/Saudara/i</h6>
                    <h1 className="font-bold  text-3xl">{namaTamu}</h1>
                    <h6 className=" text-1xl">{namaKota}</h6>
                    {/* data default */}
                    <p className="m-5 w-72">Kami Mengundang Anda untuk hadir di acara pernikahan kami.</p>
                    <a href="/UndanganNikahan"  className="bg-white rounded-full w-44 h-11 flex items-center justify-center ">
                        <img width="25" src="https://www.svgrepo.com/show/500617/message.svg" />&nbsp;
                        Undangan Kami</a>
                </div>
                </div>
                </motion.div>
            </center>
            <div className="object2 container absolute flex justify-start items-start mt-7 z-0">
                <img width={230} className=""  src={Object2} alt="bunga2" />
            </div>
        </div>
    )
}
export default HalamanDepan;