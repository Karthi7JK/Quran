import './App.css';
import { useState } from 'react';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import { BrowserRouter } from 'react-router-dom';
import { headerConfig, footerConfig } from './data/config.js';
import { RouteConfig } from './route-config.js';

function App() {

  const [headerConfiguration, setHeaderConfiguration] = useState(headerConfig);

  return (
    <div className="App">
      <Header config={{...headerConfiguration}} setConfig={setHeaderConfiguration}></Header>
        <section className="Panel">
          <BrowserRouter>
            <RouteConfig/>
          </BrowserRouter>
        </section>
      <Footer config={footerConfig}></Footer>
    </div>
  );
}
export default App;




