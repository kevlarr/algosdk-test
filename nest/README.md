# Node algosdk/purestake

Simple NestJS server exposing a `GET /status` endpoint for a health-check using `algosdk` and purestake.io testnet.

Assumes `node` and `npm` are already installed.

## Setup

Install packages:

```bash
npm install
```

## Run

Start the server.

```bash
npm start
```

Visit http://localhost:3000/status in browser, with `curl`, etc.