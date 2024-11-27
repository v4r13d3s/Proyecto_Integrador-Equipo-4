const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

//Configuracion de swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Store', //Titulo de la documentacion 
            version: '1.0.0',
            description: 'Documentacion de API de Gestion de catalagos'
        },
        servers: [
            {
                url: "https://capiteam.up.railway.app/" ,
            },
        ],
    },
    apis: ['./routes/*.js'], // Rutas donde estas tus archivos de rutas para generar la documentacion automatica
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve,
        swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;