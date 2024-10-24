import dotenv from "dotenv";
import express from 'express';
import {liveKitRoutes} from "./src/route/LiveKitRoute/index.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

liveKitRoutes.map((liveKitRoute) => {
    app.use(`/api${liveKitRoute.startPath}`, liveKitRoute.file);
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
