import Home from "./components/Home";
import Hotdeals from "./components/Hotdeals";
import Menu from "./components/Menu";
import Navebare from "./components/Navebare";
import Review from "./components/Review";
import Spicialmenu from "./components/Spicialmenu";
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navebare />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="menu">
          <Menu />
        </div>
        <div id="deals">
          <Hotdeals />
        </div>
        <div id="spicial">
          <Spicialmenu />
        </div>
        <div id="review">
          <Review/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
