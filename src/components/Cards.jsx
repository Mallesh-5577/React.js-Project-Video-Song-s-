import React, { useRef, useState } from 'react'
import { IoPlayBackSharp } from "react-icons/io5";
import { IoMdFastforward } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { TbRewindForward10 } from "react-icons/tb";
import { TbRewindBackward10 } from "react-icons/tb";

const Cards = ({el,handleNext,handlePrev,getData,video}) => {
    let {name,src} = el
    let vidRef = useRef(null)
    let [isPlaying, setIsPlaying] = useState(false)
    let controlButtonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '42px',
        height: '42px',
        padding: '0',
        border: 'none',
        borderRadius: '50%',
        background: '#1f2937',
        color: 'white',
        fontSize: '20px',
        cursor: 'pointer',
    }

    let handleVideo=()=>{
        if (vidRef.current.paused) {
            vidRef.current.play()
        }
        else {
            vidRef.current.pause()
        }
    }

    let handleback =()=>{
        vidRef.current.currentTime-=10
    }
    let handleForward =()=>{
        vidRef.current.currentTime+=10
    }

  return (
    <section className="video-card">
        <div className="video-card-content">
            <video className="video-player" ref={vidRef} src={src} controls={false} onPlay={()=>setIsPlaying(true)}
                onPause={()=>setIsPlaying(false)}></video>
            <h1 className="video-title">{name}</h1>
            <div className="video-controls">
                <button style={controlButtonStyle} onClick={handleback} aria-label="Rewind 10 seconds"><TbRewindBackward10 /></button>
                <button style={controlButtonStyle} onClick={handlePrev} disabled={video === 0} aria-label="Previous video"><IoPlayBackSharp /></button>
                <button style={{...controlButtonStyle, background: '#2563eb', width: '48px', height: '48px'}} onClick={handleVideo} aria-label={isPlaying ? 'Pause video' : 'Play video'}>
                    {isPlaying ? '||' : <IoPlayOutline />}
                </button>
                <button style={controlButtonStyle} onClick={handleNext} disabled={video === getData.length - 1} aria-label="Next video"><IoMdFastforward /></button>
                <button style={controlButtonStyle} onClick={handleForward} aria-label="Forward 10 seconds"><TbRewindForward10 /></button>
            </div>
        </div>  
    </section>
  )
}

export default Cards