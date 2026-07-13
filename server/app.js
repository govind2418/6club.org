const path = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const env = require('./config/env');
const { helmetMiddleware, globalLimiter } = require('./middleware/security.middleware');
const notFoundHandler = require('./middleware/notFound.middleware');
const errorHandler = require('./middleware/errorHandler.middleware');
const routes = require('./routes');

const app = express();

app.set('trust proxy', Number(env.TRUST_PROXY) || 1);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));
app.disable('x-powered-by');

app.use(compression());
app.use(helmetMiddleware);
app.use(globalLimiter);
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));
app.use(cookieParser());

if (!env.isProd) {
  app.use(morgan('dev'));
}

// Long-lived, immutable caching for hashed Vite build output.
app.use(
  '/build',
  express.static(path.join(__dirname, '..', 'public', 'build'), {
    maxAge: '1y',
    immutable: true,
    etag: false
  })
);

// Static assets that are not content-hashed (images, fonts) get a shorter, still-strong cache.
app.use(
  express.static(path.join(__dirname, '..', 'public'), {
    maxAge: '7d',
    etag: true,
    lastModified: true,
    setHeaders(res, filePath) {
      if (filePath.endsWith('.svg')) {
        res.setHeader('Content-Type', 'image/svg+xml');
      }
    }
  })
);

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  next();
});

app.use('/', routes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
