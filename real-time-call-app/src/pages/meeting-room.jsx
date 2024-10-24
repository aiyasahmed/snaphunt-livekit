import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import EgressHelper from "@livekit/egress-sdk"
import {API_RESOURCES, LIVE_KIT_RESOURCE} from "../api/constants/api_resources";
import {
    ControlBar,
    GridLayout,
    LiveKitRoom,
    ParticipantTile,
    RoomAudioRenderer,
    useTracks,
    useRoomContext,
    useParticipants,
    ParticipantLoop,
    ParticipantName, FocusLayout
} from '@livekit/components-react';

import '@livekit/components-styles';

import {Track} from 'livekit-client';
import {useEffect} from "react";
import BASE_API from "../api/config";
import {useDispatch} from "react-redux";
import {replaceParticipants} from "../store/slice/participantSlice";

let room = null;
let participants = null;

export function MeetingRoom() {
    const serverUrl = LIVE_KIT_RESOURCE.WEB_SERVER;
    const navigate = useNavigate();
    const {access_token} = useParams();


    const startRecording = async () => {
        await BASE_API.get(`/${API_RESOURCES.RECORD}/SnapHunt-video-conference`)
    }

    const handleOnConnected = () => {
        startRecording()
    }

    return (
        <LiveKitRoom
            video={false}
            audio={false}
            token={access_token}
            screen={false}
            serverUrl={serverUrl}
            data-lk-theme="default"
            style={{height: '100vh'}}
            onDisconnected={() => {
                EgressHelper.setRoom(room)
                navigate("/")
            }}
            onConnected={handleOnConnected}
        >
            {/* Your custom component with basic video conferencing functionality. */}
            <MyVideoConference/>

            <RoomAudioRenderer/>

            <ControlBar/>
        </LiveKitRoom>
    )
}

function MyVideoConference() {
    room = useRoomContext()
    participants = useParticipants()
    const dispatch = useDispatch();
    const participantsArr = []

    const tracks = useTracks(
        [
            {source: Track.Source.Camera, withPlaceholder: true},
            {source: Track.Source.ScreenShare, withPlaceholder: false},
        ],
        {onlySubscribed: false},
    );
    return (
        <GridLayout tracks={tracks} style={{height: 'calc(100vh - var(--lk-control-bar-height))'}}>
            <ParticipantTile/>
        </GridLayout>
    );
}
