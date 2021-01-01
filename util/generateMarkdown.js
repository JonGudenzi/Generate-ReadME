// function to generate markdown for README
function generateMarkdown(data) {
  const shieldURL = {
    "Apache License 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GNU General Public License v3.0":"[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "MIT License":"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "BSD 2-Clause 'Simplified' License":"[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    'BSD 3-Clause "New" or "Revised" License':"[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    'Boost Software License 1.0':"[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    'Creative Commons Zero v1.0 Universal':"[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    'Eclipse Public License 2.0':"[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    'GNU Affero General Public License v3.0':"[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    'GNU General Public License v2.0':"[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    'Mozilla Public License 2.0':"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    'The Unlicense':"[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  };

  return `# ${data.title}

  ## ${data.license}
  ${shieldURL[data.license]}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)

  * [Usage](#usage)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#Questions)

## Installation
To install necessary dependencies, run the following command:
  ${data.install}

## Usage
  ${data.usage}

## Contributing
  ${data.contribution}

## Tests
To run tests, run the following command:
  ${data.test}

## Questions
If you have any questions please email me at  [${data.email}](mailto:${data.email})

<br>

If you would like to see more of my work you can check out my GitHub profile at [GitHub Profile](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
