// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##${data.license}
  
  ![GitHub License](https://img.shields.io/badge/license-${data.license}-yellow.svg)

  ## Description 
  ${data.description}

  ##Table of Contents
  * [Instalation](#Instalation)

  * [Usage](#Usage)

  * [License](#License)

  * [Contributing](#Contributing)

  * [Tests](#Tests)

  * [Questions](#Questions)
  

##Instalation <br>
To install necessary dependencies, run the following command:
  ${data.install}

##Usage<br>
  ${data.usage}

##License<br>
  ${data.license}

##Contributing<br>
  ${data.contribution}

##Tests<br>
To run tests, run the following command:
  ${data.test}

##Questions<br>
If you have any questions please email me at:   ${data.email} 

If you would like to see more of my work you can check out my GitHub profile at [GitHub Profile](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
