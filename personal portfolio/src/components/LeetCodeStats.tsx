import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LeetCodeData {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
}

const LeetCodeStats = () => {
  const [stats, setStats] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        // Note: This is a mock implementation since LeetCode API requires special handling
        // In a real implementation, you'd need a backend proxy to fetch from LeetCode GraphQL API
        // or use a service like RapidAPI's LeetCode API
        
        // Mock data for demonstration - replace with actual API call
        setTimeout(() => {
          setStats({
            totalSolved: 150,
            totalQuestions: 2500,
            easySolved: 75,
            mediumSolved: 60,
            hardSolved: 15,
            acceptanceRate: 65.5,
            ranking: 45000
          });
          setLoading(false);
        }, 1000);

        // Actual implementation would look like:
        // const response = await fetch('/api/leetcode/stats/santhosh_Dinakaran');
        // const data = await response.json();
        // setStats(data);
        
      } catch (err) {
        setError('Failed to fetch LeetCode stats');
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  if (loading) {
    return (
      <motion.div
        className="flex items-center gap-2 text-muted-foreground"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-4 h-4 bg-orange-500 rounded-sm animate-pulse" />
        <span>Loading LeetCode stats...</span>
      </motion.div>
    );
  }

  if (error || !stats) {
    return (
      <motion.div
        className="flex items-center gap-2 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-4 h-4 bg-orange-500 rounded-sm" />
        <span>LeetCode Profile</span>
      </motion.div>
    );
  }

  return (
    <motion.a
      href="https://leetcode.com/u/santhosh_Dinakaran/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-4 bg-gradient-subtle rounded-lg border border-border/20 hover:border-orange-500/50 transition-all glow-subtle group"
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-6 h-6 bg-orange-500 rounded-sm flex items-center justify-center">
        <span className="text-white text-xs font-bold">LC</span>
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-foreground">LeetCode</span>
          <motion.span
            className="text-xs px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [1, 0.8, 1] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Live
          </motion.span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <motion.span
            className="font-medium text-primary"
            animate={{ 
              color: ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--primary))'] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {stats.totalSolved} problems solved
          </motion.span>
          
          <div className="flex gap-2">
            <span className="text-green-400 text-xs">Easy: {stats.easySolved}</span>
            <span className="text-yellow-400 text-xs">Medium: {stats.mediumSolved}</span>
            <span className="text-red-400 text-xs">Hard: {stats.hardSolved}</span>
          </div>
        </div>
      </div>
      
      <motion.div
        className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"
        whileHover={{ x: 2 }}
      >
        →
      </motion.div>
    </motion.a>
  );
};

export default LeetCodeStats;