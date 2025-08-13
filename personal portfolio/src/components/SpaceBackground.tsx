import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
}

const SpaceBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate random stars with enhanced twinkling
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 0.5, // Varying star sizes
          opacity: Math.random() * 0.9 + 0.1,
          twinkleDelay: Math.random() * 5, // Random twinkling timing
        });
      }
      setStars(newStars);
    };

    // Generate shooting stars
    const generateShootingStars = () => {
      const newShootingStars: ShootingStar[] = [];
      for (let i = 0; i < 3; i++) {
        newShootingStars.push({
          id: i,
          startX: Math.random() * 50,
          startY: Math.random() * 30,
          endX: Math.random() * 50 + 50,
          endY: Math.random() * 70 + 30,
          delay: Math.random() * 10,
        });
      }
      setShootingStars(newShootingStars);
    };

    generateStars();
    generateShootingStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Nebula Clouds */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 30%, hsl(var(--primary) / 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, hsl(var(--secondary) / 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse at 25% 35%, hsl(var(--primary) / 0.2) 0%, transparent 50%), radial-gradient(ellipse at 75% 65%, hsl(var(--secondary) / 0.15) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 30%, hsl(var(--primary) / 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, hsl(var(--secondary) / 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Moving Nebula Layers */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div
          className="w-full h-full opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 60% 40%, hsl(var(--accent) / 0.1) 0%, transparent 60%)',
          }}
        />
      </motion.div>

      {/* Enhanced Twinkling Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: star.size > 2 ? 
              'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.4) 100%)' :
              'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
            boxShadow: star.size > 2.5 ? '0 0 8px rgba(255,255,255,0.6)' : '0 0 4px rgba(255,255,255,0.3)',
          }}
          animate={{
            opacity: [
              star.opacity,
              star.opacity * 0.2,
              star.opacity * 0.8,
              star.opacity * 0.3,
              star.opacity
            ],
            scale: [1, 0.8, 1.3, 0.9, 1],
            filter: [
              'brightness(1)',
              'brightness(0.4)',
              'brightness(1.8)',
              'brightness(0.7)',
              'brightness(1)'
            ],
          }}
          transition={{
            duration: 2 + Math.random() * 4, // Varying twinkling speeds
            repeat: Infinity,
            delay: star.twinkleDelay,
            ease: 'easeInOut',
            repeatType: 'reverse',
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((shootingStar) => (
        <motion.div
          key={shootingStar.id}
          className="absolute"
          style={{
            left: `${shootingStar.startX}%`,
            top: `${shootingStar.startY}%`,
          }}
          animate={{
            x: [`0%`, `${shootingStar.endX - shootingStar.startX}vw`],
            y: [`0%`, `${shootingStar.endY - shootingStar.startY}vh`],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: shootingStar.delay,
            ease: 'easeOut',
            repeatDelay: 8,
          }}
        >
          <motion.div
            className="w-0.5 h-0.5 bg-white rounded-full"
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: shootingStar.delay,
              ease: 'easeOut',
              repeatDelay: 8,
            }}
          />
          {/* Shooting star trail */}
          <motion.div
            className="absolute top-0 left-0 w-8 h-0.5 bg-gradient-to-r from-white to-transparent origin-left"
            style={{
              transform: 'rotate(45deg)',
            }}
            animate={{
              opacity: [0, 0.8, 0.8, 0],
              scaleX: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: shootingStar.delay,
              ease: 'easeOut',
              repeatDelay: 8,
            }}
          />
        </motion.div>
      ))}

      {/* Enhanced Parallax Star Layers with Drift Motion */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [-15, 15, -15],
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`parallax-star-${i}`}
            className="absolute rounded-full bg-white/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Distant Parallax Layer with Gentle Motion */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [-8, 8, -8],
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`distant-star-${i}`}
            className="absolute rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 1 + 0.3}px`,
              height: `${Math.random() * 1 + 0.3}px`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Deep Space Drift Effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [-3, 3, -3],
          y: [-1.5, 1.5, -1.5],
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...Array(60)].map((_, i) => (
          <div
            key={`deep-star-${i}`}
            className="absolute w-0.5 h-0.5 bg-white/15 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SpaceBackground;