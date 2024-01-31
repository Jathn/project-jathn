import './App.css';
import Header from './components/Header';
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
  const text1 = "21-year-old student, originally from Turku, grew up in Raseborg, and currently pursuing my studies at Aalto University. " +
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
                      ["Car Dealership Website","",
                      "Handles car dealers and their cars from databases. User authentication system for review posting.", 
                      "Django for main back and front end, Cloud NLP AI API, Flask and Node for local servers", 
                      "https://github.com/Jathn/agfzb-CloudAppDevelopment_Capstone"],
                      /*
                      Project 2 
                      **/
                      ["Auto Price Estimator","",
                      "Makes a prediction of a cars price based on inputs specified in the little API that was also created.", 
                      "Pandas, MatPlotLib, Gradio, scikit-learn", 
                      "https://github.com/Jathn/auto-price-estimator"],
                      /*
                      Project 3 
                      **/
                      ["Fake News Classification","",
                      "A detailed Project where the truth value of news was classified with ML. Handled a dataset with 40,000 instances to get a satisfactory result. ",
                      "pandas, MatPlotLib, scikit-learn, NLP with nltk library.",
                      "https://github.com/Jathn/fakenews_detector/"],
                      /*
                      Project 4
                      **/
                      ["Jammming","",
                      "A front-end application for playlist creation. Handles requests to the spotify API.", 
                      "React", 
                      "https://github.com/Jathn/Jammming"],
                    ]
  /* 
  Work experience
  **/
  const programming = [
    ["JavaScript", "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", "Experience level: Intermediate", "Familiarity with Node, Express and React. Knowledge of creating tested & secure full-stack web apps."],
    ["Python", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXT2V0192ugY3c5ocZ5noZvxxwbfEOXZ8I2g&usqp=CAU", "Experience level: Advanced", "Machine learning, web development, and data science. Familiarity with many libraries and frameworks and adapting to new ones is no issue."],
    ["Scala", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupUwOPBgxqtKzv0MLtkJTQ4eY-VeHto27Vg&usqp=CAU", "Experience level: Intermediate", "CS concepts: Algorithmic programming, data structures, and functional programming."],
    ["C++", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqysu4hCQdVx47zRTnherSUX0MRL0VtzoHLg&usqp=CAU", "Experience level: Intermediate", "Knowledgeable in C++ for micro controller (Arduino) and game development.", ""],
    ["IBM cloud", "https://lh4.googleusercontent.com/TvOcd33BzpR7U2tsEwHHutwYxP1vbga3MPzhw_GB6yfMPDBkRq4DnO9KIGEf2bkhv5pkwkdAfw5v_gVSr2tGYzqFOm_DaajQWCN68i-wnNz_x5ZrvStdv-gb7rIXa9mBeauiRczX", "Experience level: Proficient", "Deployment of web applications, cloud functions, and cloud databases."],
    ["AWS", "https://i.pinimg.com/736x/a7/c6/ed/a7c6ede40689fe04bb72e221945f1a12.jpg", "Limited experience", "My usage with AWS has been around making serverless endpoints utilizing lambda and RDS"],
    ["NoSQL/SQL", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqYx0Aw9Hnk-Q4C-B7lUm3n9l2PfLoGqcdw&usqp=CAU", "Experience level: Proficient", "Experience with SQL & NoSQL for database creation, handling and integration. Comfortable with PostgreSQL, sqlite & MongoDB."],
    ["R", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1086px-R_logo.svg.png", "Experience level: Proficient", "Time Series Analysis & Data visualization."],
  ];

  return (
    <div className="App">
      <Header title={title} message={welcome_msg} />
      <DoubleFile img={image1} title={title1} text={text1} isFirst={true} />
      <DoubleFile title={fsTitle} text={fsText} img_pos="left" img={fsImg} />
      <DoubleFile title={mlTitle} text={mlText} img={mlImg} />
      <TableView title={projTitle} content={projects} underTitle={"Project, description & their github links:"} secondTitle={"Technologies used:"}/>
      <TableView title="Technology experience" content={programming} underTitle="" secondTitle={"Usage"}/>
    </div>
  );
}

export default App;
