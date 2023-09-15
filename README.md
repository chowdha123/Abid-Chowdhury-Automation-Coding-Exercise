# Abid-Chowdhury-Automation-Coding-Exercise

The programming language used is JavaScript.

POM (Page Object Model) design pattern is used to reduce code duplication and improve test maintenance. Pages packages are created to store abstract BasePage class which contains all the common WebElements and functionality of the application. For each web page in the application, there is a corresponding Page Class. This Page class will identify the WebElements of that specific web page and contains Page methods which perform operations on these WebElements. All Page Classes extends page.js class to use the elements and methods that are common to all https://webdriver.io/docs/pageobjects/

## Getting Started

### Prerequisites

| Description  | Min Version |
|--------------|-------------|
| node         | 16.x        |
| npm          | 8.x         |

### Clone the repo

```bash
# using ssh
git clone git@github.com:chowdha123/Abid-Chowdhury-Automation-Coding-Exercise.git
# using https
git clone https://github.com/chowdha123/Abid-Chowdhury-Automation-Coding-Exercise.git
```

### Installing dependencies

* `cd` into the path of the `package.json` file.
* `npm install`  <-- this will install all the dependencies listed in the `package.json` file.

### Running the tests

#### Command for running all the tests on stage:

```bash
npm run wdio # this script is located in the package.json file
```

#### To run single tests

```bash
npm run wdio:singletest # this script is located in the package.json file
```
Or you can modify your wdio.conf.local.mjs file, replacing * in line 9.

Note in a more built-out framework, I would use cli to create a better command to run single tests rather than constantly having to change in package.json or config file. For example,

You can use the `wdio` command with options to run a single test on a given server.

```bash
npx wdio run ./wdio.conf.js --base-url=${base_url} --spec=${spec}
```
 -- the config file would be given if multiple config files are present, base url parameter if working on multiple servers/pages and spec parameter for path to a specific test.

 ## wdio.conf files

See documentation here for inline comments and documentation:
<https://webdriver.io/docs/configurationfile/>

See this guide for the config Docs:
<https://webdriver.io/docs/options>

See this guide for Capabilities:
  <https://webdriver.io/docs/browserobject/#get-desired-capabilities>

The specs object determines the tests that are run based on the folder path provided.

Set a base URL in order to shorten url command calls. If your `url` parameter starts
with `/`, the base url gets prepended, not including the path portion of your baseUrl.
If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
gets prepended directly.


