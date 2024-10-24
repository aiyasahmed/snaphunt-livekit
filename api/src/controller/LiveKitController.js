import {AccessToken, EgressClient, EncodedFileOutput, RoomServiceClient} from "livekit-server-sdk";
import dotenv from "dotenv";

dotenv.config();

export const LiveKitController = {
    test: (req, res) => {
        res.send('Livekit controller is working fine');
    },
    createToken: async (participantName) => {
        const roomName = 'SnapHunt-video-conference';

        const at = new AccessToken(process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_SECRET_KEY, {
            identity: participantName,
            // Token to expire after 10 minutes
            ttl: '10m',
        });
        at.addGrant({roomJoin: true, room: roomName});

        return await at.toJwt();
    },
    getToken: async (req, res) => {
        res.send({accessToken: await LiveKitController.createToken(req.params.name)});
    },
    startRecording: async (req, res) => {
        const egressClient = new EgressClient(
            process.env.LIVEKIT_SERVER,
            process.env.LIVEKIT_API_KEY,
            process.env.LIVEKIT_SECRET_KEY,
        );

        const fileOutput = new EncodedFileOutput({
            filepath: 'dz/davids-room-test.mp4',
        });

        const info = await egressClient.startRoomCompositeEgress(req.params.room, {
            file: fileOutput,
        });

        const egressID = info.egressId;
        res.send({egressID})
    },
    getParticipants: async (req, res) => {
        const roomName = 'SnapHunt-video-conference';
        const roomService = new RoomServiceClient(process.env.LIVEKIT_SERVER, process.env.LIVEKIT_API_KEY, process.env.LIVEKIT_SECRET_KEY);
        const response = await roomService.listParticipants(roomName, process.env.LIVEKIT_API_KEY);
        res.send(response);
    }
}
