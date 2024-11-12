import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";
import { getDetailTransmission, updateTransmission } from "../../../service/transmission";
import Protected from "../../../components/Auth/Protected";

export const Route = createLazyFileRoute("/transmission/edit/$id")({
    component: () => (
        <Protected roles={[1]}>
            <EditTransmission />
        </Protected>
    ),
});

function EditTransmission() {
    const { id } = Route.useParams();
    const navigate = useNavigate();

    const [type, setTypes] = useState("");
    const [number_of_gears, setNumberOfGears] = useState("");
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        const getDetailTransmissionData = async (id) => {
            const result = await getDetailTransmission(id);
            if (result?.success) {
                setTypes(result.data?.type);
                setNumberOfGears(result.data?.number_of_gears);
                setIsNotFound(false);
            } else {
                setIsNotFound(true);
            }
        };

        if (id) {
            getDetailTransmissionData(id);
        }
    }, [id]);

    if (isNotFound) {
        navigate({ to: "/transmissions" });
        return;
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        const request = {
            type,
            number_of_gears: parseInt(number_of_gears, 10),
        };
        const result = await updateTransmission(id, request);
        if (result?.success) {
            navigate({ to: `/transmissions`,
                state: { successMessage: "Data Transmission berhasil diperbarui !!" }
            });
            return;
        }

        toast.error(result?.message);
    };

    const handleCancel = () => {
        navigate({ to: "/transmissions" });
        return;
    };

    return (
        <Row className="mt-5">
            <Col className="offset-md-3">
                <Card>
                    <Card.Header className="text-center">
                        Edit Transmission Data With ID {id}
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="types"
                            >
                                <Form.Label column sm={3}>
                                    Transmission Types
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="text"
                                        placeholder="Input Transmission Types Here"
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
                                        placeholder="Number of Gears"
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
