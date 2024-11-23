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
import { deleteModel } from "../../service/model";
import { toast } from "react-toastify";
import deleteIcon from "../../assets/trash.png";
import editIcon from "../../assets/edit.png";

const ModelItem = ({ model }) => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const onDelete = async (event) => {
        event.preventDefault();

        confirmAlert({
            title: "Menghapus Data Model",
            message: "Setelah dihapus, data model tidak dapat dikembalikan. Yakin ingin menghapus?",
            buttons: [
                {
                    label: "Ya",
                    onClick: async () => {
                        const result = await deleteModel(model.id);
                        if (result?.success) {
                            navigate({ 
                                to: "/model/refresh",
                                state: { successMessage: "Data Model berhasil dihapus." }
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
        <Col md={3} style={{ marginRight: "3rem", marginBottom: "2rem"}}>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{model.type}</Card.Title>
                    <Card.Text>{model.year}</Card.Text>
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
                                                    href={`/model/edit/${model?.id}`}
                                                    variant="success"
                                                    size="md"
                                                >
                                                <Image
                                                    src={editIcon}
                                                    alt="Edit Icon"
                                                    width={20}
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

ModelItem.propTypes = {
    model: PropTypes.object,
};

export default ModelItem;