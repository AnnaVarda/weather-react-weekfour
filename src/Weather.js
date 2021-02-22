import React from "react";
import axios from "axios";
import "./Weather";
import "./Weather.css";


export default function Weather() {
  let weatherData = {
    city: "Athens",
    temperature: 19,
    date: "Sunday 11:00",
    description: "Clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
    humidity: 70,
    wind: 2
  };

  return (
    <div className="Weather">
      <body className="bordered p-5">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-5">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter a city"
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="submit"
                      value="Search"
                      className="form-control btn btn-primary"
                    />
                  </div>
                </div>
              </form>

              <button id="current-location">Current Location</button>

              <h1 id="city">{weatherData.city}</h1>
              <p id="today">{weatherData.date}</p>
              <p id="discription">{weatherData.description}</p>

              <div className="row">
                <div className="col-6">
                  <div className="float-left">
                    <p className="temperature">
                      <img
                        src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                        alt="Clear"
                        id="icon"
                      />

                      <span id="current-temperature">
                        {" "}
                        {weatherData.temperature}{" "}
                      </span>

                      <span className="tempunits">
                        <a className="degrees" href="/" id="celsius-link">
                          °C
                        </a>{" "}
                        |
                        <a className="fahrenheit" href="/" id="fahrenheit-link">
                          °F
                        </a>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="col-6">
                  <ul>
                    <li>Humidity: {weatherData.humidity}%</li>

                    <li>Wind: {weatherData.wind} km/h</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sources">
          Hosted by
          <a href="https://www.netlify.com">Netlify</a>
          <br />
          <a href="https://github.com/AnnaVarda/my-awesome-weatherapp">
            Open source code
          </a>{" "}
          by Anna V.
        </div>
        <script src="src/index.js"></script>
      </body>
    </div>
  );
}

