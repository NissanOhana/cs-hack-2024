
# Setting Up a React App with Vite

Follow these steps to create and start developing a new React application using Vite:

## Step 1: Install Node.js
Ensure that Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

## Step 2: Create a New Project
Open your terminal and run the following command to create a new project:
`npm create vite@latest my-react-app`
change `my-react-app` to your application name.
1. choose a project name
2. choose framework - React, and then choose variant (JS/TS)
3. go to your new project, install modules and run it:
```
cd my-react-app
npm install
npm run dev
```

## Step 3: Init git repo and push it to github
You should know how to do it. TL;DR from github docs:
```
echo "# my-react-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:NissanOhana/my-react-app.git
git push -u origin main
```

### Install MUI
Read more about MUI here: https://mui.com/material-ui/getting-started/
```
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

```
