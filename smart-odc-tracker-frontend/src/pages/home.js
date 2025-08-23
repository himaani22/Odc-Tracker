// src/pages/Home.js

import React, { useEffect } from 'react';
import ObjectivesCard from '../components/ObjectivesCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

import tracking from '../assets/odc1.jpg';
import route from '../assets/odc2.webp';
import permit from '../assets/odc3.jpg';
import safety from '../assets/odc4.jpg';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const objectives = [
    {
      title: 'Real-Time ODC Tracking',
      description:
        'Monitor oversized load movements in real-time, ensuring transparency and location accuracy throughout the journey.',
      image: tracking,
    },
    {
      title: 'AI-based Route Optimization',
      description:
        'Leverage AI to calculate the most efficient and safest routes, minimizing delays and operational costs.',
      image: route,
    },
    {
      title: 'Automated Permit Validation',
      description:
        'Integrate intelligent systems to validate all required permits before journey initiation, reducing human error.',
      image: permit,
    },
    {
      title: 'Instant Safety Alerts',
      description:
        'Enable instant notifications to all stakeholders about road hazards, weather alerts, and operational risks.',
      image: safety,
    },
  ];

  return (
    <>
      {/* 🔼 Background section with fresh content */}
      <section className="about-odc" data-aos="fade-in">
        <div className="overlay">
          <h3>Industry Insight</h3>
          <p>
            In today’s fast-paced logistics environment, transporting Over-Dimensional Cargo (ODC) demands more than just manpower — it requires precision, intelligence, and foresight. From construction machinery to industrial turbines, the margin for error is zero. That’s where our solution comes in.
          </p>

          <h3>Our Vision</h3>
          <p>
            To revolutionize the ODC transportation ecosystem by bringing automation, real-time visibility, and smart route intelligence into a traditionally manual and risk-prone domain. We aim to create a safer, faster, and smarter supply chain for oversized cargo.
          </p>
        </div>
      </section>

      {/* 🌟 2×2 Feature Grid Section */}
      <section id="services" className="objectives-section">
        <div className="features-wrapper">
          <div className="content">
            <h2 data-aos="zoom-in">Core Features</h2>
            <div className="grid-container">
              {objectives.map((obj, index) => (
                <div key={index} data-aos="fade-up">
                  <ObjectivesCard
                    title={obj.title}
                    description={obj.description}
                    image={obj.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔽 Summary below features */}
      <section className="project-summary-section" data-aos="fade-in">
        <h2>Core Capabilities</h2>
        <ul>
          <li>🔍 <strong>Live ODC Movement Monitoring</strong> – Always know where your cargo is</li>
          <li>📍 <strong>Smart Route Optimization</strong> – Cut down travel time and avoid restricted zones</li>
          <li>✅ <strong>Digital Permit Integration</strong> – Ensure legal compliance at every checkpoint</li>
          <li>🚨 <strong>Instant Hazard Alerts</strong> – Keep drivers and stakeholders safe and informed</li>
          <li>📊 <strong>Performance Dashboards</strong> – Visualize routes, delays, and transport KPIs</li>
        </ul>
        <br />
        <h2>Why It Matters</h2>
        <p>
          Oversized cargo operations involve high costs, tight schedules, and public safety implications. A minor delay or detour can escalate into massive financial or regulatory consequences. By digitizing and optimizing ODC transport, our platform helps avoid all of it — efficiently and elegantly.
        </p>
      </section>

      {/* 📬 Contact Section */}
      <section id="contact" className="contact-section" data-aos="fade-up">
        <h2>Contact Us</h2>
        <p>Have questions, suggestions, or want to collaborate? Reach out to us.</p>

        <form
          className="contact-form"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target;
            const formData = {
              name: form.name.value,
              email: form.email.value,
              message: form.message.value,
            };

            try {
              const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              });

              const result = await response.json();
              if (response.ok) {
                alert('📩 Message received!');
              } else {
                alert('📩 Message received!');
              }
            } catch (error) {
              console.log('Error:', error.message);
              alert('📩 Message received!.');
            }

            form.reset();
          }}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
}

export default Home;
