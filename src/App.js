import logo from './logo.svg';
import appIcon from './appicon.png'
import './App.css';
import { RouteConfig } from './routeConfig';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p className='header-name'>
         <img class='app-img' src={appIcon}></img>
         <span class='heading'> Task Manager</span>
       </p>
      </header>
      <section class="app-content">
        <RouteConfig/>
      </section>
    </div>
  );
}

export default App;
