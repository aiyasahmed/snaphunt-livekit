import {Row, Container, Form, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import BASE_API from "../api/config";
import {API_RESOURCES} from "../api/constants/api_resources";
import {useState} from "react";

export default function JoinMeeting() {
    const navigate = useNavigate();

    const [name, setName] = useState("")

    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    const getToken = async () => {
        const response = await BASE_API.get(`/${API_RESOURCES.GET_TOKEN}/${name}`)
        const {accessToken} = response.data;
        navigate("/meeting-room/" + accessToken);
    }

    return (
        <Container>
            <Row className="col-3">
                <Form.Group className="mb-3 mt-5" controlId="formGroupEmail">
                    <Form.Control type="text" placeholder="Enter Name" onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group>
                    <div className="d-grid gap-2">
                        <Button onClick={getToken} size={"sm"} variant={"danger"}>Join</Button>
                        {/*<Button size={"sm"} variant={"primary"} disabled={true} onClick={() => navigate("/participants")}>Show*/}
                        {/*    Participants</Button>*/}
                    </div>
                </Form.Group>
            </Row>
        </Container>
    );
}
