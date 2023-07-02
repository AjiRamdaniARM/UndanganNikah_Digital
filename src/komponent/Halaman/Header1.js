import React from 'react'
import { StylingImage } from '../HalamanDepan'
import data from "../data.json";
class Header1 extends React.Component   {
render() {
    return(
        <div className='Header1 text-center block justify-center items-center z-10 w-full p-14 column'>
            <div className='Text-Wedding  '>
                <h3 style={styleWedding} className=''>THE WEDDING OF</h3>
            </div>
            <center>
            <div className='Poto1 p-5'>
                <StylingImage />
            </div>
            
                {data && data.map(({namaPerempuan, namaLakilaki}) => (
                   <div className='nama flex justify-center items-center text-4xl'>
                <h2>{namaPerempuan}</h2>
                 <h2>{namaLakilaki}</h2> 
                    </div>
                ))}
            </center>
          
        </div>
    )
}
}

// style react js
const styleWedding = {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'Bold',
    color: '#C2118A'
}

export default Header1