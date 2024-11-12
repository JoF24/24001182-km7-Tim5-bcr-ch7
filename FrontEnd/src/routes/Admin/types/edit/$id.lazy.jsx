import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";
import { getDetailType, updateType } from "../../../service/Types";
import Protected from "../../../components/Auth/Protected";

export const Route = createLazyFileRoute('/types/edit/$id')({
    component: () => (
        <Protected roles={[1]}>
            <EditType />
        </Protected>
    ),
})

function EditType() {
    const { id } = Route.useParams();
    const navigate = useNavigate();

    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        const getDetailTypeData = async (id) => {
            const result = await getDetailType(id);
            if (result?.success) {
                setType(result.data?.type);
                setDescription(result.data?.description);
                setIsNotFound(false);
            } else {
                setIsNotFound(true);
            }
        };

        if (id) {
            getDetailTypeData(id);
        }
    }, [id]);

    if (isNotFound) {
        navigate({ to: "/type" });
        return;
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        const request = {
            type,
            description
        };
        const result = await updateType(id, request);
        if (result?.success) {
            navigate({ to: `/type`,
                state: { successMessage: "Data Type berhasil diperbarui !!" }
            });
            return;
        }

        toast.error(result?.message);
    };

    const handleCancel = () => {
        navigate({ to: "/type" });
        return;
    };

    return (
        <Row className="mt-5">
            <Col className="offset-md-3">
                <Card>
                    <Card.Header className="text-center">
                        Edit Type Data With ID {id}
                    </Card.Header>
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
                                        placeholder="Input Type Here"
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
                                        placeholder="Input Description Here"
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
