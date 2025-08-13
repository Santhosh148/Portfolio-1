import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const HeroSection = () => {
  const LeetCodeIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
    </svg>
  );

  const socialLinks = [
    { icon: Mail, href: 'mailto:santhoshdinakaran3@gmail.com', label: 'Email' },
    { icon: Github, href: 'https://github.com/Santhosh148', label: 'GitHub' },
    { icon: LeetCodeIcon, href: 'https://leetcode.com/u/santhosh_Dinakaran/', label: 'LeetCode' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/santhosh-dinakaran-57631a295', label: 'LinkedIn' },
  ];

  const waveVariants = {
    wave: {
      rotate: [0, 20, -20, 20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          className="flex justify-center lg:justify-end order-1 lg:order-2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <motion.div
              className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden glow-primary floating-slow"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={profileImage}
                alt="Santhosh"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Flickering icons around profile */}
            <motion.div
              className="absolute -top-4 -right-4 text-accent text-2xl animate-flicker"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              💡
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 text-secondary text-2xl animate-flicker"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              💻
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-foreground">Hi, I'm </span>
            <motion.span
              className="text-primary text-glow-primary inline-block"
              variants={waveVariants}
              animate="wave"
            >
              SANTHOSH
            </motion.span>
          </motion.div>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Passionate about creating innovative solutions and crafting exceptional digital experiences.
            Specialized in React, Node.js, and modern web technologies.
          </motion.p>

          <motion.div
            className="flex items-center justify-center lg:justify-start gap-2 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <MapPin className="text-accent w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-muted-foreground text-sm sm:text-base">Available for remote work</span>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="flex justify-center lg:justify-start space-x-4 sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                className="p-2 sm:p-3 rounded-full bg-card border border-border hover:border-primary transition-all glow-primary"
                whileHover={{ 
                  scale: 1.2, 
                  boxShadow: '0 0 20px hsl(var(--primary) / 0.6)' 
                }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;