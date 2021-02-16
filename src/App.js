import './Styles/_style.scss';
import routes from './routes';

import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      {routes}
    </div>
  );
}

export default App;
