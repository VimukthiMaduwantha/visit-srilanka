import React from 'react'
import ee from '../assets/eee.jpg'
import video from '../video/sll.mp4'
import VideoPlayer from 'react-video-js-player'

export default function Video() {

    const videoSrc = video;
    const poster = ee
    return (
        <>
            <VideoPlayer src={videoSrc} poster={poster} />
        </>
    )
}
