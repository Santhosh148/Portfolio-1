import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageCircle, Send, MapPin } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              'radial-gradient(ellipse at 20% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%)',
              'radial-gradient(ellipse at 80% 50%, hsl(var(--secondary) / 0.3) 0%, transparent 50%)',
              'radial-gradient(ellipse at 20% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-glow-primary mb-4 sm:mb-6">
              Get In Touch
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Ready to collaborate on something amazing? Let's connect and bring your ideas to life!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 p-4 bg-gradient-subtle rounded-lg border border-border/20"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="p-3 bg-primary/20 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">santhoshdinakaran3@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-gradient-subtle rounded-lg border border-border/20"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="p-3 bg-secondary/20 rounded-full">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Let's Chat</h3>
                    <p className="text-muted-foreground">Always open to discuss new opportunities</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-gradient-subtle rounded-lg border border-border/20"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="p-3 bg-accent/20 rounded-full">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">Available for remote work</p>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="relative"
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-32 h-32 bg-gradient-primary/20 rounded-full blur-xl"></div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.01 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-background/50 border border-border/20 rounded-lg focus:border-primary transition-all backdrop-blur-sm text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.01 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-background/50 border border-border/20 rounded-lg focus:border-primary transition-all backdrop-blur-sm text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.01 }}
                >
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-4 bg-background/50 border border-border/20 rounded-lg focus:border-primary transition-all backdrop-blur-sm text-foreground placeholder:text-muted-foreground resize-none"
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full p-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 glow-primary"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    boxShadow: [
                      '0 0 20px hsl(var(--primary) / 0.3)',
                      '0 0 40px hsl(var(--primary) / 0.5)',
                      '0 0 20px hsl(var(--primary) / 0.3)',
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
                  }}
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;