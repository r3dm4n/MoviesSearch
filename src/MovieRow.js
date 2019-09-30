import React from 'react'

class MovieRow extends React.Component {
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
            {movie.title}
            <p>{movie.overview}</p>
          </td>
        </tr>
      </tbody>
    </table>
  }
}

export default MovieRow

