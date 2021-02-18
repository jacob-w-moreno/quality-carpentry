import './Styles/_style.scss';
import routes from './routes';

import Header from './Components/Header';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Header/>
      {routes}
    </div>
  );
}

export default App;
