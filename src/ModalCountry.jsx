import React, { Component } from "react";

class ModalCountry extends Component {
  render() {
    return (
      <div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {this.props.country.country}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Casos: {this.props.country.cases}</p>
                <p>Casos de hoy: {this.props.country.todayCases}</p>
                <p>Muertes: {this.props.country.deaths}</p>
                <p>Muertes de hoy: {this.props.country.todayDeaths}</p>
                <p>Recuperados: {this.props.country.recovered}</p>
                <p>Activos: {this.props.country.active}</p>
                <p>Críticos: {this.props.country.critical}</p>
                <p>Casos por millón: {this.props.country.casesPerOneMillion}</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalCountry;
