export function MoviesNew() {
  return (
    <div id="movies-new">
      <h1>New post</h1>
      <div className="title">
        Title: <input type="text" />
      </div>
      <div className="title">
        Genre: <input type="text" />
      </div>
      <div className="title">
        Image: <input type="text" />
      </div>
      <div>
        <button>Add More Movies</button>
      </div>
    </div>
  );
}
