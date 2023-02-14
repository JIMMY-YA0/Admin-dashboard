# Installation

## -Install MongoDB onto your computer

# Installation

- Install MongoDB onto your computer: [Installation Instructions](https://www.mongodb.com/docs/manual/administration/install-community/)
- Add a .env file to the [`server`](/server/) directory. Inside add:

```env
MONGO_URL = <url-to-your-mongo-db>
PORT=8000
```

- Install all the dependencies using:

```z
npm i
```

- Uncomment the part in [`server/server.js`](server/server.js) that talks about importing data. After the first run of the server, make sure to re-comment this.  
  https://github.com/JIMMY-YA0/Admin-dashboard/blob/main/server/server.js
- Move into your client directory and install all of their dependencies:

```zsh
npm i
```

- Add a .env.local file to the [`client`](client/) directory. Inside add:

```env
REACT_APP_BASE_URL=http://localhost:8000
```
