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
                  <li><a href="#tracks">Competitions</a></li>
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
              Register Now
            </a>
        </div>
      </section>
      
      {/* Why CogniHacks Section */}
      <section className="eventInfo">
        <div className="container">
          <h2 className="section-title">CogniHacks Is Coming.</h2>
          <h3>
            August 30th - Pleasanton, CA
          </h3>
          <p>
          Join our community of innovators at CogniHacks 2025, a student-led hackathon bringing together coders, creators, and neurotech enthusiasts to explore the future of Brain-Computer Interfaces (BCIs). While BCIs have traditionally been used in clinical research, our mission is to mainstream their recreational and creative potential in the computer science world. By combining AI and HCI, we aim to inspire participants to build impactful, human-centered projects that push the boundaries of how we interact with technology.
          </p>
        </div>
      </section>
      <section id="tracks" className="container">
        <h2 className="section-title">The Tracks.</h2>
        <div className="benefits">
          <div className="benefit">
            <h3>BCI</h3>
            <p>Introduce/demonstrate general BCI data flow to attendees and provide resources for BCI powered projects </p>
          </div>
          <div className="benefit">
            <h3>HCI</h3>
            <p>Coding projects aimed at enhancing the way humans use computers to solve tasks</p>
          </div>
          <div className="benefit">
            <h3>HCI (Concept)</h3>
            <p>Low to No Code projects presenting ideas for better interfaces humans can use for solving tasks</p>
          </div>
          <div className="benefit">
            <h3>AI:</h3>
            <p>yada yada yada</p>
          </div>
          <div className="benefit">
            <h3>Data Science:</h3>
            <p>yada yada yada</p>
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

            {/* Frequently Asked Questions */}
            <section id="sponsorship" className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="frequently-asked-questions">
          <div className="sponsor-card">
            <h3>What is CogniHacks?</h3>
            <p>Cognihacks is a hackathon focused on mainstreaming neurotechnology 
              in the CS world. As BCIs tend to primarily be used in clinical research, Our 
              vision is to bring awareness about recreational BCIs to coders in this hackathon, 
              inspiring them to make impactful projects with AI powered by BCI’s.
            </p>
          </div>
          <div className="sponsor-card">
            <h3>Who can participate in CogniHacks?</h3>
            <p>Anyone. High schoolers, Neurotech enthusiasts, College students, anyone who wants to 
              learn more about BCI’s HCI, and their involvement with AI
            </p>
          </div>
          <div className="sponsor-card">
            <h3>Do I need to have coding experience to join?</h3>
            <p>No prior coding experience is required
            </p>
          </div>
          <div className="sponsor-card">
            <h3>What should I bring to the hackathon?</h3>
            <p>Participants should bring laptop, charger, (maybe Emotiv’s software). We have free food and drinks!
            </p>
          </div>
          <div className="sponsor-card">
            <h3>Is there a cost to attend CogniHacks?</h3>
            <p>There is no cost because we have sponsors!
            </p>
          </div>
          <div className="sponsor-card">
            <h3>What is a BCI?</h3>
            <p>A Brain-Computer Interface (BCI) is a technology that enables direct communication between the brain and a computer. Using sensors to detect brain signals, 
              BCIs allow users to control digital devices with their thoughts — no physical movement required. They're used in areas like neurorehabilitation, gaming, and now, 
              creative coding projects like those at CogniHacks!
            </p>
          </div>
          <div className="sponsor-card">
            <h3>Do I need to bring a BCI? </h3>
            <p>Nope! You don’t need to bring your own BCI to participate. We’ll have a limited number of BCI devices available on-site for teams to use during the hackathon. If you do have your own device (like a NextMind or Emotiv headset), 
              feel free to bring it — but it’s not required to join the fun or build something awesome!
            </p>
          </div>
          <div className="sponsor-card">
            <h3>What is HCI?</h3>
            <p>Human-Computer Interaction (HCI) is the study and design of how people interact with computers and technology. It focuses on creating intuitive, efficient, and user-friendly interfaces — 
              from apps and websites to emerging tech like VR and BCIs. At CogniHacks, HCI plays a key role in making brain-powered tools more accessible, engaging, and impactful.
            </p>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          For special sponsorship arrangements, please email{' '}
          <a href="mailto:sponsors@cognihacks.com">sponsors@cognihacks.com</a>
        </p>
      </section>

            {/* Schedule */}
      <section id="sponsorship" className="container">
        <h2 className="section-title">Schedule</h2>
        <div className="sponsorship-levels">
          <div className="sponsor-card">
            <h3>Important Note</h3>
            <p>During the hackathon, all updates, announcements, and essential resources will be posted on our live page. 
              Whether it's schedule changes, API keys, 
              important links, or project submission details, everything you need will be there.</p>
          </div>
          </div>
          <div className="sponsorship-levels">
          <div className="sponsor-card">
            <h3>Timings</h3>
            <ul>
              <li><strong>8:30 AM</strong> — Check-in & Breakfast<br /><em>Registration desk open, coffee & snacks</em></li>
              <li><strong>9:00 AM</strong> — Opening Ceremony<br /><em>Welcome, theme reveal, sponsor intros</em></li>
              <li><strong>9:30 AM</strong> — Team Formation & Ideation Begins<br /><em>Icebreakers if needed for team creation</em></li>
              <li><strong>10:00 AM</strong> — Hacking Begins<br /><em>Mentors available for guidance</em></li>
              <li><strong>12:30 PM</strong> — Lunch Break<br /><em>Encourage casual networking</em></li>
              <li><strong>1:00 PM</strong> — Optional Workshops / Tech Talks<br /><em>Parallel with hacking, 30–45 min</em></li>
              <li><strong>3:30 PM</strong> — Midpoint Check-in / Optional Demos<br /><em>Brief status update from teams</em></li>
              <li><strong>4:00 PM</strong> — Continue Hacking<br /><em>Push toward MVP</em></li>
              <li><strong>6:30 PM</strong> — Hacking Ends – Code Freeze<br /><em>Finalize demos & prepare pitch</em></li>
              <li><strong>6:45 PM</strong> — Dinner + Demo Setup<br /><em>Light dinner/snacks</em></li>
              <li><strong>7:15 PM</strong> — Project Demos & Presentations<br /><em>3–5 mins per team</em></li>
              <li><strong>8:15 PM</strong> — Judging + Audience Voting<br /><em>Judges deliberate, attendees vote</em></li>
              <li><strong>8:45 PM</strong> — Awards & Closing Ceremony<br /><em>Prizes, photos, shout-outs</em></li>
              <li><strong>9:00 PM</strong> — Event Wrap-Up + Socializing / Networking<br /><em>Chill vibes, music, casual chats</em></li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="container">
        <h2 className="section-title">Contact Us</h2>
        <p style={{ textAlign: 'center' }}>Have questions? We’d love to hear from you!</p>
        <p style={{ textAlign: 'center' }}>
          Email: <a href="mailto:hello@cognihacks.com">hello@cognihacks.com</a>
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

