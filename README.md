<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/MK-DlR/mini-message-board">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Mini Message Board</h3>

  <p align="center">
    Full-stack mini message board where anyone can post and read messages. Built with Express and EJS for server-side rendering, with PostgreSQL for message persistence.
    <br />
    <a href="https://github.com/MK-DlR/mini-message-board"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://mini-message-board-rp5n.onrender.com/">View Demo</a>
    &middot;
    <a href="https://github.com/MK-DlR/mini-message-board/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/MK-DlR/mini-message-board/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
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
        <li><a href="#notes">Notes</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#how-to-use-the-app">How to Use the App</a></li>
        <li><a href="#default-setup-behavior">Default Setup Behavior</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Mini Message Board Screen Shot][product-screenshot]](https://mini-message-board-rp5n.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Express]][Express-url]
- [![EJS]][EJS-url]
- [![Javascript][Javascript]][Javascript-url]
- [![Node.js]][Node-url]
- [![Postgres]][Postgres-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js (recommended v22+)
- npm
- [Neon](https://neon.tech) account (free tier works)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/MK-DlR/mini-message-board.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Set up environment variables
   ```sh
   cp .env.example .env
   ```
   Open `.env` and fill in your `DATABASE_URL`.
4. Set up the database
   Run the following command, replacing `your_database_url` with your Neon connection string:
   ```sh
   psql your_database_url -c "CREATE TABLE messages (id SERIAL PRIMARY KEY, title VARCHAR(200) NOT NULL, text VARCHAR(500) NOT NULL, username VARCHAR(100) NOT NULL, added TIMESTAMP DEFAULT CURRENT_TIMESTAMP);"
   ```
5. Start the application
   ```sh
   node app.js
   ```
6. Open the app at `http://localhost:3000`

### Notes

- Backend: Express + PostgreSQL + EJS
- Database: Neon (cloud PostgreSQL)
- No authentication required — anyone can post messages

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This is a simple message board where anyone can read and post messages with no account required.

### How to Use the App

1. Open the app at http://localhost:3000 or visit the [live demo](https://mini-message-board-rp5n.onrender.com/)
2. Browse existing messages on the home page
3. Click the new message button to post a message
4. Enter a username, title, and message text and submit

### Default Setup Behavior

- No messages are created by default
- Anyone can post without registering or logging in

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/MK-DlR/mini-message-board/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

As this is a student project created for The Odin Project curriculum, it is currently not open for contributions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/MK-DlR/mini-message-board/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MK-DlR/mini-message-board" alt="contrib.rocks image" />
</a>

<!-- CONTACT -->

## Contact

Adrien Newman - [@MK_DlR](https://twitter.com/MK_DlR) - adriennewman92@gmail.com

Project Link: [Repository](https://github.com/MK-DlR/mini-message-board) & [Live Demo](https://mini-message-board-rp5n.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com/dashboard)
- [Font Awesome](https://fontawesome.com/)
- [Post Box Icon](https://icons8.com/icon/53905/post-box) by [Icons8](https://icons8.com/)
- [Favicon Converter](https://favicon.io/favicon-converter/)
- [Othneil Drew's Best README Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="center"><img src="images/throne.gif" alt="Majima on a throne, speaking to the viewer"></p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/MK-DlR/mini-message-board.svg?style=for-the-badge
[contributors-url]: https://github.com/MK-DlR/mini-message-board/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/MK-DlR/mini-message-board.svg?style=for-the-badge
[forks-url]: https://github.com/MK-DlR/mini-message-board/network/members
[stars-shield]: https://img.shields.io/github/stars/MK-DlR/mini-message-board.svg?style=for-the-badge
[stars-url]: https://github.com/MK-DlR/mini-message-board/stargazers
[issues-shield]: https://img.shields.io/github/issues/MK-DlR/mini-message-board.svg?style=for-the-badge
[issues-url]: https://github.com/MK-DlR/mini-message-board/issues
[license-shield]: https://img.shields.io/github/license/MK-DlR/mini-message-board.svg?style=for-the-badge
[license-url]: https://github.com/MK-DlR/mini-message-board/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/adrien-newman
[product-screenshot]: images/screenshot.png

<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->

[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[EJS]: https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=fff
[EJS-url]: https://ejs.co/
[Express]: https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/en/
[Javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Postgres]: https://img.shields.io/badge/Postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/
[Prisma]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[React-router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React-router-url]: https://reactrouter.com/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=fff
[Vite-url]: https://vite.dev/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
