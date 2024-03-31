<a href="https://github.com/ShivaBhattacharjee/Trim">
<p align="center">
  <img src="https://github.com/ShivaBhattacharjee/Trim/assets/95211406/660cb529-0898-409d-bf8c-5b4c38d3bd42" height="180px"/>
  </a>
<br/>
  <h3 align="center">Trim</h3>




<div align="center" >

![NextJs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![GitHub repo size](https://img.shields.io/github/repo-size/shivabhattacharjee/Trim)

  </div>

  <p align="center">
    Trim: Shorten Your Urls
    <br/>
    <br/>
    <a href="https://trim.theshiva.xyz/">View Demo</a>
    .
    <a href="https://github.com/ShivaBhattacharjee/trim/issues">Report Bug</a>
    .
    <a href="https://github.com/ShivaBhattacharjee/trim/issues">Request Feature</a>
  </p>
</p>



## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Deploy to production](#deploy-to-production)
  - [Run prisma studio](#run-prisma-studio)
- [Docker](#docker)
- [Host your own](#host-your-own)
- [Contributing](#contributing)
  - [Creating A Pull Request](#creating-a-pull-request)
- [Raising an issue](#raising-an-issue)
- [Code of conduct](#code-of-conduct)
- [License](#license)
- [Authors](#authors)

## About The Project
![Screenshot from 2024-03-30 11-30-35](https://github.com/ShivaBhattacharjee/Trim/assets/95211406/8f3e57c1-7fd2-473e-a1bd-427ea1c981c3)

![Screenshot from 2024-03-30 11-31-56](https://github.com/ShivaBhattacharjee/Trim/assets/95211406/74fef03e-b763-4e98-aeea-bd65fd901e20)

Trim is a sleek and efficient URL shortener project developed using Next.js. With Trim, users can easily shorten lengthy URLs into concise, manageable links, making sharing and distributing web addresses more convenient. The project incorporates Next.js's  for server-side rendering. Trim prioritizes simplicity and effectiveness, offering a streamlined interface for users to swiftly generate shortened URLs with just a few clicks. Whether for social media sharing, email campaigns, or any other online communication, Trim empowers users to effortlessly shorten URLs and streamline their online presence.




## Built With

Trim is built using NextJs 

* [Bun](https://bun.sh/)
* [NextJS](https://nextjs.org)
* [TailwindCss](https://tailwindcss.com/)
* [Prisma](https://www.prisma.io/)
* [PostgressSql](https://www.postgresql.org/)



## Getting Started


### Prerequisites

<a href="https://git-scm.com/downloads" >Git</a> is a distributed version control system used for software development. It allows multiple developers to work on the same codebase simultaneously, keeping track of changes and managing versions. It also enables users to revert changes and collaborate more effectively.

<a href="https://bun.sh/">Bun</a> is a JavaScript runtime, package manager, test runner bundler built from scratch using the Zig programming language. It was designed by Jarred Sumner as a drop-in replacement for Node.js. Bun uses JavaScriptCore as the JavaScript engine, unlike Node.js and Deno, which both use V8.

<a href="https://www.postgresql.org/">postgresql</a> also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.

<a href="https://www.docker.com/">Docker</a>Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. It was first released in 2013 and is developed by Docker, Inc.

### Installation


<h3> This project utilises <a href="https://bun.sh">Bun</a>. Install it before running locally</h3>

```bash
git clone https://github.com/ShivaBhattacharjee/Trim
```
```bash
cd Trim
```
```bash
cp .env.example .env
```

<h3>Database can be started by docker compose by</h3>

```bash
docker compose up
```

<h3>Fill the required fields inside the .env before starting the server ,only if you didnt start the database by docker compose</h3>

```bash
bun install
```
```bash
bun migrate:dev
```
```bash
bun dev
```

This will start the development server  at http://localhost:3000/

### Deploy to production

```bash
bun build:production
```

### Run prisma studio

```bash
bun prisma:studio
```


## Docker 
Image will be available soon

## Host your own
* ## Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FShivaBhattacharjee%2FTrim)
<br/>
<br/>

* ## Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ShivaBhattacharjee/Trim)
<br/>
<br/>

* ## Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/ShivaBhattacharjee/Trim)

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/ShivaBhattacharjee/Trim/issues) to discuss it

* Please make sure you check your spelling and grammar.

### Creating A Pull Request

Wanna contribute to Quibble ?

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/FeatureName`)
3. Commit your Changes (`git commit -m 'Add some FeatureName'`)
4. Push to the Branch (`git push origin feature/FeatureName`)
5. Open a Pull Request


## Raising an issue

If you're experiencing any problems with Quibble, please be sure to review our [issue template](https://github.com/ShivaBhattacharjee/Trim/tree/main/.github/ISSUE_TEMPLATE) before opening a new issue. The template includes a list of questions and prompts that will help us better understand the issue you're experiencing, and it will ensure that we have all of the necessary information to investigate the problem.

We kindly ask that you provide as much detail as possible when submitting an issue, including steps to reproduce the problem, any error messages that you have seen, and any other relevant information. This will help us to identify and fix the issue more quickly.

Thank you for your cooperation, and we look forward to hearing from you!

## Code of conduct

Developers are requested to go through our <a href="https://github.com/ShivaBhattacharjee/Trim/blob/main/CODE_OF_CONDUCT.md">code of conduct</a> thoroughly to maintain a peaceful environment within our project.

## License

Distributed under the Apache License 2.0 . See [LICENSE](https://github.com/ShivaBhattacharjee/Trim/blob/main/LICENSE) for more information.


## Authors

* **Shiva Bhattacharjee** - [Shiva Bhattacharjee](https://github.com/ShivaBhattacharjee) - *Trim*
