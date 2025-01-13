export function AppShowcase() {
    return (
      <section className="py-24 bg-gradient-to-b from-gray-950 to-teal-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">
            Be Prepared To Have Fun
          </h2>
          
          <div className="relative max-w-5xl mx-auto h-[600px]">
            {/* Left Phone */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] h-[560px] transform -rotate-12">
              <div className="w-full h-full rounded-[3rem] border-8 border-gray-800 overflow-hidden">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-13%20232550-YodkYCZ6lnKS6ygT7cE475tp0EaD1Y.png" 
                  alt="Mobile app event details screen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Center Phone */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[280px] h-[560px] z-10">
              <div className="w-full h-full rounded-[3rem] border-8 border-gray-800 overflow-hidden shadow-2xl shadow-teal-500/20">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-13%20232550-YodkYCZ6lnKS6ygT7cE475tp0EaD1Y.png" 
                  alt="Mobile app events list screen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right Phone */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] h-[560px] transform rotate-12">
              <div className="w-full h-full rounded-[3rem] border-8 border-gray-800 overflow-hidden">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-13%20232550-YodkYCZ6lnKS6ygT7cE475tp0EaD1Y.png" 
                  alt="Mobile app ticket confirmation screen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  