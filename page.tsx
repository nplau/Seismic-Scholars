"use client"

import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, FileText, Star, Rocket, Users, AlertTriangle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"

export default function Component() {
  const [files, setFiles] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prevFiles => [...prevFiles, ...acceptedFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv']
    }
  })

  const teamMembers = [
    {
      name: "Nain Abdi",
      role: "Electrical Engineering Student",
      bio: "Meet Nain: Your friendly neighborhood electrical engineer-in-training, powered by coffee and a love for circuits! ⚡️ Currently juggling a few internships and a student project, I’m on a quest to crack the code of recruitment in the electrical engineering realm. If you’ve got stories to share (or just want to swap terrible puns), let’s grab a coffee—virtual or in-person—because who doesn’t love a good chat?"  },
    {
      name: "Shaelyn McBride",
      role: "Electrical Engineering Student",
      bio: "Meet Shaelyn: A tech enthusiast by day and a superhero of creativity by night! Currently diving into the world of hardware engineering as an intern at Aversan Inc., she’s on a mission to make gadgets smarter and cooler. When she's not designing electrical drawings for the TTC or troubleshooting systems at Crosslinx, you can find her whipping up science experiments for kids or teaching little ones how to skate like pros!"   },
    {
      name: "Sanjitha Vasu",
      role: "Electrical Engineering Student",
      bio: "Meet Sanjitha: An electrical engineering enthusiast with a passion for powering the future! When she’s not sketching circuits or troubleshooting designs, you can find her inspiring young minds as an assistant teacher. A proud student at the University of Waterloo, Sanjitha is on a mission to make waves in the engineering world—one innovative solution at a time!"
    },
    {
      name: "Nicole Lau",
      role: "Computer Engineering Student",
      bio: "Meet Nicole: The tech-savvy dynamo diving into the world of cybersecurity as a Security Developer at Relay! With a flair for problem-solving and a passion for keeping the digital world safe, she’s the go-to gal for everything from managing detection responses to creating user stories that make complex projects a breeze."    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white p-8 relative overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="58" stroke="url(#grad1)" strokeWidth="4"/>
              <path d="M30 90C30 90 45 30 60 30C75 30 90 90 90 90" stroke="url(#grad2)" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="60" cy="60" r="10" fill="url(#grad3)"/>
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4F46E5"/>
                  <stop offset="1" stopColor="#7C3AED"/>
                </linearGradient>
                <linearGradient id="grad2" x1="30" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60A5FA"/>
                  <stop offset="1" stopColor="#7C3AED"/>
                </linearGradient>
                <radialGradient id="grad3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(90) scale(10)">
                  <stop stopColor="#F472B6"/>
                  <stop offset="1" stopColor="#7C3AED"/>
                </radialGradient>
              </defs>
            </svg>
          </div>
          <h1 className="text-7xl font-bold mb-4 relative">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 blur-2xl opacity-75"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-300 to-indigo-400" style={{
              fontFamily: "'Orbitron', sans-serif",
              textShadow: '0 0 20px rgba(50, 100, 255, 0.8), 0 0 40px rgba(50, 100, 255, 0.4)',
              WebkitTextStroke: '2px rgba(100, 200, 255, 0.5)'
            }}>
              SeisMesh
            </span>
          </h1>
          <p className="text-xl text-blue-200">
            Cosmic Seismic Data Analysis and Visualization
          </p>
        </header>

        {/* Problem explanation section */}
        <div className="mb-12 bg-indigo-900 bg-opacity-30 rounded-lg p-6 border border-blue-700">
          <h2 className="text-2xl font-semibold text-blue-300 mb-4 flex items-center">
            <AlertTriangle className="h-6 w-6 mr-2 text-yellow-400" />
            The Cosmic Challenge We're Tackling
          </h2>
          <p className="text-blue-200 mb-4">
            Planetary seismology missions face a significant hurdle: the immense power required to transmit continuous seismic data back to Earth. The crux of the problem? Only a fraction of this data contains scientifically valuable information.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-blue-300">Learn More About the Challenge</AccordionTrigger>
              <AccordionContent className="text-blue-200">
                <p className="mb-2">
                  The further a target body is from Earth, the more energy is required to transmit the same amount of data. Quakes are typically rare events, meaning that although large amounts of continuous data are recorded and sent back to Earth, only a small fraction of this data contains useful signals.
                </p>
                <p className="mb-2">
                  Our solution? Develop algorithms that can run on a lander to differentiate seismic data from noise, extracting only the useful signals to be sent back to Earth. This is a complex task, as seismic signals on other planets often differ from those on Earth, and the signal might be only faintly observable in the noise.
                </p>
                <p>
                  SeisMesh aims to analyze real data from the Apollo missions and the Mars InSight Lander to identify seismic events, potentially uncovering new events not present in current catalogs!
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive ? 'border-purple-500 bg-purple-900 bg-opacity-50' : 'border-blue-500 hover:border-purple-400'
          }`}
        >
          <input {...getInputProps()} />
          <Rocket className="mx-auto h-16 w-16 text-blue-300 mb-4 animate-pulse" />
          <p className="text-lg text-blue-200 mb-2">
            Launch your CSV files into our cosmic analyzer
          </p>
          <p className="text-sm text-blue-300">
            (Only .csv files will be accepted in our space station)
          </p>
        </div>

        {files.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Cosmic Data Uploads:</h2>
            <ul className="bg-indigo-900 bg-opacity-50 rounded-lg shadow overflow-hidden">
              {files.map((file, index) => (
                <li key={index} className="flex items-center px-4 py-3 border-b border-blue-800 last:border-b-0">
                  <Star className="h-5 w-5 text-yellow-400 mr-3" />
                  <span className="text-blue-200">{file.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12 bg-indigo-900 bg-opacity-30 rounded-lg p-6 flex items-start border border-blue-700">
          <Rocket className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-blue-300 mb-2">How SeisMesh Explores the Cosmos</h3>
            <p className="text-blue-200">
              SeisMesh propels your CSV files containing cosmic seismic data into our advanced neural networks. 
              Our quantum algorithms process the data to identify interstellar patterns, cosmic anomalies, and 
              potential areas of interest for further space exploration or asteroid mining operations.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-indigo-900 bg-opacity-30 rounded-lg p-6 border border-blue-700">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4 flex items-center">
            <Users className="h-6 w-6 mr-2" />
            Meet the Cosmic Minds Behind SeisMesh
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TooltipProvider>
              {teamMembers.map((member, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div className="flex items-center space-x-4 cursor-pointer">
                      <Avatar className="h-16 w-16 border-2 border-blue-400">
                        <AvatarImage src="/placeholder.svg?height=64&width=64" alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-lg font-medium text-blue-200">{member.name}</h4>
                        <p className="text-sm text-blue-300">{member.role}</p>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-indigo-800 border border-blue-500 p-4 max-w-xs">
                    <p className="text-blue-100">{member.bio}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
          <p className="mt-6 text-blue-200">
            Our team of aspiring cosmic explorers combines expertise in electrical and computer engineering 
            to push the boundaries of space exploration and seismic data analysis.
          </p>
        </div>
      </div>
    </div>
  )
}

