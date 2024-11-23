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
import { deleteCars } from "../../service/car";
import { toast } from "react-toastify";
import deleteIcon from "../../assets/trash.png";
import editIcon from "../../assets/edit.png";

const CarsItem = ({ cars }) => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const onDelete = async (event) => {
        event.preventDefault();

        confirmAlert({
            title: "Menghapus Data Car",
            message: "Setelah dihapus, data car tidak dapat dikembalikan. Yakin ingin menghapus?",
            buttons: [
                {
                    label: "Ya",
                    onClick: async () => {
                        const result = await deleteCars(cars.id);
                        if (result?.success) {
                            navigate({ 
                                to: "cars/refresh",
                                state: { successMessage: "Data Car berhasil dihapus." }
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
                <Card.Img variant="top" src={cars?.image} />
                <Card.Body>
                    <Card.Text>Plate : {cars?.plate}</Card.Text>
                    <Card.Text>Manufacture : {cars?.Manufacture.manufacture}</Card.Text>
                    <Card.Text>Model : {cars?.model_id}</Card.Text>
                    <Card.Text>Rent Per Day : {cars?.rentPerDay}</Card.Text>
                    <Card.Text>Capacity : {cars?.capacity}</Card.Text>
                    <Card.Text>Description : {cars?.description}</Card.Text>
                    <Card.Text>Available At : {cars?.availableAt}</Card.Text>
                    <Card.Text>Type Transmission : {cars?.Transmission.type}</Card.Text>
                    <Card.Text>Available : {cars?.available}</Card.Text>
                    <Card.Text>Type : {cars?.Type.type}</Card.Text>
                    <Card.Text>Year : {cars?.year}</Card.Text>
                    <Card.Text>Options : {cars?.options}</Card.Text>
                    <Card.Text>Specs : {cars?.specs}</Card.Text>
                    <Card.Text>Fuel : {cars?.Fuel.type}</Card.Text>
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
                                                    href={`/car/edit/${cars?.id}`}
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

CarsItem.propTypes = {
    cars: PropTypes.object,
};

export default CarsItem;