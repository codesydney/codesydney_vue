# Code.Sydney
### *A volunteer coder community based in Sydney, Australia*
![Code.Sydney Logo](_docs/assets/codesydney_logo.png)

## Setup
1. Install [NVM](https://github.com/nvm-sh/nvm) or [NVM-Windows](https://github.com/coreybutler/nvm-windows).
    - *NVM-Windows* `nvm install 14.7.0`
    - *NVM* [manual](https://github.com/nvm-sh/nv)
1. Set node version:
    - If NVM - `nvm use`
    - If NVM-Windows - `nvm use 14.7.0
1. Install [Vue.js](https://vuejs.org/v2/guide/installation.html#NPM).
    - *Optional* Install Vue [Devtools](https://vuejs.org/v2/guide/installation.html#Vue-Devtools).
    - *Optional* Install the [Vue CLI](https://cli.vuejs.org/guide/installation.html).
1. Install [VS Code](https://code.visualstudio.com/download).
    Setup VS Code extensions:
    - Vetur
    - ESLint
    - Prettier
1. <b>Open one terminal</b>, navigate to the client directory `cd client` in your terminal and run:
```
npm install
npm run serve
```
1. <b>Open aonther terminal</b>, `cd client`, and run `json-server --watch membersDb.json`
1. Open your browser and navigate to `localhost:8080/`.

## Git setup:
1. Install [git](https://git-scm.com/downloads).
1. Open your terminal and enter...
    - `git config --global user.name "Your name here"`
    - `git config --global user.email "your_email@example.com`  
*Replace the quotation sections with your name and email address respectively, without the quotes.
Ensure that the email address is the same as your Github account.*
1. Navigate to your desired workspace in the terminal.
1. Enter `git clone https://github.com/codesydney/codesydney.git`.
1. Navigate to the root folder `cd codesydney/`.

## Git workflow:
*Reference:* [git - the simple guide](https://rogerdudler.github.io/git-guide/)

1. Create a new branch for the issue you are working on.
1. Make changes to you code.
1. Add the changes to the Index and commit the changes.
    - *Ensure you include a descriptive, yet concise, description of the changes.*
    - Repeat until your issue is finished.
1. Push to the Github repository `git push origin "my_branch_name"`.
    - *Becareful not to push to master.*
1. Open Github in your browser and submit a new pull request.
