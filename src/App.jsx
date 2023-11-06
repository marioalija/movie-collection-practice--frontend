import "./App.css";

function Header() {
  <header>
    <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
  </header>;
}

function MoviesNew() {
  <div id="movies-new">
    <h1>New post</h1>
    <div>
      Title: <input type="text" />
    </div>
    <div>
      Genre: <input type="text" />
    </div>
    <div>
      Image: <input type="text" />
    </div>
    <div>
      <button>Add More Movies</button>
    </div>
  </div>;
}

function MoviesIndex() {
  <div id="movies-index">
    <h1>All Movies</h1>
  </div>;
}

function Footer() {
  <div>
    <footer>
      <p>Copyright 2023</p>
    </footer>
  </div>;
}

function Content() {
  return (
    <div>
      <MoviesNew />
      <MoviesIndex movies={movies} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
