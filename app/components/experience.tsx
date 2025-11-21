'use client'
import React from 'react'
import { motion } from 'motion/react'

function Experience() {
  return (
    <div className='w-full h-screen'>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="https://artint-studios.s3-eu-central-2.ionoscloud.com/artint-studios-music-website.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/40 gap-5">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-gray-200 text-5xl font-bold text-center"
          >
            Artint Studios
          </motion.h1>

          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-gray-300 text-4xl font-normal text-center"
          >
            Where Sound Meets Emotion – A Journey Through Music.
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default Experience