import React, { useState } from 'react'
import Cards from './Cards'

let getData = [
    {
        "name":"Devara",
        "src":"/videos/Video-1.mp4"
    },
    {
        "name":"Dacoit",
        "src":"/videos/Video-2.mp4"
    },
    {
        "name":"Tholi Prema",
        "src":"/videos/Video-3.mp4"
    },
    {
        "name":"Krishnarjuna Yudham",
        "src":"/videos/Video-4.mp4"
    },
    {
        "name":"Andhala Rakshasi",
        "src":"/videos/Video-5.mp4"
    },
    {
        "name":"Peddi",
        "src":"/videos/Video-6.mp4"
    },
    {
        "name":"Vishwanath and Sons",
        "src":"/videos/Video-7.mp4"
    },
    {
        "name":"Orange",
        "src":"/videos/Video-8.mp4"
    },

]

const VideoContainer = () => {
     let [video,setVideo] = useState(0)

    let handlePrev=()=>{
        if (video>0){
            setVideo(video-1)
        }
    }
    let handleNext = () => {
        if (video < getData.length - 1) {
            setVideo(video + 1);
        }
    }
  return (
      <div style={{
          position: 'relative',
          display: 'flex',
          maxHeight:'100vh',
          padding:'20px',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #545557 0%, #20e8f7 48%, #595a5c 100%)',
          fontFamily: 'Arial, sans-serif',
      }}>
    
          <div style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              maxWidth: '520px',
              gap: '24px',
          }}>
              <h1 style={{color:'white'}}>Video Song's</h1>
              <Cards
                  el={getData[video]}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  getData={getData}
                  video={video}
              />
          </div>
      </div>
    )
}

export default VideoContainer