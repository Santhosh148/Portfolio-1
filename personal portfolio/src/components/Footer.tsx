import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Santhosh148', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative py-12 bg-gradient-hero border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="text-center md:text-left mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-2">SANTHOSH</h3>
            <p className="text-muted-foreground">
              Building the future, one line of code at a time
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full bg-background/10 border border-border/20 hover:border-primary transition-all glow-primary"
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: '0 0 20px hsl(var(--primary) / 0.6)' 
                }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5 text-primary" />
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary text-primary-foreground glow-primary hover:bg-primary/80 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            data-cursor-hover
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-border/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with{' '}
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                color: ['hsl(var(--destructive))', 'hsl(var(--primary))', 'hsl(var(--destructive))']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 fill-current" />
            </motion.span>{' '}
            by Santhosh © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-secondary rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
    </footer>
  );
};

export default Footer;