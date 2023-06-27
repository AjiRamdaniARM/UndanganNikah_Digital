import { animate, motion } from "framer-motion";
import React from "react";

export const UndanganNikahan = () => {
    return(
        <motion.div 
        initial = {{ scaleY: 0}}
        animate = {{ scaleY: 1}}
        exit={{ scaleY: 0}}
        >
        <div className="Undangan-Nikahan">
            <div>Heloo World</div>
        </div>
        </motion.div>
    )
}

export default UndanganNikahan;