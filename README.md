[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]

<br />
<p align="center">

  <h1 align="center">All Books</h1>

  <h3 align="center">
     Browse the largest books collection of the web.
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

![Product Name Screen Shot](public/img/screenshot.PNG)

This is a simple website made with ReactJS and some related libraries that displays data about books retrieved from the largest books collection on the web, Google Books. It fetches data from [Google Books](https://books.google.it/) through their [API](https://developers.google.com/books).


This project is deployed and accessible at [all-books-rs.netlify.app](https://all-books-rs.netlify.app/). 
If you prefer to run a local copy please follow the steps below.

### Built With

* [ReactJS](https://reactjs.org/)
* [Axios](https://github.com/axios/axios)
* [Material-UI](https://material-ui.com/)
* [React Router](https://reactrouter.com/)

## Getting Started 

To run a local copy in your computer please follow the steps below.


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

3. Get a free API key at [Google Cloud Platform](https://console.developers.google.com/apis/credentials). More info on the API [here](https://developers.google.com/books/docs/v1/getting_started).

4. Rename the file .env.example to .env in the root folder and insert your key:

   ```sh
   REACT_APP_APIKEY = 'your API key here'
   ```

5. In the source folder delete App.js and rename App-dev.js as App.js. 
This needs to be done because Netlify functions have been used for the deployment on Netlify servers.


6. Run development version 

   ```sh
   npm start
   ```


## Usage

Start typing a title or author in the input bar and results will show up straight away. 
By clicking Learn More a new page made with React Router will open up with additional info about the book. 

Data displayed, when available, include:

* Title
* Authors
* Date
* Description
* Cover

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Rossella Salaro - rossella.salaro@gmail.com

Project Link: [All Books](https://github.com/srossella/books)

## Acknowledgements

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Google Books](https://developers.google.com/books/docs/v1/getting_started)
* [Netlify](https://netlify.com)
* [Start2impact](http://start2impact.com/)

[contributors-shield]: https://img.shields.io/github/contributors/srossella/books?style=for-the-badge
[contributors-url]: https://github.com/srossella/books/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/srossella/books?style=for-the-badge
[forks-url]: https://github.com/srossella/books/network/members
[stars-shield]: https://img.shields.io/github/stars/srossella/books?style=for-the-badge
[stars-url]: https://github.com/srossella/books/stargazers
[issues-shield]: https://img.shields.io/github/issues/srossella/books?style=for-the-badge
[issues-url]: https://github.com/srossella/books/issues
[license-shield]: https://img.shields.io/github/license/srossella/books?style=for-the-badge
[license-url]: https://github.com/srossella/books/blob/main/LICENSE.txt



