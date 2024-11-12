import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createManufacture } from "../../service/Manufacture";
import Protected from "../../components/Auth/Protected";
import Container from "react-bootstrap/esm/Container";

export const Route = createLazyFileRoute("/manufacture/create")({
    component: () => (
        <Protected roles={[1]}>
            <CreateManufacture />
        </Protected>
    ),
});

function CreateManufacture() {
    const navigate = useNavigate();

    const [manufacture, setManufacture] = useState("");
    const [address, setAddress] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        const request = {
            manufacture,
            address
        };

        const result = await createManufacture(request);
        if (result?.success) {
            navigate({ to: "/",
                state: { successMessage: "Data Manufacture berhasil ditambahkan!!" }
             });
            return;
        }

        alert(result?.message);
    };

    const handleCancel = () => {
        navigate({ to: "/" });
        return;
    };

    return (
        <Row className="mt-5">
            <Col className="offset-md-3">
                <div className="text-center mb-3">
                    <h3>Add New Manufacture</h3>
                </div>
                <Card>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="manufacture"
                            >
                                <Form.Label column sm={3}>
                                    Manufacture
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="text"
                                        placeholder="Input Manufacture Name"
                                        required
                                        value={manufacture}
                                        onChange={(event) => {
                                            setManufacture(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="address"
                            >
                                <Form.Label column sm={3}>
                                    Address
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="text"
                                        placeholder="Input Address"
                                        required
                                        value={address}
                                        onChange={(event) => {
                                            setAddress(event.target.value);
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
                                            disabled={!manufacture || !address}
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