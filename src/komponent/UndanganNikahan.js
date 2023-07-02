import { animate, motion } from "framer-motion";
import React from "react";
import "./style/style.css";
import PopMusic from "./popup_music";
import Navbar from "./Navbar";



export const UndanganNikahan = () => {
    return(
        <motion.div 
        initial = {{ scaleY: 0}}
        animate = {{ scaleY: 1}}
        exit={{ scaleY: 0}}
        >
        <div className="Undangan-Nikahan HalamaDepan">
            {/* <PopMusic /> */}
            <Navbar />
        </div>
        </motion.div>
    )
}

export default UndanganNikahan;