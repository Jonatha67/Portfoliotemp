// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/JDMJ.png";
import store from "./images/store.png"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Jonatha67";

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "As a dedicated software engineer, I am committed to continuously expanding my skill set by learning new programming languages and technologies as required.With a comprehensive understanding of both front-end and back-end web application development, I possess a strong aptitude for delivering exceptional results.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },

  {
    id: 10,
    skill:  < Icon icon="simple-icons:postgresql" className="display-4" />,
    name: "PostgresSQL",
  },

  {
    id: 10,
    skill:  < Icon icon="fa-brands:node-js" className="display-4" />,
    name: "Node.js",
  },

  {
    id: 10,
    skill:  < Icon icon="fa-brands:node-js" className="display-4" />,
    name: "Node.js",
  },

];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["Starbuzz-Coffee", "JDMJ-RealEstate", "Store-app"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "JDMJ-RealEstate",
    image: Logo,
    description: "hiiiiiiiiii"
  },
  {
    name: "Starbuzz-Coffee",
    
  },
  {
    name: "Store-app",
    image: store,
   
  }
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
