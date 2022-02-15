/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Dat Tran's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Khanh Dat Portfolio",
    type: "website",
    url: "https://dattran.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Khanh Dat",
  logo_name: "KhanhDat",
  nickname: "Story of mine",
  subTitle: "I am a fullstack-web developer having experience with MERN stack and other web technologies.",
  resumeLink:
    "",
  portfolio_repository: "",
  githubProfile: "",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/dattranbenit?tab=repositories",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/khanh-dat-tran/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:tranthokhanhdat@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStack",
      skills: [
        "⚡ Building website frontend using React-Redux with frameworks to enhance SEO ranking",
        "⚡ Building backend system, design database",
        "⚡ Clean code",
      ],
      softwareSkills: [
        {
          skillName: "HTML",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS, Scss, Less",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Wordpress Plugin",
          fontAwesomeClassname: "wordpress",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "nextjs",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "StoryBook",
          fontAwesomeClassname: "storybook",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "springboot",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "MySql",
          fontAwesomeClassname: "MySql",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "MongoDB",
          style: {
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "Project Management",
      fileName: "Management",
      skills: [
        "⚡ Experience working on team",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Design microservice system, deploy projects",
      ],
      softwareSkills: [
        {
          skillName: "Confluence",
          fontAwesomeClassname: "confluence",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "jira",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Gitlab",
          fontAwesomeClassname: "gitlab",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "slack",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Microservice",
          fontAwesomeClassname: "microservice",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "vercel",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Code Academy",
      iconifyClassname: "codeacademy",
      style: {
        color: "#2EC866",
      },
      // profileLink: "https://ww/**/w.hackerrank.com/layman_brother",
    },
    {
      siteName: "Udacity",
      iconifyClassname: "udacity",
      style: {
        color: "#5B4638",
      },
      // profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Udemy",
      iconifyClassname: "udemy",
      style: {
        color: "#1F8ACB",
      },
      // profileLink: "http://codeforces.com/profile/layman_brother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Hanoi Amsterdam High school for Gifted diploma",
      subtitle: "Specializing in Information Technology",
      logo_path: "iiitk_logo.png",
      alt_name: "Amsterdam",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied advanced Math and Algorithm",
        "⚡ Apart from this, I have done courses on Software Development, System design, DevOps.",
        "⚡ I was selected for scholarships of 100% tuition, having excellent grades and outstanding extracurricular activities, .",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked with many evolving Software Architect. I have also worked with some well established companies as full-stack Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full-stack Software engineer",
          company: "Benit",
          company_url: "https://www.crunchbase.com/organization/benit",
          logo_path: "pciwqwfxrb2hrjk0zmwj.png",
          duration: "June 2020 - PRESENT",
          location: "",
          description:
            "I am working on MERN-stack web application, SpringBoot and DevOps. The projects involve SEO ranking with business logic, AI scoring education test and Iot system. I am currently working on PTE Magic Platform. Our goal is to develop English practice platform online with accurate AI scoring system. Another project is Nauvus which is an Iot system to support traffic transportation",
          color: "black",
        },
        {
          title: "Frontend developer & Mentor",
          company: "Jmaster",
          company_url: "https://trungtamjava.com/",
          logo_path: "j.png",
          duration: "October 2020 - August 2021",
          location: "",
          description:
            "I worked with IT education websites, design UX and code UI React, Gasby, Nextjs. I also designed learning courses and being mentor for many college students",
          color: "#00ccff",
        },
        {
          title: "Co-founder & Technical leader",
          company: "AzureAms Programming Organisation",
          company_url: "https://azureams.org/",
          logo_path: "azure.png",
          duration: "May 2021 - PRESENT",
          location: "",
          description:
            "AzureAms is a start-up organisation for education and working with Opensource projects. I have been technical leader to guide students and participants on joining Opensource projects, design web system and building Opensource products",
          color: "#003366",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Nextjs & SpringBoot projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "animation_640_kzmopoeu.gif",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "1626010576100.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Find me at the office",
    subtitle:
      "Number 20, alley 1\n" +
      "Tran Quoc Hoan street,\n" +
      "Ha Noi, Viet Nam",
    avatar_image_path: "animation_640_kzmoprb2.gif",
    location_map_link: "https://www.google.com/maps/search/Number+20,+alley+1+Tran+Quoc+Hoan+street,+Ha+Noi,+Viet+Nam/@21.0414769,105.7879954,17z/data=!3m1!4b1",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "(+84) 822 178 887",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
