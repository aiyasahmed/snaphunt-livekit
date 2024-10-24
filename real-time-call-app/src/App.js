import {Route, Routes} from 'react-router-dom';
import JoinMeeting from "./pages/join-meeting";
import {MeetingRoom} from "./pages/meeting-room";
import NotFoundPage from "./pages/404";
import {Participants} from "./pages/participants";

export default function App() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<JoinMeeting/>}/>
                <Route path='/meeting-room/:access_token' element={<MeetingRoom/>}/>
                <Route path='/participants' element={<Participants/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}
