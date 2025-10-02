# Simple Node.js App (Basic Auth)


## Local usage


1. Copy `.env.example` to `.env` and fill real values.
2. Install deps: `npm install`
3. Run locally: `npm start`
4. Visit `http://localhost:3000/` for Hello, world!
5. Visit `http://localhost:3000/secret` and provide Basic Auth (username/password from `.env`).


## Docker


Build image locally:


```bash
docker build -t my-basic-app:latest .
