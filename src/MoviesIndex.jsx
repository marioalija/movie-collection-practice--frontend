export function MoviesIndex(props) {
  console.log(props);

  return (
    <div id="movies-index">
      <h1>All Movies</h1>
      {/* loop of defined recipe data props from the parent component */}
      <div className="movies">
        {props.movies.map((movie) => (
          <div key={movie.id} className="movie">
            <p>-{movie.id}-</p>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt="" />
            <h3>{movie.body}</h3>
            <div>
              <a href="https://www.moviefone.com/movies/" target="_blank">
                <button>More details</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
