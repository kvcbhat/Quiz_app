const questions = [
  {
    text: "What is the correct command to create a new React project?",
    options: [
      { id: 0, text: "npx create-react-app myReactApp", isCorrect: true },
      { id: 1, text: "npx create-react-app", isCorrect: false },
      { id: 2, text: "npm create-react-app ", isCorrect: false },
      { id: 3, text: "npm create-react-app ", isCorrect: false },
    ],
  },
  {
    text: "What command is used to start the React local development server??",
    options: [
      { id: 0, text: "npm build", isCorrect: false },
      { id: 1, text: "npm run dev", isCorrect: false },
      { id: 2, text: "npm start", isCorrect: true },
      { id: 3, text: "npm server", isCorrect: false },
    ],
  },
  {
    text: "What is the default local host port that a React development server uses?",
    options: [
      { id: 0, text: "5000", isCorrect: false },
      { id: 1, text: "3000", isCorrect: true },
      { id: 2, text: "8080", isCorrect: false },
      { id: 3, text: "3500", isCorrect: false },
    ],
  },
  {
    text: "To develop and run React code, Node.js is required ?",
    options: [
      { id: 0, text: "True", isCorrect: true },
      { id: 1, text: "False", isCorrect: false },
    ],
  },
  {
    text: "Which of the following is the correct syntax for a button click event handler foo?",
    options: [
      { id: 0, text: "<button onclick={this.foo()}>", isCorrect: false },
      { id: 1, text: "<button onclick={this.foo}>", isCorrect: false },
      { id: 2, text: "<button onClick={this.foo()}>", isCorrect: false },
      { id: 3, text: "<button onClick={this.foo}>", isCorrect: true },
    ],
  },
];

export default questions;
