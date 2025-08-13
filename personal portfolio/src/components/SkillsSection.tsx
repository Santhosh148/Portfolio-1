import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    { name: 'Android', icon: '🤖', color: 'text-success' },
    { name: 'Python', icon: '🐍', color: 'text-primary' },
    { name: 'C++', icon: '⚡', color: 'text-accent' },
    { name: 'Java', icon: '☕', color: 'text-secondary' },
    { name: 'C', icon: '🔧', color: 'text-primary-glow' },
    { name: 'C#', icon: '💎', color: 'text-accent-glow' },
    { name: 'TypeScript', icon: '🔷', color: 'text-primary' },
    { name: 'Flutter', icon: '🦋', color: 'text-secondary' },
    { name: 'MongoDB', icon: '🍃', color: 'text-success' },
    { name: 'React', icon: '⚛️', color: 'text-accent' },
    { name: 'Node.js', icon: '🟢', color: 'text-success' },
    { name: 'Docker', icon: '🐳', color: 'text-primary' },
    { name: 'LeetCode', icon: '💻', color: 'text-orange-400', link: 'https://leetcode.com/u/santhosh_Dinakaran/' },
  ];

  // Create multiple orbital rings with responsive sizing
  const orbitRings = [
    { radius: 120, radiusLg: 200, duration: 20, technologies: technologies.slice(0, 5) },
    { radius: 160, radiusLg: 280, duration: 25, technologies: technologies.slice(5, 9) },
    { radius: 200, radiusLg: 360, duration: 30, technologies: technologies.slice(9, 13) },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Space Effect Background with Blinking Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`bg-star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Nebula clouds */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(ellipse at 30% 40%, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
              'radial-gradient(ellipse at 70% 60%, hsl(var(--secondary) / 0.3) 0%, transparent 70%)',
              'radial-gradient(ellipse at 30% 40%, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-secondary text-glow-secondary mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Tech Stack
          </motion.h2>

          {/* Orbital Tech Stack Container */}
          <div className="relative flex items-center justify-center min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]">
            
            {/* Background Orbit Rings */}
            {orbitRings.map((ring, index) => (
              <motion.div
                key={`ring-${index}`}
                className="absolute rounded-full border border-primary/20 glow-soft"
                style={{
                  width: (window.innerWidth >= 1024 ? ring.radiusLg : ring.radius) * 2,
                  height: (window.innerWidth >= 1024 ? ring.radiusLg : ring.radius) * 2,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { 
                  opacity: 1, 
                  scale: 1,
                  rotate: 360 
                } : {}}
                transition={{ 
                  opacity: { duration: 1, delay: index * 0.2 },
                  scale: { duration: 1, delay: index * 0.2 },
                  rotate: { duration: ring.duration, repeat: Infinity, ease: 'linear' }
                }}
              >
                {/* Wave distortion effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-accent/10"
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
            ))}

            {/* Central Core */}
            <motion.div
              className="absolute z-10 flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, type: 'spring' }}
            >
              <motion.div
                className="relative bg-gradient-hero p-4 sm:p-6 lg:p-8 rounded-full glass glow-primary border border-primary/30"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                    '0 0 40px rgba(59, 130, 246, 0.6)',
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                data-cursor-hover
              >
                <motion.div
                  className="text-center"
                  animate={{
                    y: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <motion.h3 
                    className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <span className="hidden sm:inline">My Tech Stack</span>
                    <span className="sm:hidden">Tech Stack</span>
                  </motion.h3>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Orbiting Technology Icons */}
            {orbitRings.map((ring, ringIndex) => 
              ring.technologies.map((tech, techIndex) => {
                const totalTechs = ring.technologies.length;
                const initialAngle = (techIndex / totalTechs) * 360;
                
                return (
                  <motion.div
                    key={`${tech.name}-${ringIndex}`}
                    className="absolute z-20"
                    style={{
                      transformOrigin: '50% 50%',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? {
                      opacity: 1,
                      scale: 1,
                      rotate: [initialAngle, initialAngle + 360],
                    } : {}}
                    transition={{
                      opacity: { duration: 0.5, delay: ringIndex * 0.3 + techIndex * 0.1 },
                      scale: { duration: 0.5, delay: ringIndex * 0.3 + techIndex * 0.1 },
                      rotate: { 
                        duration: ring.duration, 
                        repeat: Infinity, 
                        ease: 'linear',
                        delay: ringIndex * 0.5 + techIndex * 0.2
                      },
                    }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                     {/* Icon Container - Fixed to orbit position */}
                     <motion.div
                       className="absolute"
                       style={{
                         x: window.innerWidth >= 1024 ? ring.radiusLg : ring.radius,
                         y: 0,
                       }}
                       animate={{
                         rotate: inView ? [0, -360] : 0, // Counter-rotate to keep icon facing forward
                       }}
                       transition={{
                         rotate: { 
                           duration: ring.duration, 
                           repeat: Infinity, 
                           ease: 'linear',
                           delay: ringIndex * 0.5 + techIndex * 0.2
                         },
                       }}
                     >
                      {tech.link ? (
                        <motion.a
                          href={tech.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`relative bg-gradient-subtle p-2 sm:p-3 lg:p-4 rounded-full glass border border-primary/20 cursor-pointer ${tech.color} backdrop-blur-md block`}
                          animate={{
                            y: [-4, 4, -4],
                            scale: hoveredTech === tech.name ? 1.4 : 1,
                            boxShadow: hoveredTech === tech.name 
                              ? `0 0 40px ${tech.color === 'text-primary' ? 'hsl(var(--primary))' : 
                                  tech.color === 'text-secondary' ? 'hsl(var(--secondary))' : 
                                  tech.color === 'text-accent' ? 'hsl(var(--accent))' : 
                                  tech.color === 'text-success' ? 'hsl(var(--success))' : 
                                  tech.color === 'text-orange-400' ? '#fb923c' :
                                  'hsl(var(--primary))'}, 0 0 20px rgba(255, 255, 255, 0.3)` 
                              : '0 0 15px rgba(59, 130, 246, 0.2)',
                          }}
                          transition={{
                            y: {
                              duration: 3 + ringIndex * 0.7,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: techIndex * 0.3,
                            },
                            scale: { duration: 0.3, ease: 'easeOut' },
                            boxShadow: { duration: 0.3, ease: 'easeOut' },
                          }}
                          whileHover={{
                            scale: 1.5,
                            rotate: [0, 5, -5, 0],
                            transition: { duration: 0.6 }
                          }}
                          data-cursor-hover
                        >
                           <motion.div 
                             className="text-lg sm:text-xl lg:text-2xl xl:text-3xl"
                             animate={{
                               rotateY: hoveredTech === tech.name ? [0, 360] : 0,
                             }}
                             transition={{
                               rotateY: { duration: 0.8, ease: 'easeInOut' }
                             }}
                           >
                             {tech.icon}
                           </motion.div>
                        </motion.a>
                      ) : (
                        <motion.div
                          className={`relative bg-gradient-subtle p-2 sm:p-3 lg:p-4 rounded-full glass border border-primary/20 cursor-pointer ${tech.color} backdrop-blur-md`}
                          animate={{
                            y: [-4, 4, -4],
                            scale: hoveredTech === tech.name ? 1.4 : 1,
                            boxShadow: hoveredTech === tech.name 
                              ? `0 0 40px ${tech.color === 'text-primary' ? 'hsl(var(--primary))' : 
                                  tech.color === 'text-secondary' ? 'hsl(var(--secondary))' : 
                                  tech.color === 'text-accent' ? 'hsl(var(--accent))' : 
                                  tech.color === 'text-success' ? 'hsl(var(--success))' : 
                                  'hsl(var(--primary))'}, 0 0 20px rgba(255, 255, 255, 0.3)` 
                              : '0 0 15px rgba(59, 130, 246, 0.2)',
                          }}
                          transition={{
                            y: {
                              duration: 3 + ringIndex * 0.7,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: techIndex * 0.3,
                            },
                            scale: { duration: 0.3, ease: 'easeOut' },
                            boxShadow: { duration: 0.3, ease: 'easeOut' },
                          }}
                          whileHover={{
                            scale: 1.5,
                            rotate: [0, 5, -5, 0],
                            transition: { duration: 0.6 }
                          }}
                          data-cursor-hover
                        >
                           <motion.div 
                             className="text-lg sm:text-xl lg:text-2xl xl:text-3xl"
                             animate={{
                               rotateY: hoveredTech === tech.name ? [0, 360] : 0,
                             }}
                             transition={{
                               rotateY: { duration: 0.8, ease: 'easeInOut' }
                             }}
                           >
                             {tech.icon}
                           </motion.div>
                        </motion.div>
                      )}

                      {/* Enhanced Hover Tooltip */}
                      <motion.div
                        className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-primary/95 text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap pointer-events-none glow-primary backdrop-blur-sm border border-primary/30"
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{
                          opacity: hoveredTech === tech.name ? 1 : 0,
                          y: hoveredTech === tech.name ? 0 : 10,
                          scale: hoveredTech === tech.name ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        {tech.name}
                        <motion.div 
                          className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/95"
                          animate={{
                            scale: hoveredTech === tech.name ? [0.8, 1.2, 1] : 1,
                          }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                        />
                      </motion.div>

                      {/* Pulse Ring on Hover */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/50"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{
                          opacity: hoveredTech === tech.name ? [0, 1, 0] : 0,
                          scale: hoveredTech === tech.name ? [1, 1.8, 2.2] : 1,
                        }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })
            )}
          </div>

          {/* Bottom Section */}
          <motion.div
            className="text-center mt-8 sm:mt-10 lg:mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 px-4">
              Exploring the infinite possibilities of technology
            </p>
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary rounded-lg text-primary-foreground font-medium glow-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              <span>Always Evolving</span>
              <motion.span
                animate={{ rotateY: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                🌌
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;