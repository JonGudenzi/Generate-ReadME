// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##${data.license}
  ## Description 
  ${data.description}
  ##Table of Contents
  * [Instalation](#Instalation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
##Instalation
To install necessary dependencies, run the folling command:
${data.install}
##Usage
${data.usage}
##License
${data.license}
##Contributing
${data.contribution}
##Tests
To run tests, run the following command:
${data.test}
##Questions
If you have any questions please email me at [${data.email}]. If you would like to see more of my work you can check out my GitHub profile at [https://github.com/${data.github}/]

`;
}

module.exports = generateMarkdown;
