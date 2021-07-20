[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]

<br />
<p align="center">

  <h1 align="center">All Books</h1>

  <h3 align="center">
    Browse among t.
  </h3>
</p>



<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>


## About The Project

![Product Name Screen Shot](build/img/Screenshot.PNG)

This is a simple website that displays data about the air quality in a specific city or location. It fetches data from [AQICN](aqicn.org) through their [API](https://aqicn.org/api/).
Data can be retrieved through geolocation or manual input of a city name. When geolocation is used, data of the closest station are shown. 
A map made with [Leaflet](https://leafletjs.com/) is also displayed with a marker placed in the station location. 

This project is deployed and accessible at [air-quality-now-rs.netlify.app](https://air-quality-now-rs.netlify.app/). 
If you prefer to run a local copy please follow the steps below.

### Built With

* [Leaflet](https://leafletjs.com/)
* [Axios](https://github.com/axios/axios)
* [Lodash](https://lodash.com/)


## Getting Started

Netlify functions have been used in this project for the deployment on Netlify servers, as this permits to hide the API keys easily and safely. 

Therefore the `build` version uses netlify functions saved in the netlify folder. To run a local copy in your computer you can follow the steps below that don't involve the use of netlify functions but it only use the `index-dev.js` file and `.env` file.


### Prerequisites
Install the latest version of `npm`

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/srossella/air-quality.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Get a free API key at [Air Quality Open Data Platform](https://aqicn.org/data-platform/token/#/)

4. Create a .env file in the root folder with just one line:

   ```sh
   API_SECRET = 'your API key here'
   ```
5. Run development version 

   ```sh
   npm run dev
   ```


## Usage

Search a specific location through the input box or through geolocation. 

Data displayed, when available, include:

* Air Quality Index 
* Comment on the level of the AQI like good, moderate, unhealthy, hazardous etc. taken from [AQICN](aqicn.org). 
* PM10
* PM2.5
* NO2
* O3


## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Rossella Salaro - rossella.salaro@gmail.com

Project Link: [Air Quality](https://github.com/srossella/air-quality)

## Acknowledgements

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Air Pollution: Real-time Air Quality Index (AQI)](https://aqicn.org/)
* [Netlify](https://netlify.com)

[contributors-shield]: https://img.shields.io/github/contributors/srossella/air-quality?style=for-the-badge
[contributors-url]: https://github.com/srossella/air-quality/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/srossella/air-quality?style=for-the-badge
[forks-url]: https://github.com/srossella/air-quality/network/members
[stars-shield]: https://img.shields.io/github/stars/srossella/air-quality?style=for-the-badge
[stars-url]: https://github.com/srossella/air-quality/stargazers
[issues-shield]: https://img.shields.io/github/issues/srossella/air-quality?style=for-the-badge
[issues-url]: https://github.com/srossella/air-quality/issues
[license-shield]: https://img.shields.io/github/license/srossella/air-quality?style=for-the-badge
[license-url]: https://github.com/srossella/air-quality/blob/main/LICENSE.txt



