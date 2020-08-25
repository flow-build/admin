<h1 align="center" style="border-bottom: none;">FlowBuild Cockpit Admin</h1>
<h3 align="center">
Frontend for the Cockpit API
</h3>


## Version
```
node v12.14.1 (lts)
npm v6.14.5
```

## Running

To start the project, make sure to have a cockpit server running and the environment variables set.

To run the development server, type on a terminal:

```
npm run start
```

## Environment Variables

The following environment variables must be set in a file such as `.env`:

- `API_URL`: URL for the Cockpit server
- `TOKEN_ROUTE`: Route to GET the anonymous token. Must start with `/`
- `GOOGLE_CLIENT_ID`: Client ID gotten from Google Developers Dashboard

Example:
```
API_URL='http://localhost:5000'
TOKEN_ROUTE='/token'
GOOGLE_CLIENT_ID='YOUR_ID_HERE.apps.googleusercontent.com'
```
