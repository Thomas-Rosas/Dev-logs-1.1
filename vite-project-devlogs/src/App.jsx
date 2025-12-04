import "./App.css";

function App() {
  return (
    <div>
      <div className="hero">Thomas | Cyber Security</div>

      <nav className="navbar">
        <ul>
          <li><a href="#Home">Home</a></li>
          <li>
            <a
              href="https://www.linkedin.com/in/thomas-rosas-30a5b1311/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>

      <div className="container">
        <aside className="sidebar">
          <img
            src="https://wwf.ca/wp-content/uploads/2025/09/Original_WW1113656.jpg"
            alt="Bear"
            height="100"
            width="250"
            className="profile"
          />

          <section>
            <h2>About Me</h2>
            <p>Hello, I am in Cyber Security.</p>
          </section>
        </aside>

        <main className="main-content">
          <h2 id="main-title">My DevLog</h2>

          <div id="dev-log">
            <h1>Welcome to my Development Log</h1>
            <h3>10-9-2025</h3>
            <br />
            <h3>Entry Number: 1</h3>
            <br />
            <h3>Thomas Rosas</h3>
            <p>Hey all, I am Alexander Hamilton. Just you wait</p>
            <br />
            <logCard date="2025-03-11" entryNumber="2">
              <div className="log-card">
                <span className="log-date">11-3-2025</span>
                <div className="log-entry-number">Entry Number: 2</div>
                <p>This is my second entry in the dev log. I hope this is done right and I don't break my website.</p>
              </div>
            </logCard>
            <logCard date="2025-06-11" entryNumber="3">
              <div className="log-card">
                <span className="log-date">11-6-2025</span>
                <div className="log-entry-number">Entry Number: 3</div>
                <p>I am adding another entry and changed up the logCard code a bit and learned why the change was better. I also added some css code to make it more consistent with my other entries.</p>
              </div>
            </logCard>
            <logCard date="2025-25-11" entryNumber="4">
              <div className="log-card">
                <span className="log-date">11-25-2025</span>
                <div className="log-entry-number">Entry Number: 4</div>
                <p>I have added prisma to my project and set up a local SQL Server database to store my dev log entries. This will help me manage and retrieve my logs more efficiently.</p>
              </div>
            </logCard>
          </div>
        </main>
      </div>
    </div>
  );
}
export default App;