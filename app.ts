import express from "express";
import morgan from 'morgan';
import { glob } from 'glob'
import path from "path";
import { config } from "dotenv";
import { globalErrorHandler } from "./src/commons/exceptions";

config();

const
    controllerPrefix = '.controller.ts',
    controllersPath = glob.sync(`./src/controllers/*${controllerPrefix}`),
    port = process.env.PORT || 3000,
    app = express();


process.env.NODE_ENV === 'dev' && app.use(morgan('dev'));


/**
 * Dynamically add application routes
 * @param { string[] } controllersPath 
 */
const routeLoader = async (controllersPath: string[]) => {
    for (const file of controllersPath) {
        console.log('Adding route for controller: ' + path.basename(file));
        const controller = await import(path.resolve(file));
        app.use('/api' + controller.default.baseUrl, controller.default.router);
    }
};

//Load Routes && Global Error Handler
routeLoader(controllersPath).then(() => app.use(globalErrorHandler));


app.listen(port, () => {
    console.log('Server started on port ' + port);
})