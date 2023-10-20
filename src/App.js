import './App.css';
import Header from './components/Header';
import SingleFile from './components/SingleFile';
import DoubleFile from './components/DoubleFile';


function App() {

  // Title for the entire page
  const title = "Hello There!";
  const welcome_msg = "Welcome to my portfolio website.";

  const image1 = require("./pics/ME.jpg");
  const title1 = "Jonathan Ramstedt";
  const text1 = "20-year-old student, originally from Turku, grew up in Raseborg, and currently pursuing my studies at Aalto University. " +
                "My academic focus is on automation and robotics, and I have a deep-seated passion for coding. " +
                "I'm driven by innovation and excited to contribute my skills and knowledge to the world of Technology.";
  const title2 = "Work Experience";
  const underTitle2 = "Restaurant Industry (Summer job, 5 years)"
  const text2 = "During my five summers in the restaurant industry, starting at an ice cream stand, I cultivated a strong work ethic and the ability to handle diverse responsibilities. " +
                "As a pizza cook, I honed my cooking skills and mastered the intricacies of kitchen logistics, requiring precision and quick thinking. " +
                "Transitioning into roles as sales & bar staff, I developed exceptional customer service skills. " +
                "This summer, I took on the role of Sales & Bar Manager, overseeing both front-of-house operations and the bar with a colleague."
  
  const fsTitle = "Full-Stack Developer"
  const fsText = "I am a proficient full-stack web developer skilled in frameworks like Django, Flask, React, and Node.js. " + 
                  "I hold an IBM Full Stack Developer Professional Certificate, emphasizing my expertise in creating intuitive user interfaces and implementing robust server-side applications."
  const fsImg = require("./pics/FS.png")

  const mlTitle = "ML & AI"
  const mlText = "I have experience with and a great interest for machine learning and artificial intelligence. " + 
                "My skills enable me to create useable predictive models, such as language & image classifiers, estimators and other useful tools. " + 
                "I am also a certified codecademy ML & AI engineer, and currently studying a minor in data science ( & another in data technology.)"
  const mlImg = require("./pics/ML.png");
  return (
    <div className="App">
      <Header title={title} message={welcome_msg} />
      <DoubleFile img={image1} title={title1} text={text1} isFirst={true} />
      <DoubleFile title={fsTitle} text={fsText} img_pos="left" img={fsImg} />
      <DoubleFile title={mlTitle} text={mlText} img={mlImg} />
      <SingleFile title={title2} underTitle={underTitle2} text={text2} />
    </div>
  );
}

export default App;
