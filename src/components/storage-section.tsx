'use client'

import { useEffect, useState } from 'react'

interface Story {
  id: number
  name: string
  avatar: string
  content: string
}

const STORIES: Story[] = [
  {
    id: 1,
    name: "Deepak Sharma",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Lorem ipsum dolor sit amet consectetur. Lacus enim in ac lectus integer phaselius viverra ullamcorper. Eget adipiscing rhoncus quam tincidunt viverra."
  },
  {
    id: 2,
    name: "Rishi Jain",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Lorem ipsum dolor sit amet consectetur. Lacus enim in ac lectus integer phaselius viverra ullamcorper. Eget adipiscing rhoncus quam tincidunt viverra."
  },
  {
    id: 3,
    name: "Priya Gupta",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Lorem ipsum dolor sit amet consectetur. Lacus enim in ac lectus integer phaselius viverra ullamcorper. Eget adipiscing rhoncus quam tincidunt viverra."
  },
  {
    id: 4,
    name: "Sonali Shah",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Lorem ipsum dolor sit amet consectetur. Lacus enim in ac lectus integer phaselius viverra ullamcorper. Eget adipiscing rhoncus quam tincidunt viverra."
  }
]

export default function StoriesSection() {
  const [isHovered, setIsHovered] = useState(false)
  
  // Double the stories array for seamless infinite scroll
  const doubledStories = [...STORIES, ...STORIES]

  return (
    <div className="min-h-screen bg-[#001a1a] text-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <span className="px-4 py-1 text-sm rounded-full bg-white/10">Stories</span>
          <h2 className="text-4xl font-medium">Share your Stories</h2>
        </div>

        <div 
          className="space-y-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Top row - moving right */}
          <div className="relative">
            <div className={`flex gap-6 animate-scroll-right ${isHovered ? 'pause-animation' : ''}`}>
              {doubledStories.map((story, idx) => (
                <StoryCard key={`${story.id}-${idx}-top`} {...story} />
              ))}
            </div>
          </div>

          {/* Bottom row - moving left */}
          <div className="relative">
            <div className={`flex gap-6 animate-scroll-left ${isHovered ? 'pause-animation' : ''}`}>
              {doubledStories.map((story, idx) => (
                <StoryCard key={`${story.id}-${idx}-bottom`} {...story} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StoryCard({ name, avatar, content }: Story) {
  return (
    <div className="flex-shrink-0 w-[300px] bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={avatar || "/placeholder.svg"}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-medium">{name}</span>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed">{content}</p>
    </div>
  )
}
