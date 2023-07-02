import { animate, motion } from "framer-motion";
import React from "react";
import "./style/style.css";
import PopMusic from "./popup_music";
import Navbar from "./Navbar";
import Header1 from "./Halaman/Header1";



export const UndanganNikahan = (props) => {
    return(
        <motion.div 
        initial = {{ scaleY: 0}}
        animate = {{ scaleY: 1}}
        exit={{ scaleY: 0}}
        >
        <div className="Undangan-Nikahan HalamaDepan">
            <Header1 />
            {/* <PopMusic />  */}
            <Navbar />
        </div>
        </motion.div>
    )
}

export default UndanganNikahan;