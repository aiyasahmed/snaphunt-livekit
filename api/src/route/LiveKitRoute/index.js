import express from 'express';

const router = express.Router();
import {LiveKitController} from "../../controller/LiveKitController.js";

export const liveKitRoutes = [
    {
        name: 'liveKit Routes',
        startPath: '/liveKit',
        file: router.get('/test', LiveKitController.test)
    },
    {
        name: 'liveKit Routes',
        startPath: '/liveKit',
        file: router.get('/getToken/:name', LiveKitController.getToken)
    },
    {
        name: 'liveKit Routes',
        startPath: '/liveKit',
        file: router.get('/startRecording/:room', LiveKitController.startRecording)
    },
    {
        name: 'liveKit Routes',
        startPath: '/liveKit',
        file: router.get('/getParticipants', LiveKitController.getParticipants)
    }
]
