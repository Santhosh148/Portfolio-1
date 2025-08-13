import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Star, Target, Code, Zap, GitBranch, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const AchievementsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Floating particles animation
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({length: 12}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  const achievements = [
    {
      icon: Trophy,
      title: 'LeetCode Knight',
      description: '500+ problems solved',
      color: 'text-accent',
      glowColor: 'glow-accent',
    },
    {
      icon: Award,
      title: 'Top Performer',
      description: 'Contest top 10%',
      color: 'text-primary',
      glowColor: 'glow-primary',
    },
    {
      icon: Star,
      title: '50-Day Streak',
      description: 'Consistent coding',
      color: 'text-secondary',
      glowColor: 'glow-secondary',
    },
    {
      icon: Target,
      title: 'Goal Achiever',
      description: '2024 targets met',
      color: 'text-success',
      glowColor: 'glow-accent',
    },
    {
      icon: Code,
      title: 'Full Stack Pro',
      description: '15+ projects built',
      color: 'text-accent',
      glowColor: 'glow-accent',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'New tech mastery',
      color: 'text-primary',
      glowColor: 'glow-primary',
    },
    {
      icon: GitBranch,
      title: 'Open Source',
      description: 'Active contributor',
      color: 'text-secondary',
      glowColor: 'glow-secondary',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative spirit',
      color: 'text-success',
      glowColor: 'glow-accent',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0.3,
      rotateY: -30,
      rotateX: 20,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 120,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    x: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <section id="achievements" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 6 + particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(var(--primary)/0.05) 0%, transparent 50%, hsl(var(--accent)/0.05) 100%)",
            "linear-gradient(225deg, hsl(var(--accent)/0.08) 0%, transparent 50%, hsl(var(--primary)/0.08) 100%)",
            "linear-gradient(135deg, hsl(var(--primary)/0.05) 0%, transparent 50%, hsl(var(--accent)/0.05) 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-accent text-glow-accent mb-8 sm:mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={inView ? { 
              opacity: 1, 
              y: 0, 
              scale: 1,
            } : {}}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px hsl(var(--accent))",
              transition: { duration: 0.3 },
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] bg-clip-text text-transparent"
            >
              Strength
            </motion.span>
          </motion.h2>

          {/* Achievements Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  className="relative group cursor-pointer"
                  whileHover={{ 
                    scale: 1.08, 
                    rotateY: 5,
                    z: 50,
                    transition: { duration: 0.3, type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated Corner dots */}
                  <motion.div 
                    className={`absolute top-2 left-2 w-2 h-2 rounded-full bg-gradient-to-r from-${achievement.color.replace('text-', '')} to-${achievement.color.replace('text-', '')}/50`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <motion.div 
                    className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-${achievement.color.replace('text-', '')} to-${achievement.color.replace('text-', '')}/50`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: (index * 0.2) + 0.5,
                    }}
                  />
                  <motion.div 
                    className={`absolute bottom-2 left-2 w-2 h-2 rounded-full bg-gradient-to-r from-${achievement.color.replace('text-', '')} to-${achievement.color.replace('text-', '')}/50`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: (index * 0.2) + 1,
                    }}
                  />
                  <motion.div 
                    className={`absolute bottom-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-${achievement.color.replace('text-', '')} to-${achievement.color.replace('text-', '')}/50`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: (index * 0.2) + 1.5,
                    }}
                  />
                  
                   {/* Card */}
                   <motion.div 
                     className={`
                       relative h-32 sm:h-36 lg:h-40 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl 
                       bg-gradient-to-br from-card/80 to-card/40 
                       border border-border/20
                       backdrop-blur-sm
                       shadow-lg shadow-${achievement.color.replace('text-', '')}/10
                       transition-all duration-500 ease-out
                       group-hover:shadow-2xl 
                       group-hover:shadow-${achievement.color.replace('text-', '')}/30
                       group-hover:border-${achievement.color.replace('text-', '')}/50
                       overflow-hidden
                       perspective-1000
                     `}
                     animate={floatingAnimation}
                     style={{
                       animationDelay: `${index * 0.5}s`,
                     }}
                   >
                    {/* Animated Glow effects */}
                    <motion.div 
                      className={`
                        absolute inset-0 rounded-xl 
                        bg-gradient-to-br from-${achievement.color.replace('text-', '')}/5 to-transparent 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-500
                      `}
                      animate={{
                        background: [
                          `linear-gradient(135deg, hsl(var(--${achievement.color.replace('text-', '')}))/0.05 0%, transparent 100%)`,
                          `linear-gradient(225deg, hsl(var(--${achievement.color.replace('text-', '')}))/0.15 0%, transparent 100%)`,
                          `linear-gradient(135deg, hsl(var(--${achievement.color.replace('text-', '')}))/0.05 0%, transparent 100%)`,
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    {/* Pulse Ring Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 border-transparent"
                      animate={{
                        borderColor: [
                          `hsl(var(--${achievement.color.replace('text-', '')}))/0`,
                          `hsl(var(--${achievement.color.replace('text-', '')}))/0.3`,
                          `hsl(var(--${achievement.color.replace('text-', '')}))/0`,
                        ],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    
                     {/* Content */}
                     <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                       <motion.div
                         whileHover={{
                           rotate: [0, -10, 10, -5, 5, 0],
                           scale: 1.2,
                         }}
                         transition={{
                           duration: 0.6,
                           ease: "easeInOut",
                         }}
                       >
                         <IconComponent 
                           className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mb-2 sm:mb-3 ${achievement.color} transition-all duration-500 drop-shadow-lg`}
                           strokeWidth={1.5}
                         />
                       </motion.div>
                       
                       <motion.h3 
                         className="font-bold text-xs sm:text-sm mb-1 text-foreground leading-tight"
                         whileHover={{
                           scale: 1.1,
                           color: `hsl(var(--${achievement.color.replace('text-', '')}))`,
                         }}
                         transition={{ duration: 0.3 }}
                       >
                         {achievement.title}
                       </motion.h3>
                       
                       <motion.p 
                         className="text-xs text-muted-foreground leading-relaxed hidden sm:block"
                         initial={{ opacity: 0.7 }}
                         whileHover={{ opacity: 1, scale: 1.05 }}
                         transition={{ duration: 0.3 }}
                       >
                         {achievement.description}
                       </motion.p>
                     </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="text-center mt-8 sm:mt-10 lg:mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4">
              Always striving for excellence and continuous growth in technology
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;