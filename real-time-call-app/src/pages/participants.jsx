import {useSelector} from 'react-redux'
import {useEffect} from "react";

export function Participants() {
    const {participantsArr} = useSelector((state) => state.participants);

    useEffect(() => {
        console.log(participantsArr);
    }, [""]);

    return (
        <div>Participants</div>
    )
}
