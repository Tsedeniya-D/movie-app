import Navbar from './components/Navbar';
import MovieContent from './components/MovieContent';
import HeroSection from './components/HeroSection';
import MovieSlider from './components/MovieSlider';


function App(){
  return (
    <div className="min-h-screen">
      <Navbar/>
      <main>
         <MovieContent />
      </main>
      <HeroSection/>
      <MovieSlider/>
    </div>
  );
}

export default App;