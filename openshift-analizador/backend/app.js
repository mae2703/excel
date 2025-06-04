const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const routes = require('./routes');
const cors = require('cors');

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Maylon Servidor corriendo en puerto ${PORT}`));
