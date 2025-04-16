// import React from 'react';
// import Navbar from './components/Navbar';
// import { Hero } from './components/Hero';
// import { Stats } from './components/Stats';
// import { About } from './components/About';
// import { Schedule } from './components/Schedule';
// import { Prizes } from './components/Prizes';
// import { Footer } from './components/Footer';
// import CircuitBorder  from './components/CircuitBorder';


// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
//         <CircuitBorder />
//         <Navbar />
//         <Hero />
//         <section id="stats"><Stats /></section>
//         <section id="about"><About /></section>
//         <section id="schedule"><Schedule /></section>
//         <section id="prizes"><Prizes /></section>
//         <Footer />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      {/* Header and Navigation */}
      <header>
        <div className="container">
          <div className="logo">
            <img src="/src/Public/CogniHacks-transparent.png" alt="CogniHacks Logo" />
          </div>
          <h1 className='Banner'>CogniHacks 2025</h1>
        </div>
        <div className='container-right'>
              <nav>
                <ul>
                  <li><a href="#why">Why CogniHacks?</a></li>
                  <li><a href="#sponsorship">Sponsorship</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
            </div>
      </header>
      
      {/* Hero Section with Brain in the Background */}
      <section className="hero">
        <div className="hero-content">
          <h2>Innovate the Future with Neurotechnology</h2>
          <p>
            Join us as we bring BCIs to the mainstream and inspire impactful projects with AI.
          </p>
          <a
            href="#contact"
            className="cta-button"
          >
            Get in Touch
          </a>
        </div>
      </section>
      
      {/* Why CogniHacks Section */}
      <section id="why" className="container">
        <h2 className="section-title">Why CogniHacks?</h2>
        <div className="benefits">
          <div className="benefit">
            <h3>Brand Awareness</h3>
            <p>Boost your brand's visibility among tech-savvy students across the Bay Area.</p>
          </div>
          <div className="benefit">
            <h3>Recruitment Opportunity</h3>
            <p>Access a pool of future employees, interns, and innovative thinkers.</p>
          </div>
          <div className="benefit">
            <h3>Community Engagement</h3>
            <p>Support the growth of local tech skills and nurture future technology leaders.</p>
          </div>
        </div>
      </section>
      
      {/* Sponsorship Levels Section */}
      <section id="sponsorship" className="container">
        <h2 className="section-title">Sponsorship Levels</h2>
        <div className="sponsorship-levels">
          <div className="sponsor-card">
            <h3>Startup</h3>
            <p>Investment: $250</p>
            <ul>
              <li>Company Banner &amp; Logo on Shirts</li>
              <li>Logo on Website and Presentations</li>
              <li>Sponsor a Snack or Meal</li>
            </ul>
          </div>
          <div className="sponsor-card">
            <h3>Gold</h3>
            <p>Investment: $500</p>
            <ul>
              <li>All Startup Benefits</li>
              <li>Distribute Promotional Items</li>
              <li>Opportunity for Company Booth</li>
              <li>Access Attendee Profiles (LinkedIn/Github)</li>
            </ul>
          </div>
          <div className="sponsor-card">
            <h3>Diamond</h3>
            <p>Investment: $1,000 - $3,000</p>
            <ul>
              <li>All Gold Benefits</li>
              <li>Featured Mini Event or Talk/Workshop</li>
              <li>Reserved Judging Position</li>
              <li>Present at Opening &amp; Closing Ceremony</li>
            </ul>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          For special sponsorship arrangements, please email{' '}
          <a href="mailto:sponsors@cognihacks.com">sponsors@cognihacks.com</a>
        </p>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="container">
        <h2 className="section-title">Contact Us</h2>
        <p style={{ textAlign: 'center' }}>Have questions? We’d love to hear from you!</p>
        <p style={{ textAlign: 'center' }}>
          Email: <a href="mailto:hello@cognihacks.com">hello@cognihacks.com</a>
        </p>
        <p style={{ textAlign: 'center' }}>
          Visit:{' '}
          <a href="http://cognihacks.com" target="_blank" rel="noopener noreferrer">
            cognihacks.com
          </a>
        </p>
      </section>
      
      {/* Footer */}
      <footer>
        <div className="container">
          <p>
            CogniHacks is fiscally sponsored by Hack Club Bank, a project by The Hack Foundation, a 501(c)(3)
            nonprofit.
          </p>
          <p>&copy; 2025 CogniHacks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

