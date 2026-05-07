import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PolicyAccordion = ({ title, content }: { title: string, content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary-200 py-4">
      <button 
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-serif font-bold text-primary-800">{title}</h3>
        {isOpen ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-secondary" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-primary-700 leading-relaxed">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Policies = () => {
  const policies = [
    {
      title: "Makeup Policy",
      content: "If a student needs to miss a session, please provide at least 24 hours notice. One makeup session is allowed per month, subject to availability."
    },
    {
      title: "Summer Session Policy",
      content: "Summer sessions are booked in packages to ensure consistent progress. Payment for summer packages is due in full prior to the first session."
    },
    {
      title: "Reserved Slot Policy",
      content: "To maintain your weekly reserved slot, consistent attendance is required. More than two consecutive unexcused absences may result in losing the reserved time."
    },
    {
      title: "Cancellation Expectations",
      content: "Cancellations made less than 24 hours in advance will be billed at the full rate. Exceptions are made for sudden illness or family emergencies."
    }
  ];

  const testimonials = [
    { text: "Kalida Corner has completely transformed my daughter's confidence in writing. She actually looks forward to her sessions!", author: "Sarah M." },
    { text: "The structured yet warm approach is exactly what our son needed to catch up on his reading levels.", author: "James T." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-20"
    >
      <Helmet>
        <title>Policies & Testimonials | Kalida Corner</title>
      </Helmet>

      {/* Policies Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary-900 mb-4">Studio Policies</h1>
          <p className="text-primary-600">Clear guidelines to ensure a productive and consistent learning experience.</p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 border border-primary-100">
          {policies.map((policy, idx) => (
            <PolicyAccordion key={idx} title={policy.title} content={policy.content} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">What Parents Are Saying</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-primary-50 p-8 rounded-2xl border border-primary-100 relative"
            >
              <div className="text-4xl text-secondary-light absolute top-4 left-4 opacity-50 font-serif">"</div>
              <p className="text-primary-800 italic mb-6 relative z-10">{test.text}</p>
              <p className="font-bold text-secondary-dark">{test.author}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Policies;
