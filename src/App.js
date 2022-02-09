// import logo from './logo.svg';
import './App.css';
import About from './components/About';
// import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils_Made_Easy" aboutText="About Us"/> */}
      {/* <Navbar title="TextUtils_Made_Easy"/> */}
      <div className="container my-3">
        <TextForm heading="Enter the text below to analyze-"/>
      {/* <About/> */}
      </div>
    </>
  );
}
// setInterval(() =>{
//   document.title = "TextUtils is Amazing";
// }, 2000);
// setInterval(() =>{
//   document.title = "TextUtils is Bad";
// }, 1500);

export default App;
