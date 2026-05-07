import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-20"
    >
      <Helmet>
        <title>About Me | Kalida Corner</title>
      </Helmet>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/3">
          <div className="aspect-[4/5] bg-primary-200 rounded-3xl overflow-hidden shadow-lg relative">
            {/* Placeholder for professional photo */}
            <div className="absolute inset-0 flex items-center justify-center text-primary-400 font-serif text-center px-4">
              [Professional Photo Placeholder]
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-2/3 space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900">About Me</h1>
          
          <div className="space-y-4 text-primary-700 leading-relaxed">
            <p>
              Hello and welcome! I'm an experienced educator dedicated to helping students build confidence and strong foundational skills in reading and writing.
            </p>
            
            <h3 className="text-2xl font-serif font-semibold text-primary-800 pt-4">My Educational Background</h3>
            <p>
              I hold a degree in Education with a specialization in English Language Arts. My academic journey has equipped me with the latest pedagogical strategies to support diverse learning styles.
            </p>
            
            <h3 className="text-2xl font-serif font-semibold text-primary-800 pt-4">Tutoring Experience</h3>
            <p>
              Over the years, I've had the privilege of working one-on-one with students across various grade levels. I specialize in identifying learning gaps and creating tailored action plans that lead to measurable success.
            </p>
            
            <h3 className="text-2xl font-serif font-semibold text-primary-800 pt-4">Teaching Philosophy</h3>
            <p>
              I believe that every student has the potential to excel when provided with a supportive, warm, and structured environment. Learning shouldn't be a source of stress. My goal is to create a calming educational atmosphere where students feel safe to ask questions, make mistakes, and grow.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
