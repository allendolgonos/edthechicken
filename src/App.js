import './App.css';

function App() {
  return (
      <div className="App">
          <header>
              <div className="header-container">
                  <div className={"logo-container"}>
                      <a className={"logo"} href={"/"}>Ed The Chicken</a>
                  </div>
                  <nav className="nav-conatiner">
                      <a className={"trade"} href={"/"}>Trade (Coming Soon)</a>
                      <a href={"https://x.com/edthechickonsol"}>𝕏</a>
                  </nav>
              </div>
          </header>
          <section className={"main-section"}>
              <h1>Hello, I am Ed.</h1>
              <pre>
      {`
         ('v')
       <(   )>
         ^  ^
      `}
    </pre>
          </section>
      </div>
  );
}

export default App;
