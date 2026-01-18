/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Splash Screen
const splashScreen = {
  enabled: true,
  duration: 2000
};

// Summary And Greeting Section
const illustration = { animated: true };

const greeting = {
  username: "Tharun Reddy Nagula",
  title: "Decision Support Systems Student",
  subTitle: emoji(
    "I am passionate about data analytics, IoT, and IT solutions, applying technology to solve real-world problems."
  ),
  resumeLink: "https://drive.google.com/file/d/1N0jnfDh4X5KB4SMOD473cGPymJ4Top5r/view?usp=sharing", // Replace with your resume link
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/THARUN.NAGULA",
  linkedin: "https://www.linkedin.com/in/tharun-reddy-nagula/",
  gmail: "tharunreddynagula@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "Data Analytics, IT Support, Cybersecurity, and IoT Enthusiast",
  skills: [
    emoji("⚡ Analyze and visualize data using Python, SQL, R, BigQuery, Tableau, and Looker Studio"),
    emoji("⚡ Build IoT systems and sensor-based solutions like Smart Agriculture"),
    emoji("⚡ Perform IT support, network setup, and cybersecurity best practices")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "R", fontAwesomeClassname: "fab fa-r-project" },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "Windows", fontAwesomeClassname: "fab fa-windows" },
    { skillName: "Networking", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Cybersecurity", fontAwesomeClassname: "fas fa-shield-alt" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Jawaharlal Nehru Technological University, Hyderabad",
      subHeader: "Bachelor of Technology (B.Tech.) in Electronics and Communication Engineering",
      duration: "Oct 2019 – Dec 2023",
      descBullets: [
        "Gained experience in Python, C++, networking, and signal processing",
        "Focused on embedded systems and data-driven projects"
      ]
    },
    {
      schoolName: "Higher Secondary Certificate, Narayana Junior College, Hyderabad",
      duration: "Aug 2017 – Aug 2019",
    },
    {
      schoolName: "Board of Secondary Education Telangana, Dilsukhnagar Public School, Hyderabad",
      duration: "Mar 2017",
    }
  ]
};

// Work Experience / Internships
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Embedded Systems Intern",
      company: "Takeoff Projects, Hyderabad",
      date: "Dec 2022 – Sep 2023",
      desc: "Worked on a Smart Agriculture system using IoT and sensor-based technology to monitor and manage environmental conditions for crops.",
      descBullets: [
        "Set up sensors to measure soil moisture, temperature, and humidity",
        "Programmed Arduino/NodeMCU microcontrollers to collect real-time data",
        "Implemented automated irrigation based on sensor data",
        "Created a dashboard for data visualization"
      ]
    }
  ]
};

// Projects / DSS Assignments
const bigProjects = {
  title: "Projects & DSS Assignments",
  subtitle: "Data-driven projects and academic assignments",
  projects: [
    {
      projectName: "Shopping Behaviour Data Analytics",
      projectDesc: "Analyzed customer shopping behavior to identify patterns, trends, and insights for decision support.",
      footerLink: [
        {
          name: "View Report",
          url: "https://docs.google.com/spreadsheets/d/1CG8i9OXBoGmTe6TWEwFMQDnCXIwkUgUt94J6NJuvap4/edit?usp=sharing" // Replace with Google Drive link
        }
      ]
    },
    {
      projectName: "Expert Systems on Student Burnout Prediction",
      projectDesc: "Developed an expert system to predict student burnout using rule-based AI techniques to improve academic performance and wellbeing.",
      footerLink: [
        {
          name: "View Report",
          url: "https://colab.research.google.com/drive/1cPi64lfi14DtGZE726RSbdxPfWt4NI6q?usp=sharing" // Replace with Google Drive link
        }
      ]
    },
    {
      projectName: "Machine Learning System on Diabetic Prediction & AI-powered Research Analysis",
      projectDesc: "Built a machine learning model for diabetic prediction and an AI agent for automated research findings analysis to support decision-making.",
      footerLink: [
        {
          name: "View Report",
          url: "https://colab.research.google.com/drive/16HY29qpd3u0WON2F4N8k1qlUSwR1VBZM?usp=sharing" // Replace with Google Drive link
        }
      ]
    }
  ],
  display: true
};

// Courses
const educationCourses = {
  display: true,
  courses: [
    {
      courseName: "Google Data Analytics Professional",
      platform: "Google (Coursera)",
      duration: "Apr 2024 – Sep 2024"
    },
    {
      courseName: "Google IT Support Professional Certificate",
      platform: "Google (Coursera)",
      duration: "May 2024 – Oct 2024"
    },
    {
      courseName: "Google Cybersecurity Professional Certificate",
      platform: "Google (Coursera)",
      duration: "Dec 2024 – Present"
    }
  ]
};

// About Me Section
const aboutMe = {
  display: true,
  description: "I am Tharun Reddy Nagula, a recent B.Tech graduate in Electronics and Communication Engineering from Jawaharlal Nehru Technological University, Hyderabad. I have hands-on experience in IoT and data analytics through internships and hackathons, including developing sensor-based smart agriculture systems and creating data-driven dashboards. Skilled in Python, SQL, R, BigQuery, Tableau, and Looker Studio, I enjoy applying technology to solve real-world problems and optimizing processes. Actively involved in data science and technology communities, I collaborate on innovative projects. My goal is to apply my technical skills and problem-solving abilities to drive impact in IT, data science, and technology solutions."
};

// Contact Info
const contactInfo = {
  display: true,
  title: "Contact Me ☎️",
  subtitle: "Reach out to me for projects or collaboration",
  email_address: "tharunreddynagula@gmail.com",
  number: "+49 17663067029"
};

export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  educationCourses,
  aboutMe,
  contactInfo
};
