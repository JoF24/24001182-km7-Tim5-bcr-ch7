import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import { useNavigate } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import { deleteTransmission } from "../../service/transmission";
import { toast } from "react-toastify";
import { useState } from "react";
import deleteIcon from "../../assets/trash.png";
import editIcon from "../../assets/edit.png";

const TransmissionItem = ({ transmission }) => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false);

    const onDelete = async (event) => {
        event.preventDefault();

        confirmAlert({
            title: "Menghapus Data Transmission",
            message: "Setelah dihapus, data transmission tidak dapat dikembalikan. Yakin ingin menghapus?",
            buttons: [
                {
                    label: "Ya",
                    onClick: async () => {
                        const result = await deleteTransmission(transmission.id);
                        if (result?.success) {
                            navigate({ 
                                to: "/transmission/refresh",
                                state: { successMessage: "Data Transmission berhasil dihapus." }
                            });
                        }
                        toast.error(result?.message);
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
        <Col md={3} style={{ marginRight: "2rem", marginBottom: "1rem"}}>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{transmission?.type}</Card.Title>
                    <Card.Text>{transmission?.number_of_gears} Gears</Card.Text>

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
                                                    href={`/transmission/edit/${transmission?.id}`}
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

TransmissionItem.propTypes = {
    transmission: PropTypes.object,
};

export default TransmissionItem;
