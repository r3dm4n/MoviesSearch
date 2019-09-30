import React from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {}

    this.performSearch()
  }

  performSearch() {
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=e23be4d2eb659841da6942b234b925a2&query=marvel"

    $.ajax({
      url: urlString,
      success: (searchResults => {
        const results = searchResults.results
        var movieRows = []
        results.forEach(movie => {
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
          console.log(movie.title) 
        })

        this.setState({rows: movieRows})
      }),
      error: (xhr, status, err) => {
          console.log('Failed to fetch data', err)
      }
    })
  }

  render() {
    return (
      <div>

        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="Logo" width="50" src="logo.svg" ></img>
              </td>
              <td width="8"></td>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>


        <input style={{
          fontSize: 24,
          display: "block",
          width: "100%",
          padding: 8,
          paddingLeft: 16
        }} placeholder="Enter search term"></input>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
