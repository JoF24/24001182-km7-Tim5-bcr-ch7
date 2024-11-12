import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createTransmission } from "../../service/transmission";
import Protected from "../../components/Auth/Protected";
import Container from "react-bootstrap/esm/Container";

export const Route = createLazyFileRoute("/transmission/create")({
    component: () => (
        <Protected roles={[1]}>
            <CreateTransmission />
        </Protected>
    ),
});

function CreateTransmission() {
    const navigate = useNavigate();

    const [type, setTypes] = useState("");
    const [number_of_gears, setNumberOfGears] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        const request = {
            type,
            number_of_gears: parseInt(number_of_gears, 10),
        };

        const result = await createTransmission(request);
        if (result?.success) {
            navigate({ to: "/transmissions",
                state: { successMessage: "Data Transmission berhasil ditambahkan!!" }
             });
            return;
        }

        alert(result?.message);
    };

    const handleCancel = () => {
        navigate({ to: "/transmissions" });
        return;
    };

    return (
        <Row className="mt-5">
            <Col className="offset-md-3">
                <div className="text-center mb-3">
                    <h3>Add New Transmission</h3>
                </div>
                <Card>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="type"
                            >
                                <Form.Label column sm={3}>
                                    Transmission Types
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="text"
                                        placeholder="Input Transmission Types"
                                        required
                                        value={type}
                                        onChange={(event) => {
                                            setTypes(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="number_of_gears"
                            >
                                <Form.Label column sm={3}>
                                    Number of Gears
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="number"
                                        placeholder="Input Number of Gears"
                                        required
                                        value={number_of_gears}
                                        onChange={(event) => {
                                            setNumberOfGears(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Container>
                                <Row>
                                    <Col className="d-flex justify-content-center gap-2">
                                        <Button 
                                            variant="outline-primary" 
                                            onClick={handleCancel}
                                        >
                                            Cancel
                                        </Button>
                                        <Button 
                                            type="submit" 
                                            variant="primary" 
                                            disabled={!type || !number_of_gears}
                                        >
                                            Save
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}></Col>
        </Row>
    );
}
