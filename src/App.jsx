
import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer/Footer';
import { Button } from './components/Button/Button';
// A ordem da importação determina o valor final
// - precedência das classes do CSS

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Button/>
      <Footer/>
    </>
  )
}

export default App
