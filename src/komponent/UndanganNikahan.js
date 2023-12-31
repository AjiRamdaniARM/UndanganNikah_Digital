import { animate, motion } from "framer-motion";
import React from "react";
import "./style/style.css";
import PopMusic from "./popup_music";
import Navbar from "./Navbar";
import Header1 from "./Halaman/Header1";
import Header2 from "./Halaman/Header2";
import Header3 from "./Halaman/Header3";
import Header4 from "./Halaman/Header4";
import Header5 from "./Halaman/Header5";



export const UndanganNikahan = (props) => {
    return(
        <motion.div 
        initial = {{ scaleY: 0}}
        animate = {{ scaleY: 1}}
        exit={{ scaleY: 0}}
        >
        <div className="Undangan-Nikahan">
            <Header1 />
            <Header2 />
            <Header3 />
            <Header4 />
            <Header5 />
             {/* <PopMusic />    */}
            <Navbar />
        </div>
        </motion.div>
    )
}

export default UndanganNikahan;

