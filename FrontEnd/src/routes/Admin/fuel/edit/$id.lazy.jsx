import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";
import { getDetailFuel, updateFuel } from "../../../service/fuel";
import Protected from "../../../components/Auth/Protected";

export const Route = createLazyFileRoute("/fuel/edit/$id")({
    component: () => (
        <Protected roles={[1]}>
            <EditFuel />
        </Protected>
    ),
});

function EditFuel() {
    const { id } = Route.useParams();
    const navigate = useNavigate();

    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [octan_rating, setOctanRating] = useState("");
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        const getDetailFuelData = async (id) => {
            const result = await getDetailFuel(id);
            if (result?.success) {
                setType(result.data?.type);
                setPrice(result.data?.price);
                setOctanRating(result.data?.octan_rating);
                setIsNotFound(false);
            } else {
                setIsNotFound(true);
            }
        };

        if (id) {
            getDetailFuelData(id);
        }
    }, [id]);

    if (isNotFound) {
        navigate({ to: "/fuels" });
        return;
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        const request = {
            type,
            price: parseFloat(price),
            octan_rating: parseInt(octan_rating, 10),
        };
        const result = await updateFuel(id, request);
        if (result?.success) {
            navigate({ to: `/fuels`,
                state: { successMessage: "Data Fuel berhasil diperbarui !!" }
            });
            return;
        }

        toast.error(result?.message);
    };

    const handleCancel = () => {
        navigate({ to: "/fuels" });
        return;
    };

    return (
        <Row className="mt-5">
            <Col className="offset-md-3">
                <Card>
                    <Card.Header className="text-center">
                        Edit Fuel Data With ID {id}
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="type"
                            >
                                <Form.Label column sm={3}>
                                    Fuel Type
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="text"
                                        placeholder="Input Fuel Type Here"
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
                                controlId="price"
                            >
                                <Form.Label column sm={3}>
                                    Price
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="number"
                                        placeholder="Price"
                                        required
                                        value={price}
                                        onChange={(event) => {
                                            setPrice(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="octan_rating"
                            >
                                <Form.Label column sm={3}>
                                    Octane Rating
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="number"
                                        placeholder="Octane Rating"
                                        required
                                        value={octan_rating}
                                        onChange={(event) => {
                                            setOctanRating(event.target.value);
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
                                            disabled={!type || !price || !octan_rating}
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
