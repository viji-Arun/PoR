import Home  from './Components/Home/Home';
import Navbar from './Navbar/navbar';
import About from './Components/About/About'; 
import './App.css';
import Skill from './Components/Skills/Skill';
import Contact from './Components/Contact/Contact';
import Footer from './Footer/Footer';
function App() {
  return (
    <>
      <Navbar /> 
      <Home/>
      <About/>
      <Skill/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
