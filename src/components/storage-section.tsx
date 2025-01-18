"use client";

import { Fira_Code, Montserrat, Raleway } from "next/font/google";
import { useEffect, useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface Story {
  id: number;
  name: string;
  avatar: string;
  content: string;
}

const STORIES: Story[] = [
  {
    id: 1,
    name: "Deepak Sharma",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Lorem ipsum dolor sit amet consectetur. Lacus enim in ac lectus integer phaselius viverra ullamcorper. Eget adipiscing rhoncus quam tincidunt viverra.",
  },
  {
    id: 2,
    name: "Rishi Jain",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Lorem ipsum dolor sit amet consectetur. Lacus enim in ac lectus integer phaselius viverra ullamcorper. Eget adipiscing rhoncus quam tincidunt viverra.",
  },
  {
    id: 3,
    name: "Priya Gupta",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Lorem ipsum dolor sit amet consectetur. Lacus enim in ac lectus integer phaselius viverra ullamcorper. Eget adipiscing rhoncus quam tincidunt viverra.",
  },
  {
    id: 4,
    name: "Sonali Shah",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Lorem ipsum dolor sit amet consectetur. Lacus enim in ac lectus integer phaselius viverra ullamcorper. Eget adipiscing rhoncus quam tincidunt viverra.",
  },
];

export default function StoriesSection() {
  const [isHovered, setIsHovered] = useState(false);
  const doubledStories = [...STORIES, ...STORIES];

  return (
    <div className="min-h-screen text-white py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-left gap-2 mb-8 sm:mb-12">
          <span
            className={`${firaCode.className} px-4 py-1 font-normal text-sm rounded-full bg-[#8080804D] text-[#FFFFFFB2] w-fit`}
          >
            Stories
          </span>
          <h2
            className={`${montserrat.className} text-3xl sm:text-4xl text-[#FFFFFFB2] font-medium`}
          >
            <span className="text-white">Share your</span> Stories
          </h2>
        </div>

        <div
          className="space-y-6 sm:space-y-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Responsive story cards */}
          <div className="relative">
            <div
              className={`flex gap-4 sm:gap-6 animate-scroll-right ${
                isHovered ? "pause-animation" : ""
              }`}
            >
              {doubledStories.map((story, idx) => (
                <StoryCard
                  key={`${story.id}-${idx}-top`}
                  {...story}
                  // className="w-[280px] sm:w-[300px]"
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className={`flex gap-4 sm:gap-6 animate-scroll-left ${
                isHovered ? "pause-animation" : ""
              }`}
            >
              {doubledStories.map((story, idx) => (
                <StoryCard
                  key={`${story.id}-${idx}-bottom`}
                  {...story}
                  // className="w-[280px] sm:w-[300px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryCard({ name, avatar, content }: Story) {
  return (
    <div className="flex-shrink-0 w-[300px] bg-[#242E38] rounded-2xl p-6 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={avatar || "/placeholder.svg"}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className={`${raleway.className} font-medium text-white`}>{name}</span>
      </div>
      <p className={`${raleway.className} text-sm text-[#FFFFFFB2] leading-relaxed font-normal`}>{content}</p>
    </div>
  );
}
