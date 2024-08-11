import Menu from './components/Menu/Menu';
import './styles/App.scss';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import './App.css'

export default function App() {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // loader handler
    const loader = document.querySelector(".loader");

    loader.addEventListener('animationend', () => {
      setLoader(false);
    });
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <main id="main-container" className="App" data-scroll-container>
      <Menu />
    </main >
  );
}