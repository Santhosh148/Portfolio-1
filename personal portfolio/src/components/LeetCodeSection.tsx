import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Code2, TrendingUp, Target, Zap } from 'lucide-react';
import LeetCodeStats from './LeetCodeStats';

interface ProgressBarProps {
  label: string;
  value: number;
  max: number;
  color: string;
  delay: number;
}

const ProgressBar = ({ label, value, max, color, delay }: ProgressBarProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedValue(prev => {
            if (prev >= value) {
              clearInterval(interval);
              return value;
            }
            return prev + Math.ceil(value / 50);
          });
        }, 30);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [inView, value, delay]);

  const percentage = (animatedValue / max) * 100;

  return (
    <motion.div
      ref={ref}
      className="mb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: delay / 1000 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground font-medium">{label}</span>
        <span className="text-primary font-bold">{animatedValue}/{max}</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full relative`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.5, delay: delay / 1000, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 2 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const LeetCodeSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Creative floating elements
  const [codeElements, setCodeElements] = useState<Array<{id: number, x: number, y: number, char: string, delay: number}>>([]);

  useEffect(() => {
    const codeChars = ['{}', '[]', '()', ';;', '//', '&&', '||', '==', '++', '--', '=>', '?:'];
    const newElements = Array.from({length: 15}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      char: codeChars[Math.floor(Math.random() * codeChars.length)],
      delay: Math.random() * 4,
    }));
    setCodeElements(newElements);
  }, []);

  const stats = [
    { label: 'Easy Problems', value: 180, max: 200, color: 'bg-success', delay: 300 },
    { label: 'Medium Problems', value: 250, max: 400, color: 'bg-accent', delay: 600 },
    { label: 'Hard Problems', value: 70, max: 150, color: 'bg-destructive', delay: 900 },
    { label: 'Total Solved', value: 500, max: 750, color: 'bg-primary', delay: 1200 },
  ];

  return (
    <section id="leetcode" className="py-20 relative overflow-hidden">
      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {codeElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute text-primary/20 font-mono text-sm font-bold"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-10, 10, -10],
              opacity: [0.1, 0.6, 0.1],
              rotate: [-15, 15, -15],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + element.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay,
            }}
          >
            {element.char}
          </motion.div>
        ))}
      </div>

      {/* Matrix-like Binary Rain */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {Array.from({length: 8}).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent"
            style={{
              left: `${12.5 * (i + 1)}%`,
              height: '100%',
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glowing Circuit Pattern */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(var(--primary)/0.03) 0%, transparent 50%, hsl(var(--accent)/0.03) 100%)",
            "linear-gradient(45deg, hsl(var(--accent)/0.05) 0%, transparent 50%, hsl(var(--primary)/0.05) 100%)",
            "linear-gradient(135deg, hsl(var(--primary)/0.03) 0%, transparent 50%, hsl(var(--accent)/0.03) 100%)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-center text-secondary text-glow-secondary mb-12"
            initial={{ opacity: 0, y: 30, rotateX: -20 }}
            animate={inView ? { 
              opacity: 1, 
              y: 0, 
              rotateX: 0,
            } : {}}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              textShadow: "0 0 30px hsl(var(--secondary))",
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-r from-secondary via-primary to-secondary bg-[length:200%_100%] bg-clip-text text-transparent"
            >
              <Code2 className="inline-block w-12 h-12 mr-4 mb-2" />
              LeetCode Statistics
            </motion.span>
          </motion.h2>

          {/* LeetCode Stats Widget - Extended Width */}
          <motion.div
            className="w-full max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 80 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="bg-gradient-hero p-8 rounded-lg glass glow-soft relative overflow-hidden"
              animate={{
                boxShadow: [
                  "0 10px 30px -10px hsl(var(--primary)/0.3)",
                  "0 20px 60px -15px hsl(var(--primary)/0.5)",
                  "0 10px 30px -10px hsl(var(--primary)/0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Animated Corner Decorations */}
              <motion.div
                className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-xl"
                animate={{
                  scale: [1.2, 0.8, 1.2],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              <motion.h3 
                className="text-2xl font-bold text-center text-primary mb-8"
                animate={{
                  textShadow: [
                    "0 0 10px hsl(var(--primary)/0.5)",
                    "0 0 20px hsl(var(--primary)/0.8)",
                    "0 0 10px hsl(var(--primary)/0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <TrendingUp className="inline-block w-6 h-6 mr-2 mb-1" />
                Live LeetCode Statistics
              </motion.h3>
              
              {/* LeetCode Widget Container with enhanced styling */}
              <motion.div 
                className="flex justify-center relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-primary/30"
                  animate={{
                    borderColor: [
                      "hsl(var(--primary)/0.3)",
                      "hsl(var(--accent)/0.5)",
                      "hsl(var(--primary)/0.3)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <motion.iframe
                  src="https://leetcard.jacoblin.cool/santhosh_Dinakaran?theme=dark&font=Baloo%202&ext=heatmap"
                  style={{
                    width: '100%',
                    maxWidth: '800px',
                    height: '400px',
                    border: 'none',
                    borderRadius: '12px',
                    background: 'transparent'
                  }}
                  title="LeetCode Stats"
                  whileHover={{
                    scale: 1.02,
                    filter: "brightness(1.1) saturate(1.2)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 2,
                  }}
                />
              </motion.div>
              
              <motion.div
                className="text-center mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.p 
                  className="text-muted-foreground flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                  transition={{ duration: 0.3 }}
                >
                  <Zap className="w-4 h-4" />
                  Real-time statistics from my LeetCode profile
                  <Target className="w-4 h-4" />
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-lg text-muted-foreground">
              Always striving for excellence and continuous growth in technology
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeSection;