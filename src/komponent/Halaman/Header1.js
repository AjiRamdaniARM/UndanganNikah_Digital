import React, {useEffect,useState, useRef} from 'react'
import { StylingImage } from '../HalamanDepan'
import data from "../data.json";
import loveCouple from "../image/loveCouple.png";

const data2 = data.data2;

class Header1 extends React.Component   {
    render() {
    return(
        <div className='Header1  text-center block justify-center items-center z-10 w-full p-14 column'>
            <div className='Text-Wedding  '>
                <h3 style={styleWedding} className=''>THE WEDDING OF</h3>
            </div>
            <center>
            <div className='Poto1 p-5'>
                <StylingImage />
            </div>
                {data2.map(({namaPerempuan, namaLakilaki}) => (
                   <div className='nama  flex justify-center items-center text-4xl p-3'>
                <h2>{namaPerempuan}</h2>&nbsp;<img width={50} src={loveCouple} />&nbsp;
                 <h2>{namaLakilaki}</h2> 
                    </div>
                ))}
            {data2 && data2.map((data2) => (
            <div className='post p-5'>
              <h2 style={{fontFamily: 'Montserrat-Bold', fontWeight: 'normal'}} className='title w-56  p-2 '>{data2.deskripsi1}</h2>
              <TimerDays />
              <p style={{fontFamily: "Montserrat-Bold", fontWeight: "normal"}} className='content p-2'>{data2.Deadline}</p>
            </div>
          ))}
            </center>
        </div>
    )}
}
// style react js
const styleWedding = {
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'Bold',
    color: '#C2118A'
}

export default Header1


// element timer days in react
export const TimerDays = () => {

    const [timeHari, setTimerHari] = useState('00');
    const [timeJam, setTimerJam] = useState('00');
    const [timeMenit, setTimerMenit] = useState('00');
    const [timeDetik, setTimerDetik] = useState('00');

    let interval = useRef();
    
    const startTimer = () => {
        const countdownDate = new Date('November 19 2027 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const Hari = Math.floor ( distance / (1000 * 60 * 60 * 9000));
            const Jam = Math.floor ( distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const Menit = Math.floor(( distance % (1000 * 60 * 60 )) / (1000 * 60 )) ;
            const Detik = Math.floor (( distance %(1000 * 60)) / 1000);

            if (distance < 0 ) {
                // stopp out timer
                clearInterval(interval.current)
            }else {
                // update waktu

                setTimerHari(Hari);
                setTimerJam(Jam);
                setTimerMenit(Menit);
                setTimerDetik(Detik);
            }
        }, 1000)

    };

    useEffect(() => {
        startTimer();
        return() => {
            clearInterval(interval.current)
        }
    })


    return(
        <section className='timer-container w-full '>
            <div  className='Timer flex columns-4 items-center justify-center'>
                <section className='Days w-24 h-12 rounded-lg bg-white border-fuchsia-700 border-2 border-solid '>
                    <p className='font-bold text-2xl h-5'>{timeHari}</p>
                    <p><small>Hari</small></p>
                </section>&nbsp;&nbsp;
                <section className='Days w-24 h-12 rounded-lg bg-white border-fuchsia-700 border-2 border-solid '>
                    <p className='font-bold text-2xl h-5'>{timeJam}</p>
                    <p><small>Jam</small></p>
                </section>&nbsp;&nbsp;
                <section className='Jam w-24 h-12 rounded-lg bg-white border-fuchsia-700 border-2 border-solid '>
                    <p className='font-bold text-2xl h-5'>{timeMenit}</p>
                    <p><small>Menit</small></p>
                </section>&nbsp;&nbsp;
                <section className='Days w-24 h-12 rounded-lg bg-white border-fuchsia-700 border-2 border-solid '>
                    <p className='font-bold text-2xl h-5'>{timeDetik}</p>
                    <p><small>Detik</small></p>
                </section>
            </div>
        </section>
    )
}