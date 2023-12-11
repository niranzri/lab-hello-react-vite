import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import ironhackLogo from './assets/ironhackLogo.png'
import menuTop from './assets/menuTop.png'

import './App.css'
import './index.css'

function App() {

  return (
    <div>
      <div className="topContainer"> 
        <img src={ironhackLogo} alt="ironhack logo" />
        <img src={menuTop} alt="menu icon" />
      </div>
      <div className="middleContainer">
        <div className="column">
          <h1> Say hello to ReactJS </h1>
          <p> You will learn how to use the most popular frontend library, 
            and become a super Ninja developer.</p>
          <button type="button"> Awesome! </button>
        </div>
        <div className="column"></div>
      </div>
      <div className="bottomContainer"> 
        <div>
          <img src={icon1} alt="icon1" />
          <h2> Declarative </h2>
          <p> React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon2} alt="icon2" />
          <h2> Components </h2>
          <p> Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3} alt="icon3" />
          <h2> Single-Way </h2>
          <p> A set of immutable values are passed to the components.</p>
        </div>
        <div>
          <img src={icon4} alt="icon4" />
          <h2> JSX </h2>
          <p> Statically-typed, designed to run on modern broswers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
