import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";


const features = [
  {
    title: "Intelligent Scheduling",
    description: (
      <strong>
        Contextual calendar management: The AI automatically finds the best time for meetings, handles time zone conflicts, and sends professional invites for you.
      </strong>
    ),
    imageUrl: "https://cdn.prod.website-files.com/61120cb2509e012d40f0b214/674759730e5501475ff6b172_67475718556b3c0a4dceef89_What%2520is%2520Smart%2520Scheduling_.png", 
    imagePosition: "left",
  },
  
  {
    title: "Communication Triage",
    description:
        "Effortless Inbox & Messaging: AI summarizes long email threads, prioritizes urgent contacts, drafts quick, on-brand replies, and handles follow-ups.",
    imageUrl: "https://cdn.prod.website-files.com/66d1d32f08a233fad81d614e/678a274ce437e44846785862_magical-summarizing-tool.webp",
    imagePosition: "right",
  },
  {
    title: "Proactive Task Automation",
    description:
        "The ultimate digital organizer. Automatically create to-do lists from emails, set location-based reminders, and orchestrate complex tasks across your connected apps.",
    imageUrl: "https://us1.discourse-cdn.com/openai1/original/2X/5/5be9c3dc0a0461b21183070ee185de4eb1d7a540.jpeg",
    imagePosition: "left",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Personal Assistant 
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {features.map((feature, key) => {
            
            // --- IMAGE RENDERING LOGIC ---
            const featureImage = feature.imageUrl ? (
              <img 
                src={feature.imageUrl} 
                alt={feature.title} 
                className="w-full h-auto object-cover rounded-xl sm:rounded-2xl border border-gray-700/50" 
              />
            ) : (
              // Fallback if no image URL is provided
              <div className="w-full h-64 bg-gray-800 rounded-xl flex items-center justify-center text-gray-500">
                No image available
              </div>
            );

            return (
              <div
                key={key}
                className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
                  feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Section */}
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                    rounded-xl sm:rounded-2xl transition-all duration-500"
                    />
                    <div
                      className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 
                    rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-1 
                    group-hover:border-blue-600/50 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                        </div>
                        <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                          {feature.title} Visual
                        </span> 
                      </div>
                      
                      {/* THE DYNAMIC IMAGE CONTENT IS RENDERED HERE */}
                      {featureImage}
                      
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="flex-1 w-full">
                  <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                    <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}