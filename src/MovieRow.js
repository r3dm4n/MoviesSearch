import React from 'react'

class MovieRow extends React.Component {

  viewMovie() {
    console.log(this.props.movie.title)
  const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    const movie = this.props.movie
    const basePosterUrl = "https://image.tmdb.org/t/p/w370_and_h556_bestv2/"

    return <table key={movie.id}>
      <tbody>
        <tr>
          <td>
            <img alt="poster" width="120" src={basePosterUrl.concat(movie.poster_path)}></img>
          </td>

          <td>
            <h3>{movie.title}</h3>
            
            <p>{movie.overview}</p>
            <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
          </td>
        </tr>
      </tbody>
    </table>
  }
}

export default MovieRow

