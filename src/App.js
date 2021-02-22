import './Styles/_style.scss';
import routes from './routes';

import Header from './Components/HeaderFooter/Header';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/HeaderFooter/Footer';

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Header/>
      {routes}
      <Footer/>
    </div>
  );
}

export default App;
