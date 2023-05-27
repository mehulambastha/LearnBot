import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Bookbuddy from './components/bookbuddy';
import Learnit from './components/learnit';
import Vidcrunch from './components/vidcrunch';
import Products from './components/products';


const App = () => {
  return (
  <div>
    <Navbar items = {["Home", "BookBuddy", "LearnIt", "VideoHelper", "About"]}/>
    <Hero />
    <Products />
    <Bookbuddy />
    <Learnit />
    <Vidcrunch />
  </div>
  );
}

export default App;
