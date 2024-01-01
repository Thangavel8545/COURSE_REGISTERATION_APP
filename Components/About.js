

import React from 'react';
import './abtstyle.css'; 

export default function About() {
  return (
    <div className="about-container">
    <section className="about-section">
        <h1>About Our Course Registeration Application</h1>
        <p>
        Explore and register for a variety of courses on our platform. We are committed to providing a seamless and user-friendly experience for your educational journey.
        </p>
      </section>

      <section className="about-section">
        <h1>Our Mission</h1>
        <p>
        Our mission is to make education accessible to everyone. We understand the importance of learning, and our team of educators and developers has come together to create a platform that simplifies the course registration process.
        </p>
      </section>

      <section className="about-section">
        <h1>Our Commitment</h1>
        <p>
        At the core of our platform are efficiency, flexibility, and user-friendly features. We aim to streamline the course registration process, allowing you to focus on your learning journey without unnecessary hassles.
        </p>
      </section>

      <section className="about-section">
        <h1>Key Features</h1>
        <ul>
        <li>
          <strong>Easy Navigation:</strong> Our intuitive interface ensures a smooth browsing and registration experience for both new and experienced users.
        </li>
        <li><strong>Diverse Course Selection:</strong> Explore a wide range of courses in various subjects, catering to different interests and skill levels.</li>
        <li><strong>Automated Registration:</strong> Streamline the registration process with automated features that integrate seamlessly with course availability and scheduling.</li>
        <li><strong>Personalized Dashboard:</strong> Access a personalized dashboard to track your enrolled courses, upcoming classes, and progress.</li>
        <li><strong>Feedback and Ratings:</strong> Contribute to the community by providing feedback and ratings for courses you've completed.</li>
        <li><strong>Responsive Support:</strong> Our support team is here to assist you with any questions or concerns throughout your learning journey.</li>
        <li><strong>Data Security:</strong> We prioritize the security of your personal and academic information, implementing advanced encryption measures to protect your data.</li>
      </ul>
      </section>

      <section className="about-section">
        <h1>Our Team</h1>
        <p>
        Behind this platform is a dedicated team of educators and developers passionate about making education accessible. We continuously strive to enhance the platform's functionality and user experience.
        </p>
      </section>

      <section className="about-section">
        <h1>Join Our Community</h1>
        <p>
        Beyond being a registration platform, we are a community of learners. Engage in discussions, participate in webinars, and stay updated on the latest educational trends and tips by joining our learning community.
        </p>
      </section>
    </div>
  );
}