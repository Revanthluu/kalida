import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    studentGrade: '',
    goalsOrConcerns: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('http://localhost:3000/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ parentName: '', parentEmail: '', studentGrade: '', goalsOrConcerns: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto px-4 py-20"
    >
      <Helmet>
        <title>Contact & Inquiry | Kalida Corner</title>
      </Helmet>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-primary-900 mb-4">Get in Touch</h1>
        <p className="text-primary-600">Fill out the inquiry form below, and I'll get back to you shortly to discuss how we can support your student.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-primary-100">
        {status === 'success' ? (
          <div className="text-center py-10">
            <div className="text-secondary-dark text-6xl mb-4">✓</div>
            <h2 className="text-2xl font-serif font-bold text-primary-900 mb-2">Inquiry Submitted Successfully!</h2>
            <p className="text-primary-600">Thank you for reaching out. I will be in contact with you soon.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-8 text-secondary font-semibold hover:underline"
            >
              Submit another inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary-800">Parent/Guardian Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.parentName}
                  onChange={e => setFormData({...formData, parentName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary-800">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.parentEmail}
                  onChange={e => setFormData({...formData, parentEmail: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-800">Student Grade Level</label>
              <select 
                required
                value={formData.studentGrade}
                onChange={e => setFormData({...formData, studentGrade: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition bg-white"
              >
                <option value="">Select Grade Level</option>
                <option value="k-2">K-2nd Grade</option>
                <option value="3-5">3rd-5th Grade</option>
                <option value="6-8">Middle School (6-8)</option>
                <option value="9-12">High School (9-12)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-800">Goals or Concerns</label>
              <textarea 
                required
                rows={5}
                value={formData.goalsOrConcerns}
                onChange={e => setFormData({...formData, goalsOrConcerns: e.target.value})}
                placeholder="Please share what you are hoping to achieve through tutoring..."
                className="w-full px-4 py-3 rounded-xl border border-primary-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition resize-none"
              ></textarea>
            </div>

            {status === 'error' && (
              <p className="text-red-500 text-sm font-medium">There was an error submitting your form. Please try again.</p>
            )}

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-secondary-dark hover:bg-secondary text-white font-bold py-4 rounded-xl shadow-md transition disabled:opacity-70"
            >
              {status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
