A React Portfolio Template for GitHub
GitHub Repo stars GitHub Repo Forks

A performant, accessible, progressive React portfolio template that uses the GitHub REST API.

Add your GitHub username once and all of your info will automatically be updated. Deploy to GitHub pages in a few simple steps.

Google PageSpeed Insights

Page Speed

Live Demo
Project Preview

Getting Started
Create a repository from this template

Clone your repostiory

Make sure Node is installed

Open your project and install the dependencies

npm install
Navigate to the src directory and open data.js

Add your GitHub username (data.js lines 14-18)

/* START HERE
************************************************************** 
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Your GitHub username here";
Start the development server to view the results

npm start
Updating the Projects section
Projects Preview

Follow the instructions to update the filteredProjects array (data.js lines 85-89)

/* Projects
************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];
Import the projects images you want to use (data.js lines 4-5) or the default image will be applied

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
Follow the instructions to update the projectData array (data.js lines 91-97)

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];
Updating the Contact section
Contact Preview

The contact form uses Formspree, create an account and add your endpoint URL (data.js lines 99-104)

/* Contact Info
************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
Deploy
A helpful guide for Create React App deployments with GitHub Pages can be found here.

Update the homepage value (package.json line 3)

"homepage": "https://YourUsername.github.io/your-app/",
Run the deploy command

npm run deploy
Customization Options
Checkout the Wiki for additional customization options:

Updating the Hero images
Add a custom Blog icon
Updating the About Me section
Updating the Skills section
Add a link to your resume
Back to top 🔝

License
MIT
