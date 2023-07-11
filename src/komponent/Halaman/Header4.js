import React from 'react'
import "../style/style.css";
import { Carousel } from 'react-carousel-minimal';
import data from "../data.json";

  const dataPoto = data.dataPoto;
export const Header4 = () => {
    const captionStyle = {
        fontFamily : "Montserrat",
        fontWeight: "bold",
        fontSize: "20px"
    }
    return(
        <div className='Header4 '>
            <center>
            <div className='p-14 lg:p-1'>
                <div className='w-full'>
                    <h1 style={{fontFamily: "font1"}} className='text-5xl lg:text-3xl mt-16 text-pink-800 '>Galery</h1>
                </div>
                </div>
                <div className='mt-10 lg:p-10 lg:mt-1 p-2 '>
                    <Carousel 
                    data={dataPoto}
                    time={9000}
                    width="850px"
                    height="500px"
                    captionStyle={captionStyle}
                    radius="10px"
                    slideNumber={true}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                      textAlign: "center",
                      maxWidth: "850px",
                      maxHeight: "500px",
                      margin: "40px auto",
                    }}
                    />
            </div>
            </center>
        </div>
    )
}

export default Header4;