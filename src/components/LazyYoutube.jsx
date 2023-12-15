import React, { useState, useEffect, useRef } from 'react'

export const LazyYoutube = ({ videoId }) => {
  const [load, setLoad] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true)
        observer.disconnect()
      }
    })

    observer.observe(videoRef.current)

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <div className="flex items-center justify-center" ref={videoRef}>
      {load ? (
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading Video...</p>
      )}
    </div>
  )
}

export default LazyYoutube
