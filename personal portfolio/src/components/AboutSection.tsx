import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          animate={inView ? { opacity: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-primary text-glow-primary mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-left">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I am an innovative and passionate engineer driven by curiosity and creativity, with a strong interest in combining technology, design, and problem-solving to create impactful solutions. My work spans across web development, augmented reality, 3D modeling, and machine learning, focusing on delivering user-centric, high-quality results. I enjoy exploring new technologies, applying them in real-world projects, and continuously learning to push the boundaries of what's possible.
              </p>
            </div>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-hero p-8 rounded-lg glass glow-soft">
                <h4 className="text-xl font-semibold text-primary mb-4">Quick Facts</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <motion.li
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 glow-primary"></span>
                    3+ years of development experience
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3 glow-secondary"></span>
                    500+ LeetCode problems solved
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 }}
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 glow-accent"></span>
                    15+ projects completed
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.2 }}
                  >
                    <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
                    Always learning new technologies
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;