import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, PenTool, CheckCircle, GraduationCap } from 'lucide-react';

const FloatingShapes = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[2, 0]} />
          <meshStandardMaterial color="#8b9d83" wireframe />
        </mesh>
      </Float>
    </>
  );
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative"
    >
      {/* Global Premium Background */}
      <div className="fixed inset-0 -z-10">
        <img 
          src="/assets/global_bg.png" 
          alt="Academy Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-academy-cream/20" />
      </div>

      <Helmet>
        <title>Kalida Corner | Tutoring in Reading, Writing & ELA</title>
        <meta name="description" content="Professional and welcoming tutoring specializing in reading, writing, grammar, and ELA support." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 8] }}>
            <FloatingShapes />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary-dark/10 text-secondary-dark font-bold text-sm tracking-widest uppercase border border-secondary-dark/20"
          >
            Nurturing Excellence
          </motion.div>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-black text-primary-900 mb-8 tracking-tight"
          >
            Welcome to <br /> <span className="text-secondary-dark">Kalida Corner</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-primary-700 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering students through focused, professional support in reading, writing, and English Language Arts.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/contact" className="inline-block bg-secondary-dark hover:bg-primary-900 text-white font-black py-5 px-10 rounded-2xl shadow-2xl shadow-secondary-dark/20 transform transition hover:-translate-y-1 text-lg">
              Contact for Availability
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-serif font-black text-primary-900 mb-6">Areas of Focus</h2>
          <div className="w-24 h-1.5 bg-secondary-dark mx-auto mb-8 rounded-full" />
          <p className="text-primary-600 max-w-2xl mx-auto text-lg leading-relaxed">Tailored instruction designed to meet each student's unique academic journey and individual needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: "Reading Comprehension", icon: <BookOpen className="w-12 h-12" />, desc: "Building strong foundational reading skills and critical analytical thinking." },
            { title: "Writing Skills", icon: <PenTool className="w-12 h-12" />, desc: "From technical paragraph structure to advanced academic essay composition." },
            { title: "Grammar Mastery", icon: <CheckCircle className="w-12 h-12" />, desc: "Mastering the rules of language for clear, impactful communication." },
            { title: "ELA Support", icon: <GraduationCap className="w-12 h-12" />, desc: "Comprehensive support aligned with current academic standards." },
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white/70 backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl border border-primary-100/50 flex flex-col items-center text-center transition-all"
            >
              <div className="w-24 h-24 bg-primary-50/50 rounded-3xl flex items-center justify-center text-secondary-dark mb-8 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black font-serif mb-4 text-primary-800">{service.title}</h3>
              <p className="text-primary-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-xl rounded-[3rem] p-12 md:p-24 shadow-2xl border border-white/50 relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-secondary-dark/20 to-transparent" />
          <h2 className="text-4xl font-serif font-black text-primary-900 mb-12">Current Availability</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="bg-white/40 p-8 rounded-3xl border border-primary-100/50 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-black text-secondary-dark mb-4">School Year</h3>
              <p className="text-primary-700 leading-relaxed text-lg font-medium">Currently accepting waitlist inquiries for after-school sessions (Mon-Thu).</p>
            </div>
            <div className="bg-secondary-dark/5 p-8 rounded-3xl border border-secondary-dark/10 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-black text-secondary-dark mb-4">Summer Sessions</h3>
              <p className="text-primary-700 leading-relaxed text-lg font-medium">Registration is now open for intensive summer reading and writing workshops.</p>
            </div>
          </div>
          <div className="mt-16 pt-12 border-t border-primary-100/30">
            <p className="text-primary-400 font-bold uppercase tracking-widest text-sm">Limited slots available for the upcoming semester</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
