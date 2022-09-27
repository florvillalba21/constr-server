const express = require('express') 
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
require('ejs');
const dbConnect = require('./db/db'); 

const app = express(); 
dbConnect();

// Configuración de variables de entorno
const port = process.env.PORT || 4000;

// Para que el servidor comprenda datos con formato json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Otros middlwares
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());


//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

// Motor de plantillas ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Importando rutas
app.use(require('./routes/tasks.routes')); // Importando rutas

app.listen(port, () => console.log(`Servidor escuchando en http://127.0.0.1:${port}`));
