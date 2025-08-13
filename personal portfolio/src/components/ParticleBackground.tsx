import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    initialX: Math.random() * window.innerWidth,
    initialY: Math.random() * window.innerHeight,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.initialX,
            top: particle.initialY,
          }}
          animate={{
            x: [0, 100, -50, 150, 0],
            y: [0, -100, 50, -150, 0],
            opacity: [0, 1, 0.5, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;