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
    <div style={{
        width: 'min(90vw, 460px)',
        padding: '18px',
        border: '1px solid #0a0a0a',
        borderRadius: '24px',
        background: 'linear-gradient(145deg, #92d9e6, #f1f3f7)',
        boxShadow: '0 14px 35px rgba(15, 23, 42, 0.25)',
        textAlign: 'center',
    }}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'16px'}}>
            <video style={{
                display: 'block',
                width: '100%',
                height: '300px',
                borderRadius: '16px',
                background: '#020617',
                objectFit: 'cover',
            }} ref={vidRef} src={src} controls={false} onPlay={()=>setIsPlaying(true)}
                onPause={()=>setIsPlaying(false)}></video>
            <h1 style={{
                margin: '0',
                fontSize: 'clamp(1.4rem, 5vw, 2rem)',
                fontWeight: '700',
                color:'black',
            }}>{name}</h1>
            <div style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                gap:'10px',
                width:'100%',
                padding:'10px',
                borderRadius:'16px',
                background:'#020617',
            }}>
                <button style={controlButtonStyle} onClick={handleback} aria-label="Rewind 10 seconds"><TbRewindBackward10 /></button>
                <button style={controlButtonStyle} onClick={handlePrev} disabled={video === 0} aria-label="Previous video"><IoPlayBackSharp /></button>
                <button style={{...controlButtonStyle, background: '#2563eb', width: '48px', height: '48px'}} onClick={handleVideo} aria-label={isPlaying ? 'Pause video' : 'Play video'}>
                    {isPlaying ? '||' : <IoPlayOutline />}
                </button>
                <button style={controlButtonStyle} onClick={handleNext} disabled={video === getData.length - 1} aria-label="Next video"><IoMdFastforward /></button>
                <button style={controlButtonStyle} onClick={handleForward} aria-label="Forward 10 seconds"><TbRewindForward10 /></button>
            </div>
        </div>  
    </div>
  )
}

export default Cards