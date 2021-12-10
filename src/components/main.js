import React from 'react';
import loadjs from 'loadjs';
import { Link } from 'react-router-dom';
/*import { loadOptions } from '@babel/core';
import Script from 'react-load-script';*/

import Header from './header';
import Footer from './footer';
import '../';

class Main extends React.Component {
  constructor(props) {
   super(props);
    this.state = {
                  name: '', 
                  country: '', 
                  weatherType: '', 
                  currentTemperature: '', 
                  atmosphericPressure: '', 
                  humidity: '', 
                  longitude: '', 
                  latitude: '', 
                  windSpeed: '',
                  cloud: '',
                  weatherDescription: '',
                  weatherIcon: '',
                  long: '',
                  lat: ''
                };


  }



  componentDidMount(){      
      navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
//      this.props.nlat = position.coords.latitude;
//      this.props.nlong = position.coords.longitude;
    });

//      console.log(position.coords.latitude+" "+nlog);
      var apiKey = '80447ab9f9baebb42e8685f955ec0615';
      var cityName = 'Owerri';

      function getIcon(gicon){
        var newIcon;
        var iicon = gicon;
        console.log(iicon);

        if(iicon === "01d" || iicon === "01n")
          newIcon = "clear-day";

        if(iicon === "02d" || iicon === "02n")
          newIcon = "partly-cloudy-day";

        if(iicon === "03d" || iicon === "03n")
          newIcon = "partly-cloudy-day";

        if(iicon === "04d" || iicon === "04n")
          newIcon = "partly-cloudy-day";

        if(iicon === "09d" || iicon === "09n")
          newIcon = "fog";

        if(iicon === "10d" || iicon === "10n")
          newIcon = "rain";

        if(iicon === "11d" || iicon === "11n")
          newIcon = "rain";

        if(iicon === "13d" || iicon === "13n")
          newIcon = "snow";

        if(iicon === "50d" || iicon === "50n")
          newIcon = "fog";
//        console.log(newIcon);

//        document.write(newIcon);
        document.getElementById("iconia").innerHTML = '<canvas id="rain" width="70" height="70" />';

      }




//      fetch('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid='+ this.props.match.params.name)
      fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+apiKey)
//      fetch('http://api.openweathermap.org/data/2.5/weather?lat='+this.props.nlat+'&lon='+this.props.nlong+'&appid='+apiKey)
       .then(response => {
         return response.json();
       }).then(result => {
         console.log(result);
         this.setState({
          name: result.name,
          country: result.sys.country,
          weatherType: result.weather[0].main,
          weatherDescription: result.weather[0].description.toUpperCase(),
          currentTemperature: Math.round(result.main.temp),
          atmosphericPressure: result.main.pressure,
          humidity: result.main.humidity,
          longitude: result.coord.lon,
          latitude: result.coord.lat,
          windSpeed: result.wind.speed,
          cloud: result.clouds.all,
          weatherIcon: getIcon(result.weather[0].icon),
         });
       });  

  }
	

	render() {
		return (
      <div>
      
      
                  <div>
                  <div className="main">	
        <h1>True Weather Widget</h1>
        <div className="w3_agile_main_grids">
          <div className="w3layouts_main_grid">
            <div className="w3layouts_main_grid_left">
              <h2>{this.state.name}, {this.state.country}</h2>
              <p style={{color: '#fff'}}>{this.state.weatherDescription}</p>
              <h3>Now </h3>
              <h4>{ this.state.currentTemperature - 273}<span>°c</span></h4>
            </div>
            <div className="w3layouts_main_grid_right">
              <p id="iconia">
              </p>

              <h3 style={{color: '#fff'}}>{this.state.weatherType} </h3>
              <div id="w3time" />
              <div className="w3layouts_date_year">
                <div id="w3date" />
              </div>
            </div>
            <div className="clear"> </div>
          </div>
          <div className="agileits_w3layouts_main_grid">
            <div className="agile_main_grid_left">
              <div className="wthree_main_grid_left_grid">
                  {/*
                <div className="w3ls_main_grid_left_grid1">
                  <div className="w3l_main_grid_left_grid1_left">
                    <h3>Partly Sunny</h3>
                    <p>3 <span>%</span></p>
                  </div>
                  <div className="w3l_main_grid_left_grid1_right">
                    <canvas id="partly-cloudy-day" width={45} height={45} />
                  </div>
                  <div className="clear"> </div>
                </div>
                  */}
                <div className="w3ls_main_grid_left_grid1">
                  <div className="w3l_main_grid_left_grid1_left">
                    <h3>Cloud</h3>
                    <p>{this.state.cloud} <span>%</span></p>
                  </div>
                  <div className="w3l_main_grid_left_grid1_right">
                    <canvas id="cloudy" width={45} height={45} />
                  </div>
                  <div className="clear"> </div>
                </div>
                <div className="w3ls_main_grid_left_grid1">
                  <div className="w3l_main_grid_left_grid1_left">
                    <h3>Wind</h3>
                    <p>{this.state.windSpeed} <span>m/s</span></p>
                  </div>
                  <div className="w3l_main_grid_left_grid1_right">
                    <canvas id="wind" width={45} height={45} />
                  </div>
                  <div className="clear"> </div>
                </div>
              </div>
            </div>
            <div className="w3_agileits_main_grid_right">
              <div className="agileinfo_main_grid_right_grid">
{/*                <div id="parentHorizontalTab">
                  <ul className="resp-tabs-list hor_1">
                    <li>Today</li>
                    <li>Week</li>
                    <li>Month</li> 
                    *
                  </ul>
                  <div className="resp-tabs-container hor_1">
                    <div className="w3_agileits_tabs">
                      <div className="w3_main_grid_right_grid1">
                        <div className="w3_main_grid_right_grid1_left">
                          <p>10 AM</p>
                        </div>
                        <div className="w3_main_grid_right_grid1_right">
                          <p>15<i>°c</i><span>Cloudy</span></p>
                        </div>
                        <div className="clear"> </div>
                      </div>
                      <div className="w3_main_grid_right_grid1">
                        <div className="w3_main_grid_right_grid1_left">
                          <p>11 AM</p>
                        </div>
                        <div className="w3_main_grid_right_grid1_right">
                          <p>16<i>°c</i><span>Clear</span></p>
                        </div>
                        <div className="clear"> </div>
                      </div>
                      <div className="w3_main_grid_right_grid1">
                        <div className="w3_main_grid_right_grid1_left">
                          <p>12 PM</p>
                        </div>
                        <div className="w3_main_grid_right_grid1_right">
                          <p>18<i>°c</i><span>Cear</span></p>
                        </div>
                        <div className="clear"> </div>
                      </div>
                      <div className="w3_main_grid_right_grid1">
                        <div className="w3_main_grid_right_grid1_left">
                          <p>2 PM</p>
                        </div>
                        <div className="w3_main_grid_right_grid1_right">
                          <p>12<i>°c</i><span>Partly Cloudy</span></p>
                        </div>
                        <div className="clear"> </div>
                      </div>
                    </div>
                    <div className="w3_agileits_tabs">
                      <div className="w3_main_grid_right_grid1">
                        <div className="w3_main_grid_right_grid1_left">
                          <p>Monday</p>
                        </div>
                        <div className="w3_main_grid_right_grid1_right">
                          <p>14<i>°c</i><span>Clear</span></p>
                        </div>
                        <div className="clear"> </div>
                      </div>
                      <div className="w3_main_grid_right_grid1">
                        <div className="w3_main_grid_right_grid1_left">
                          <p>Tuesday</p>
                        </div>
                        <div className="w3_main_grid_right_grid1_right">
                          <p>16<i>°c</i><span>Cloudy</span></p>
                        </div>
                        <div className="clear"> </div>
                      </div>
                      <div className="w3_main_grid_right_grid1">
                        <div className="w3_main_grid_right_grid1_left">
                          <p>Wednesday</p>
                        </div>
                        <div className="w3_main_grid_right_grid1_right">
                          <p>11<i>°c</i><span>Rainy</span></p>
                        </div>
                        <div className="clear"> </div>
                      </div>
                      <div className="w3_main_grid_right_grid1">
                        <div className="w3_main_grid_right_grid1_left">
                          <p>Thursday</p>
                        </div>
                        <div className="w3_main_grid_right_grid1_right">
                          <p>18<i>°c</i><span>Sunny</span></p>
                        </div>
                        <div className="clear"> </div>
                      </div>
                    </div>
                    {/*
                    <div className="w3_agileits_tabs">
                      <div className="w3_main_grid_right_grid1">
                        <div className="w3_main_grid_right_grid1_left">
                          <p>January</p>
                        </div>
                        <div className="w3_main_grid_right_grid1_right">
                          <p>18<i>°c</i><span>Cloudy</span></p>
                        </div>
                        <div className="clear"> </div>
                      </div>
                      <div className="w3_main_grid_right_grid1">
                        <div className="w3_main_grid_right_grid1_left">
                          <p>February</p>
                        </div>
                        <div className="w3_main_grid_right_grid1_right">
                          <p>14<i>°c</i><span>Clear</span></p>
                        </div>
                        <div className="clear"> </div>
                      </div>
                      <div className="w3_main_grid_right_grid1">
                        <div className="w3_main_grid_right_grid1_left">
                          <p>March</p>
                        </div>
                        <div className="w3_main_grid_right_grid1_right">
                          <p>18<i>°c</i><span>Cear</span></p>
                        </div>
                        <div className="clear"> </div>
                      </div>
                      <div className="w3_main_grid_right_grid1">
                        <div className="w3_main_grid_right_grid1_left">
                          <p>April</p>
                        </div>
                        <div className="w3_main_grid_right_grid1_right">
                          <p>12<i>°c</i><span>Partly Cloudy</span></p>
                        </div>
                        <div className="clear"> </div>
                      </div>
                    </div>
                  </div>
                </div>
                  */}
              </div>
            </div>
            <div className="clear"> </div>
          </div>
        </div>
      </div>
      
                </div>

            <Footer />
            </div>         
		)
  }

  
}



export default Main;