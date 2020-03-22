// src/Countries.jsx

import React, { Component } from "react";
import ModalCountry from "./ModalCountry";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      country: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick = country => {
    this.setState({ country: country });
  };

  render() {
    return (
      <div>
        <center>
          <h1>Paises</h1>
        </center>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              Buscar
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Pais"
            aria-label="Pais"
            aria-describedby="basic-addon1"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>

        {this.props.countries
          .filter(country =>
            this.state.value === ""
              ? country
              : country.country.includes(this.state.value)
          )
          .map(country => (
            <div
              className="card"
              key={country.country}
              onClick={e => this.handleClick(country)}
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <div className="card-body">
                <h5 className="card-title">{country.country}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Casos: {country.cases}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Muertos: {country.deaths}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Recuperados: {country.recovered}
                </h6>
              </div>
            </div>
          ))}
        <ModalCountry country={this.state.country} />
      </div>
    );
  }
}

export default Countries;
