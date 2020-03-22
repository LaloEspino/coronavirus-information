import React, { Component, Fragment } from 'react'
import Countries from './Countries.jsx'
import axios from './api.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cases: 0,
      deaths: 0,
      recovered: 0,
      countries: []
    }
  }

  componentDidMount() {
    console.log("didmount")

    axios.get('all')
      .then(response => {
        console.log(response)
        this.setState({
          cases: response.data.cases,
          deaths: response.data.deaths,
          recovered: response.data.recovered
        })
      })
      .catch(function (error) {
        console.log(error)
      })

    axios.get('countries')
      .then(response => {
        const countries = response.data
        console.log(countries)
        this.setState({
          countries: countries,
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="">
            COVID19 Tracker
          </a>
        </nav>

        <div className="container mt-3">

          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Casos
              <span className="badge badge-primary badge-pill">{this.state.cases}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Muertos
              <span className="badge badge-primary badge-pill">{this.state.deaths}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Recuperados
              <span className="badge badge-primary badge-pill">{this.state.recovered}</span>
            </li>
          </ul>

          <Countries countries={this.state.countries} />

        </div>
      </Fragment>
    )
  }
}

export default App
