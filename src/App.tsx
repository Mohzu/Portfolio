import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { DataProvider } from './context/DataContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const isAdminPath = window.location.pathname === '/admin';

  if (isAdminPath) {
    return (
      <LanguageProvider>
        <DataProvider>
          <AdminDashboard />
        </DataProvider>
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <DataProvider>
        <div className="App">
          <Header />
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </div>
      </DataProvider>
    </LanguageProvider>
  );
}

export default App;