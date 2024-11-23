import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import './Home.css';
import  healthcare from '../assets/healthcare.jpg';

const DeveloperCard = ({ name, role, image, description }) => (
  <Card variant="default" className="dev-card">
    <img src={image} alt={name} className="dev-image" />
    <h2>{name}</h2>
    <h3>{role}</h3>
    <p>{description}</p>
    <Button variant="primary" size="medium">
      Know More
    </Button>
  </Card>
);

const Home = () => {
  const developers = [
    {
      name: "John Doe",
      role: "Lead Developer",
      image: "https://placehold.co/150x150",
      description: "Expert in AI and machine learning with 5+ years of experience in healthcare solutions."
    },
    {
      name: "Jane Smith",
      role: "ML Engineer",
      image: "https://placehold.co/150x150",
      description: "Specialized in neural networks and deep learning implementations."
    },
    {
      name: "Mike Johnson",
      role: "Backend Developer",
      image: "https://placehold.co/150x150",
      description: "Database expert with strong foundation in scalable architecture."
    },
    {
      name: "Sarah Williams",
      role: "Frontend Developer",
      image: "https://placehold.co/150x150",
      description: "UI/UX specialist with focus on responsive and accessible design."
    }
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Transforming Healthcare with AI</h1>
          <p className="hero-description">
            Leveraging artificial intelligence and machine learning to revolutionize 
            healthcare diagnostics and patient care. Our cutting-edge solutions provide 
            accurate, efficient, and accessible healthcare services to everyone.
          </p>
          
        </div>
        <div className="hero-image-container">
          <img 
            src={healthcare}
            alt="Healthcare AI" 
            className="hero-image"
          />
        </div>
      </div>
      
      <section className="team-section">
        <h2 className="section-title">Our Expert Team</h2>
        <div className="team-grid">
          {developers.map((dev, index) => (
            <DeveloperCard key={index} {...dev} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
