import React from 'react';
import { SafeAreaView } from 'react-native';
import Resume from '../components/Resume';

const resumeData = {
  contact_details: {
    name: "Kamlesh Sahani",
    email: "kamleshbca2005@gmail.com",
    phone: "+919667760692",
    github: "https://github.com/kamlesh-Sahani",
    linkedin: "https://linkedin.com/in/kamlesh-sahani"
  },
  summary: {
    title: "Frontend Developer",
    description: "Detail-oriented Frontend Developer with over [X] years of experience..."
  },
  skills: {
    languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
    frameworks_and_libraries: ["React.js", "Next.js", "Tailwind CSS", "Redux"],
    tools_and_technologies: ["Git", "Webpack", "Babel", "ESLint", "Prettier", "Jest", "Cypress"],
    methodologies: ["Agile", "Scrum"],
    others: ["Responsive Web Design", "Cross-browser Compatibility", "Web Accessibility", "RESTful APIs", "Firebase"]
  },
  experience: [
    {
      company: "Tech Innovators",
      role: "Frontend Developer",
      duration: "Jan 2022 - Present",
      responsibilities: [
        "Developed and maintained complex web applications using React.js and Next.js.",
        "Collaborated with UX/UI designers to implement responsive and user-centric designs."
      ],
      achievements: [
        "Improved web application performance by 30% through code optimization and efficient resource management.",
        "Led the frontend development of a major project that increased user engagement by 40%."
      ]
    }
  ],
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "XYZ University",
    duration: "2017 - 2020"
  },
  projects: [
    {
      name: "Cryptocurrency Web App",
      description: "Developed a cryptocurrency web application using React.js and the CoinGecko API...",
      features: ["Real-time data fetching", "Interactive UI", "Responsive design"],
      link: "https://github.com/kamlesh-Sahani/cryptocurrency-web-app"
    }
  ],
  certifications: [
    {
      name: "Frontend Developer Nanodegree",
      institution: "Udacity",
      year: "2021"
    }
  ],
  awards: [
    {
      title: "2nd Place - Hackathon",
      organization: "DBIT College",
      year: "2022",
      description: "Secured 2nd place in a hackathon sponsored by WSCube Tech..."
    }
  ]
};


const ResumeOption = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Resume data={resumeData} />
  </SafeAreaView>
  )
}

export default ResumeOption