import logo from './logo.svg';
import appIcon from './appicon.png'
import './App.css';
import { RouteConfig } from './routeConfig';
import {InterviewContainer} from './interview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p className='header-name'>
         <img className='app-img' src={appIcon}></img>
         <span className='heading'> Task Manager</span>
       </p>
      </header>
      <section className="app-content">
        <InterviewContainer/>
      </section>
    </div>
  );
}

export default App;
