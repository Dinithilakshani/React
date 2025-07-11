import React from 'react';

// Types
interface TeamMember {
    name: string;
    role: string;
    description: string;
    image: string;
}

interface Stat {
    number: string;
    label: string;
}

// Sample data
const teamMembers: TeamMember[] = [
    {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        description: "Passionate about creating innovative solutions that make a difference.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
        name: "Michael Chen",
        role: "CTO",
        description: "Tech enthusiast with 10+ years of experience in software development.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
        name: "Emily Rodriguez",
        role: "Design Lead",
        description: "Creative designer focused on user experience and beautiful interfaces.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
];

const stats: Stat[] = [
    { number: "5+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
];

// Inline styles with TypeScript
const styles = {
    container: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: "'Poppins', sans-serif",
        position: 'relative' as const,
        overflow: 'hidden' as const,
    },

    hero: {
        padding: '4rem 2rem',
        textAlign: 'center' as const,
        color: '#fff',
        position: 'relative' as const,
        zIndex: 2,
    },

    heroTitle: {
        fontSize: '3.5rem',
        fontWeight: 700,
        marginBottom: '1rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        animation: 'fadeInDown 0.8s ease-out',
    },

    heroSubtitle: {
        fontSize: '1.5rem',
        fontWeight: 300,
        marginBottom: '2rem',
        opacity: 0.9,
        animation: 'fadeInUp 0.8s ease-out 0.2s both',
    },

    content: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
    },

    section: {
        background: 'rgba(255, 255, 255, 0.95)',
        margin: '2rem 0',
        padding: '3rem',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
        animation: 'slideUp 0.8s ease-out',
    },

    sectionTitle: {
        fontSize: '2.5rem',
        fontWeight: 600,
        color: '#333',
        marginBottom: '2rem',
        textAlign: 'center' as const,
        position: 'relative' as const,
    },

    sectionText: {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#666',
        marginBottom: '2rem',
        textAlign: 'center' as const,
    },

    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        marginTop: '3rem',
    },

    statCard: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '2rem',
        borderRadius: '15px',
        textAlign: 'center' as const,
        color: '#fff',
        boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    },

    statNumber: {
        fontSize: '2.5rem',
        fontWeight: 700,
        marginBottom: '0.5rem',
    },

    statLabel: {
        fontSize: '1rem',
        fontWeight: 400,
        opacity: 0.9,
    },

    teamGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '3rem',
    },

    teamCard: {
        background: '#fff',
        padding: '2rem',
        borderRadius: '15px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: '2px solid transparent',
    },

    teamImage: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        objectFit: 'cover' as const,
        margin: '0 auto 1rem',
        display: 'block',
        border: '4px solid #667eea',
    },

    teamName: {
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '#333',
        marginBottom: '0.5rem',
        textAlign: 'center' as const,
    },

    teamRole: {
        fontSize: '1rem',
        fontWeight: 500,
        color: '#667eea',
        marginBottom: '1rem',
        textAlign: 'center' as const,
    },

    teamDescription: {
        fontSize: '0.9rem',
        color: '#666',
        lineHeight: '1.6',
        textAlign: 'center' as const,
    },

    values: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginTop: '3rem',
    },

    valueCard: {
        background: '#f8f9fa',
        padding: '2rem',
        borderRadius: '15px',
        textAlign: 'center' as const,
        border: '2px solid transparent',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    },

    valueIcon: {
        fontSize: '3rem',
        marginBottom: '1rem',
        color: '#667eea',
    },

    valueTitle: {
        fontSize: '1.3rem',
        fontWeight: 600,
        color: '#333',
        marginBottom: '1rem',
    },

    valueDescription: {
        fontSize: '0.9rem',
        color: '#666',
        lineHeight: '1.6',
    },
};

// CSS animations
const cssAnimations = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  .about-container::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: rotate(45deg);
    animation: shimmer 4s infinite;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 2px;
  }
  
  .stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
  }
  
  .team-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    border-color: #667eea;
  }
  
  .team-image {
    transition: all 0.3s ease;
  }
  
  .team-card:hover .team-image {
    transform: scale(1.1);
  }
  
  .value-card:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3);
  }
  
  .value-card:hover .value-icon,
  .value-card:hover .value-title,
  .value-card:hover .value-description {
    color: white;
  }
  
  .floating-element {
    animation: float 3s ease-in-out infinite;
  }
  
  .pulse-element {
    animation: pulse 2s ease-in-out infinite;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .about-hero {
      padding: 2rem 1rem;
    }
    
    .hero-title {
      font-size: 2.5rem;
    }
    
    .hero-subtitle {
      font-size: 1.2rem;
    }
    
    .about-section {
      padding: 2rem;
      margin: 1rem 0;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .stats-grid,
    .team-grid,
    .values-grid {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .about-hero {
      padding: 1.5rem 1rem;
    }
    
    .hero-title {
      font-size: 2rem;
    }
    
    .hero-subtitle {
      font-size: 1rem;
    }
    
    .about-section {
      padding: 1.5rem;
    }
    
    .section-title {
      font-size: 1.8rem;
    }
  }
`;

// Component
export const About: React.FC = () => {
    return (
        <>
            <style>{cssAnimations}</style>
            <div className="about-container" style={styles.container}>
                {/* Hero Section */}
                <section className="about-hero" style={styles.hero}>
                    <h1 className="hero-title" style={styles.heroTitle}>About Us</h1>
                    <p className="hero-subtitle" style={styles.heroSubtitle}>
                        We're passionate about creating amazing digital experiences
                    </p>
                </section>

                <div style={styles.content}>
                    {/* Mission Section */}
                    <section className="about-section" style={styles.section}>
                        <h2 className="section-title" style={styles.sectionTitle}>Our Mission</h2>
                        <p style={styles.sectionText}>
                            We believe in the power of technology to transform businesses and lives. Our mission is to deliver
                            innovative solutions that not only meet our clients' needs but exceed their expectations. We're
                            committed to excellence, creativity, and building lasting partnerships.
                        </p>

                        {/* Stats */}
                        <div className="stats-grid" style={styles.statsGrid}>
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-card floating-element" style={styles.statCard}>
                                    <div style={styles.statNumber}>{stat.number}</div>
                                    <div style={styles.statLabel}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Team Section */}
                    <section className="about-section" style={styles.section}>
                        <h2 className="section-title" style={styles.sectionTitle}>Meet Our Team</h2>
                        <p style={styles.sectionText}>
                            Our diverse team of experts brings together years of experience and passion for innovation.
                        </p>

                        <div className="team-grid" style={styles.teamGrid}>
                            {teamMembers.map((member, index) => (
                                <div key={index} className="team-card" style={styles.teamCard}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="team-image"
                                        style={styles.teamImage}
                                    />
                                    <h3 style={styles.teamName}>{member.name}</h3>
                                    <p style={styles.teamRole}>{member.role}</p>
                                    <p style={styles.teamDescription}>{member.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="about-section" style={styles.section}>
                        <h2 className="section-title" style={styles.sectionTitle}>Our Values</h2>
                        <p style={styles.sectionText}>
                            These core values guide everything we do and shape our culture.
                        </p>

                        <div className="values-grid" style={styles.values}>
                            <div className="value-card pulse-element" style={styles.valueCard}>
                                <div className="value-icon" style={styles.valueIcon}>🚀</div>
                                <h3 className="value-title" style={styles.valueTitle}>Innovation</h3>
                                <p className="value-description" style={styles.valueDescription}>
                                    We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.
                                </p>
                            </div>

                            <div className="value-card pulse-element" style={styles.valueCard}>
                                <div className="value-icon" style={styles.valueIcon}>🤝</div>
                                <h3 className="value-title" style={styles.valueTitle}>Collaboration</h3>
                                <p className="value-description" style={styles.valueDescription}>
                                    We work together as a team and with our clients to achieve exceptional results.
                                </p>
                            </div>

                            <div className="value-card pulse-element" style={styles.valueCard}>
                                <div className="value-icon" style={styles.valueIcon}>⭐</div>
                                <h3 className="value-title" style={styles.valueTitle}>Excellence</h3>
                                <p className="value-description" style={styles.valueDescription}>
                                    We strive for perfection in everything we do and never settle for mediocrity.
                                </p>
                            </div>

                            <div className="value-card pulse-element" style={styles.valueCard}>
                                <div className="value-icon" style={styles.valueIcon}>🌱</div>
                                <h3 className="value-title" style={styles.valueTitle}>Growth</h3>
                                <p className="value-description" style={styles.valueDescription}>
                                    We believe in continuous learning and helping our team and clients grow together.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default About;