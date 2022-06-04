// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license == "none"){
    return;
  }

  else{
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;

  }

 // [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) 
 // [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
 //  [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
 //  [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
}


// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "none"){
    return;
  }

  else{
    return "* [License](#License)"
  }
}


// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "none"){
    return;
  }

  else{
    return `# License:
    ${license}`
  }
}


function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

#### Table of Content:
  * [Description](#Description)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Instructions](#Instructions)
  * ${renderLicenseLink(data.license)}
  * [Github](#Github)
  * [Email](#Email)
  
# Description: 
  ${data.description}

# Usage:
  ${data.usage}

# Contribution:
  ${data.contribution}

# Instructions:
  ${data.instructions}

 
 ${renderLicenseSection(data.license)}
  

# Github:
  ${data.github}

# Email:
  ${data.email}
`;
}

module.exports = generateMarkdown;

