import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import { Link } from "@tanstack/react-router"; 
import { useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import { deleteFuel } from "../../service/fuel";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import deleteIcon from "../../assets/trash.png";
import editIcon from "../../assets/edit.png";
import Image from "react-bootstrap/Image";

const FuelItem = ({ fuel }) => {
    const { user } = useSelector((state) => state.auth);

    const onDelete = async (event) => {
        event.preventDefault();

        confirmAlert({
            title: "Menghapus Data Bahan Bakar",
            message: "Setelah dihapus, data bahan bakar tidak dapat dikembalikan. Yakin ingin menghapus?",
            buttons: [
                {
                    label: "Ya",
                    onClick: async () => {
                        const result = await deleteFuel(fuel.id);
                        if (result?.success) {
                            navigate({ 
                                to: "/fuel/refresh",
                                state: { successMessage: "Data Fuel berhasil dihapus." }
                            });
                        } else {
                            toast.error(result?.message);
                        }
                    },
                },
                {
                    label: "Tidak",
                    onClick: () => {},
                },
            ],
        });
    };

    return (
        <Col md={3} style={{ marginRight: "2rem" }}>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{fuel?.type}</Card.Title>
                    <Card.Text>Price: {fuel?.price}</Card.Text>
                    <Card.Text>Octan Rating: {fuel?.octan_rating}</Card.Text>

                    {user?.role_id === 1 && (
                        <>
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="d-grid gap-2">
                                            <Button
                                                onClick={onDelete}
                                                variant="outline-danger"
                                                size="md"
                                            >
                                                <Image
                                                    src={deleteIcon}
                                                    alt="Delete Icon"
                                                    width={20}
                                                    height={20}
                                                    className="me-2"
                                                />
                                                Delete
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="d-grid gap-2">
                                            <Button
                                                as={Link}
                                                to={`/fuel/edit/${fuel?.id}`}
                                                variant="success"
                                                size="md"
                                            >
                                                <Image
                                                    src={editIcon}
                                                    alt="Edit Icon"
                                                    width={25}
                                                    height={20}
                                                    className="me-2"
                                                />
                                                Edit
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </>
                    )}
                </Card.Body>
            </Card>
        </Col>
    );
};

FuelItem.propTypes = {
    fuel: PropTypes.object.isRequired,
};

export default FuelItem;
