import React, { useRef } from "react";
import './ReproductorVideo.css';
import video from '../../assets/render-taloin.mp4';

const ReproductorVideo = ({playState, setPlayState}) =>{

    const reproductor = useRef(null);

    const cerrarReproductor = (e)=>{
        if(e.target === reproductor.current){
            setPlayState(false);
        }
    }

    return(
        <div className={`reproductor-video ${playState?'':'hide'}`} ref={reproductor} onClick={cerrarReproductor}>
            <video src={video} autoPlay controls></video>
        </div>
    )
}

export default ReproductorVideo