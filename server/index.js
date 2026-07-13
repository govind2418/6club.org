const app = require('./app');
const env = require('./config/env');

app.listen(env.PORT, () => {
  console.log(`BDG Win server running on http://localhost:${env.PORT} [${env.NODE_ENV}]`);
});
