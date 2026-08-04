"use client"

import { useState, useRef, useEffect } from "react"
import { motion, } from "framer-motion"
import * as si from 'simple-icons'

interface DockItem {
  id: string
  name: string
  icon: React.ReactNode
  color: string
}

function SimpleIcon({ icon, className }: { icon: any, className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d={icon.path} />
    </svg>
  );
}

const siDavinciresolve = {
  path: "M17.621 0 5.977.004c-1.37 0-2.756.345-3.762 1.11a4.925 4.925 0 0 0-1.61 2.003C.233 3.93 0 5.02 0 5.951l.012 12.2c.002 1.604.479 3.057 1.461 4.112.984 1.056 2.462 1.683 4.331 1.691L16.856 24c1.26.005 3.095-.036 4.303-.714 1.075-.605 2.025-1.556 2.497-2.984.278-.84.345-2.084.344-3.147l-.021-11.13c-.002-.888-.15-2.023-.547-2.934-.425-.976-1.181-1.815-2.322-2.425C20.353.26 19.123 0 17.622 0zm0 .93c1.378 0 2.538.295 3.04.565.977.523 1.544 1.166 1.889 1.96.315.721.47 1.793.473 2.572l.018 11.13c.002 1.013-.097 2.257-.298 2.86-.396 1.202-1.146 1.946-2.063 2.462-.814.457-2.612.593-3.82.588l-11.05-.044c-1.657-.007-2.832-.534-3.626-1.386-.792-.851-1.212-2.06-1.212-3.485L.999 5.95c0-.829.196-1.827.474-2.437.345-.757.75-1.207 1.365-1.674C3.585 1.27 4.868.97 6.08.97zm-5.66 3.423c-1.976.089-3.204 1.658-3.214 3.29.019 1.443 1.635 3.481 2.884 4.53.12.099.154.109.33.18.062.025.198-.047.327-.135.36-.245.993-.947 1.648-1.738a7.67 7.67 0 0 0 1.031-1.683c.409-.89.261-1.599.235-1.888a3.983 3.983 0 0 0-.99-1.692 3.36 3.36 0 0 0-2.251-.864zm4.172 7.922a10.185 10.185 0 0 0-3.244.61c-.15.058-.26.1-.374.17-.057.036-.11.135-.105.292.017.433.29 1.278.624 2.27.384 1.135 1.066 2.27 1.844 2.74a3.23 3.23 0 0 0 2.53.342c.832-.243 1.595-.868 1.962-1.546.986-1.818.19-3.548-1.121-4.417-.447-.296-1.133-.445-1.89-.46-.074 0-.15-.002-.226-.001zm-8.432.038a6.201 6.201 0 0 0-.752.047c-.596.078-.932.273-1.29.51a3.177 3.177 0 0 0-1.365 1.979c-.075.552-.086 1.053.033 1.507.433 1.389 1.326 2.222 2.847 2.452.636.028 1.37-.063 1.99-.45 1.269-.782 2.08-3.17 2.412-4.742.053-.176.035-.357-.013-.42-.005-.067-.044-.113-.19-.183-.398-.192-1.32-.417-2.375-.6a7.68 7.68 0 0 0-1.297-.1z"
};

const dockItems: DockItem[] = [
  { id: "html5", name: "HTML5", icon: <SimpleIcon icon={si.siHtml5} className="w-7 h-7" />, color: "bg-[#E34F26]" },
  { id: "css3", name: "CSS3", icon: <SimpleIcon icon={si.siCss3} className="w-7 h-7" />, color: "bg-[#1572B6]" },
  { id: "javascript", name: "JavaScript", icon: <SimpleIcon icon={si.siJavascript} className="w-7 h-7 text-black" />, color: "bg-[#F7DF1E]" },
  { id: "wordpress", name: "WordPress", icon: <SimpleIcon icon={si.siWordpress} className="w-7 h-7" />, color: "bg-[#21759B]" },
  { id: "woocommerce", name: "WooCommerce", icon: <SimpleIcon icon={si.siWoocommerce} className="w-7 h-7" />, color: "bg-[#96588A]" },
  { id: "elementor", name: "Elementor", icon: <SimpleIcon icon={si.siElementor} className="w-7 h-7" />, color: "bg-[#92003B]" },
  { id: "react", name: "React", icon: <SimpleIcon icon={si.siReact} className="w-7 h-7" />, color: "bg-[#61DAFB]" },
  { id: "nextjs", name: "Next.js", icon: <SimpleIcon icon={si.siNextdotjs} className="w-7 h-7 text-black" />, color: "bg-white" },
  { id: "flutter", name: "Flutter", icon: <SimpleIcon icon={si.siFlutter} className="w-7 h-7" />, color: "bg-[#02569B]" },
  { id: "laravel", name: "Laravel", icon: <SimpleIcon icon={si.siLaravel} className="w-7 h-7" />, color: "bg-[#FF2D20]" },
  { id: "nodejs", name: "Node.js", icon: <SimpleIcon icon={si.siNodedotjs} className="w-7 h-7" />, color: "bg-[#339933]" },
  { id: "python", name: "Python", icon: <SimpleIcon icon={si.siPython} className="w-7 h-7" />, color: "bg-[#3776AB]" },
  { id: "php", name: "PHP", icon: <SimpleIcon icon={si.siPhp} className="w-7 h-7" />, color: "bg-[#777BB4]" },
  { id: "mysql", name: "MySQL", icon: <SimpleIcon icon={si.siMysql} className="w-7 h-7" />, color: "bg-[#4479A1]" },
  { id: "mongodb", name: "MongoDB", icon: <SimpleIcon icon={si.siMongodb} className="w-7 h-7" />, color: "bg-[#47A248]" },
  { id: "firebase", name: "Firebase", icon: <SimpleIcon icon={si.siFirebase} className="w-7 h-7" />, color: "bg-[#FFCA28]" },
  { id: "aws", name: "AWS", icon: <SimpleIcon icon={si.siAmazonaws} className="w-7 h-7" />, color: "bg-[#232F3E]" },
  { id: "docker", name: "Docker", icon: <SimpleIcon icon={si.siDocker} className="w-7 h-7" />, color: "bg-[#2496ED]" },
  { id: "github", name: "GitHub", icon: <SimpleIcon icon={si.siGithub} className="w-7 h-7" />, color: "bg-[#181717]" },
  { id: "figma", name: "Figma", icon: <SimpleIcon icon={si.siFigma} className="w-7 h-7" />, color: "bg-[#F24E1E]" },
  { id: "adobexd", name: "Adobe XD", icon: <SimpleIcon icon={si.siAdobexd} className="w-7 h-7" />, color: "bg-[#FF61F6]" },
  { id: "adobephotoshop", name: "Adobe Photoshop", icon: <SimpleIcon icon={si.siAdobephotoshop} className="w-7 h-7" />, color: "bg-[#31A8FF]" },
  { id: "adobeillustrator", name: "Adobe Illustrator", icon: <SimpleIcon icon={si.siAdobeillustrator} className="w-7 h-7" />, color: "bg-[#FF9A00]" },
  { id: "adobepremierepro", name: "Adobe Premiere Pro", icon: <SimpleIcon icon={si.siAdobepremierepro} className="w-7 h-7" />, color: "bg-[#9999FF]" },
  { id: "adobeaftereffects", name: "Adobe After Effects", icon: <SimpleIcon icon={si.siAdobeaftereffects} className="w-7 h-7" />, color: "bg-[#9999FF]" },
  { id: "davinciresolve", name: "DaVinci Resolve", icon: <SimpleIcon icon={siDavinciresolve} className="w-7 h-7" />, color: "bg-[#DB252D]" },
  { id: "blender", name: "Blender", icon: <SimpleIcon icon={si.siBlender} className="w-7 h-7" />, color: "bg-[#F5792A]" }
]

function DockIcon({ item }: { item: DockItem }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      className="w-[54px] h-[54px] cursor-pointer flex items-center justify-center relative shrink-0"
      style={{ zIndex: isHovered ? 50 : 1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`w-[54px] h-[54px] rounded-2xl flex items-center justify-center text-white absolute overflow-hidden ${item.color}`}
        animate={{
          y: isClicked ? 2 : isHovered ? -12 : 0,
          scale: isHovered ? 1.2 : 1,
          boxShadow: isHovered 
            ? "0 20px 25px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px rgb(0 0 0 / 0.2)" 
            : "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          {item.icon}
        </div>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"
          animate={{
            opacity: isHovered ? 0.3 : 0.1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? -40 : 10,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap pointer-events-none shadow-xl font-medium z-50"
      >
        {item.name}
      </motion.div>

      {/* Active indicator dot */}
      <motion.div
        className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black/20 rounded-full"
        animate={{
          scale: isClicked ? 1.5 : 1,
          opacity: isClicked ? 1 : 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </motion.div>
  )
}

function DockTabs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let animationFrameId: number
    const scrollContainer = containerRef.current

    if (!scrollContainer) return

    const scrollStep = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += 0.8
      }
      
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2
      } else if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft += scrollContainer.scrollWidth / 2
      }
      
      animationFrameId = requestAnimationFrame(scrollStep)
    }

    animationFrameId = requestAnimationFrame(scrollStep)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isPaused])

  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div 
        ref={containerRef}
        onMouseEnter={() => {
          setIsPaused(true)
        }}
        onMouseLeave={() => {
          setIsPaused(false)
        }}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="w-full overflow-x-auto hide-scrollbar"
        style={{ scrollBehavior: 'auto', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)' }}
      >
        <div className="flex w-max pt-24 pb-12 px-4">
          <motion.div
            className="flex h-[95px] items-end rounded-3xl bg-black/5 backdrop-blur-md border border-black/10 shadow-sm pb-3"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          >
            {/* Set 1 */}
            <div className="flex flex-nowrap gap-2 pl-4 pr-1">
              {dockItems.map((item, idx) => (
                <DockIcon key={`set1-${item.id}-${idx}`} item={item}  />
              ))}
            </div>
            
            {/* Set 2 */}
            <div className="flex flex-nowrap gap-2 pr-4 pl-1" aria-hidden="true">
              {dockItems.map((item, idx) => (
                <DockIcon key={`set2-${item.id}-${idx}`} item={item}  />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export function TechnologyStack() {
  return (
    <section className="py-24 bg-[#FFFFFF] border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-4">
            OUR TECHNOLOGY STACK
          </p>
          <h2 className="homepage-section-title">
            Technology <br />
            <span>Stack</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We build modern digital products using the world's most trusted development frameworks, cloud platforms, design tools, and creative software.
          </p>
        </div>

        <DockTabs />
      </div>
    </section>
  )
}
