import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createType } from "../../service/Types";
import Protected from "../../components/Auth/Protected";
import Container from "react-bootstrap/esm/Container";

export const Route = createLazyFileRoute("/types/create")({
    component: () => (
        <Protected roles={[1]}>
            <CreateType />
        </Protected>
    ),
});

function CreateType() {
    const navigate = useNavigate();

    const [type, setType] = useState("");
    const [description, setDescription] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        const request = {
            type,
            description
        };

        const result = await createType(request);
        if (result?.success) {
            navigate({ to: "/type",
                state: { successMessage: "Data Type berhasil ditambahkan!!" }
             });
            return;
        }

        alert(result?.message);
    };

    const handleCancel = () => {
        navigate({ to: "/type" });
        return;
    };

    return (
        <Row className="mt-5">
            <Col className="offset-md-3">
                <div className="text-center mb-3">
                    <h3>Add New Type</h3>
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
                                    Type
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="text"
                                        placeholder="Input Type Name"
                                        required
                                        value={type}
                                        onChange={(event) => {
                                            setType(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="description"
                            >
                                <Form.Label column sm={3}>
                                    Description
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="text"
                                        placeholder="Input Description"
                                        required
                                        value={description}
                                        onChange={(event) => {
                                            setDescription(event.target.value);
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
                                            disabled={!type || !description}
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