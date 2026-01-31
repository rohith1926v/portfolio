import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </div>
  );
}

export default App;