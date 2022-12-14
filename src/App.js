import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="link-section">
        <div className="link-buttons">
          <button>
            <a href="https://twitter.com/AyobanjoFunsho" id="twitter">
              Twitter Link
            </a>
          </button>
          <button>
            <a href="https://training.zuri.team/" id="btn__zuri">
              Zuri Team
            </a>
          </button>
          <button>
            <a href="http://books.zuri.team" id="books">
              Zuri Books
            </a>
          </button>
          <button>
            <a
              href="https://books.zuri.team/python-for-beginners?ref_id=<funshoayobanjo>"
              id="book__python"
            >
              Python Books
            </a>
          </button>
          <button>
            <a href="https://background.zuri.team/" id="pitch">
              Background check for Coders
            </a>
          </button>
          <button>
            <a href="https://books.zuri.team/design-rules" id="book__design">
              Design Books
            </a>
          </button>
          <button>
            <a href="https://books.zuri.team/design-rules" id="slack">
              Jesudarasimi Funsho
            </a>
          </button>
        </div>
      </div>
      <div className="social_links">
        <div className="wrapper">
          <img src="slack.svg" />
          <img src="Icon.svg" />
        </div>
      </div>
      <footer className="footer">
        <img src="Zuri.Internship_Logo.svg" alt="Zuri Internship Logo" />
        <img src="Footer text.svg" alt="HNG Internship Text" />
        <img src="I4G.svg" alt="I4G Logo" />
      </footer>
    </div>
  );
}

export default App;
