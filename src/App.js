import './App.css';
import Header from './components/Header';
import SingleFile from './components/SingleFile';
import DoubleFile from './components/DoubleFile';
import TableView from './components/TableView';

function App() {

  /* 
  Header content
  **/
  const title = "Hello There!";
  const welcome_msg = "Welcome to my portfolio website.";
  /*
  Introduction 
  **/
  const image1 = require("./pics/ME.jpg");
  const title1 = "Jonathan Ramstedt";
  const text1 = "20-year-old student, originally from Turku, grew up in Raseborg, and currently pursuing my studies at Aalto University. " +
                "My academic focus is on automation and robotics, and I have a deep-seated passion for coding. " +
                "I'm driven by innovation and excited to contribute my skills and knowledge to the world of Technology.";
  /* 
  Full - Stack
  **/
  const fsTitle = "Full-Stack Developer"
  const fsText = "I am a proficient full-stack web developer skilled in frameworks like Django, Flask, React, and Node.js. " + 
                  "I hold an IBM Full Stack Developer Professional Certificate, emphasizing my expertise in creating intuitive user interfaces and implementing robust server-side applications. " +
                  "Familiar Frameworks: React - Node, Express, Flask, Django (rest framework aswell) - PostgreSQL, SQLite"
  const fsImg = require("./pics/FS.png")
  /* 
  ML
  **/
  const mlTitle = "ML & AI"
  const mlText = "I have experience with and a great interest for machine learning and artificial intelligence. " + 
                "My skills enable me to create useable predictive models, such as language & image classifiers, estimators and other useful tools. " + 
                "I am also a certified codecademy ML & AI engineer, and currently studying a minor in data science ( & another in data technology.) " +
                "Frameworks: mainly scikit-learn, familiarity and interest to learn others aswell."
  const mlImg = require("./pics/ML.png");
  /* 
  Project
  **/
  const projTitle = "Projects"
  const projects = [
                      /* 
                      Project 1
                      **/
                      ["Car Dealership Website (template)", 
                      "Handles car dealers and their cars from databases. User authentication system for review posting.", 
                      "Django for main back and front end, Cloud NLP AI API, Flask and Node for local servers", 
                      "https://github.com/Jathn/agfzb-CloudAppDevelopment_Capstone"],
                      /*
                      Project 2 
                      **/
                      ["Auto Price Estimator", 
                      "Makes a prediction of a cars price based on inputs specified in the little API that was also created.", 
                      "Pandas, MatPlotLib, Gradio, scikit-learn", 
                      "https://github.com/Jathn/auto-price-estimator"],
                      /*
                      Project 3 
                      **/
                      ["Fake News Classification",
                      "A detailed Project where the truth value of news was classified with ML. Handled a dataset with 40,000 instances to get a satisfactory result. " + 
                      "Not publicly available as it was a study related project.",
                      "pandas, MatPlotLib, scikit-learn, NLP with nltk library."],
                      /*
                      Project 4
                      **/
                      ["Jammming",
                      "A front-end application for making your own website. Handles requests to the spotify API.", "React", "https://github.com/Jathn/Jammming"]
                    ]
  /* 
  Work experience
  **/
  const title2 = "Work Experience";
  const underTitle2 = "Restaurant Industry (Summer job, 5 years)"
  const text2 = "During my five summers in the restaurant industry, starting at an ice cream stand, I cultivated a strong work ethic and the ability to handle diverse responsibilities. " +
                "As a pizza cook, I honed my cooking skills and mastered the intricacies of kitchen logistics, requiring precision and quick thinking. " +
                "Transitioning into roles as sales & bar staff, I developed exceptional customer service skills. " +
                "This summer, I took on the role of Sales & Bar Manager, overseeing both front-of-house operations and the bar with a colleague."
  return (
    <div className="App">
      <Header title={title} message={welcome_msg} />
      <DoubleFile img={image1} title={title1} text={text1} isFirst={true} />
      <DoubleFile title={fsTitle} text={fsText} img_pos="left" img={fsImg} />
      <DoubleFile title={mlTitle} text={mlText} img={mlImg} />
      <TableView title={projTitle} content={projects} />
      <SingleFile title={title2} underTitle={underTitle2} text={text2} />
    </div>
  );
}

export default App;
