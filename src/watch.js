import React from 'react';
import Pause from './images/pause.png'
import Play from './images/play.png'
import Refresh from './images/refresh-arrow.png'
import './resources/watch.css'


const Watch = ({reStart ,clearClock , startClock , sessionSeconds , sessionLength}) => {

    return(
        <div className='watch-container'>

            <h4>Session</h4>

             {sessionSeconds === 60 ? sessionLength < 10 ? <h1>0{sessionLength}:00</h1> : <h1>{sessionLength}:00</h1> : sessionSeconds < 10 ? sessionLength < 10 ? <h1>0{sessionLength}:0{sessionSeconds}</h1> : <h1>{sessionLength}:0{sessionSeconds}</h1> : sessionLength < 10 ? <h1>0{sessionLength}:{sessionSeconds}</h1> : <h1>{sessionLength}:{sessionSeconds}</h1> }
               
            <div className='operator-container'>
                <img onClick={startClock} src={Play} alt="play-button" />
                <img onClick={clearClock} src={Pause} alt="pause-button" />
                <img onClick={reStart} src={Refresh} alt="refresh-button" />

            </div>
        </div>

    );
}

export default Watch