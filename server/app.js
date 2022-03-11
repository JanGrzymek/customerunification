const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const routes = require('./routes/routes');
const cors = require('cors');

const port = process.env.PORT || 3000;

const { notFound, errorHandler } = require('./middleware/errorHandler');

const bodyParser = require('body-parser');

require('colors');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));
app.use(bodyParser.json({ limit: '5mb' }));

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());

app.use(express.json());

app.use(cors());

app.use('/', routes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);
