# Dependencies

Backend is dependent on a MongoDB. Start this in docker-compose with:

```bash
docker-compose up
```

This will start MongoDb on port `27017` and Mongo Express (db client) on port `8081`

# Development

## Backend

To start backend development run:

```bash
node index.js
```

Runs webserver on `http://localhost:3000`  
Manual restart is needed on change.

## Frontend

To start frontend run:

```bash
cd frontend
npm start
```

Opens browser on `http://localhost:3001`
