import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { register } from "../service/auth";
import { setToken } from "../redux/slices/auth"; 
import Image from 'react-bootstrap/Image';
import carImage from '../assets/carslr2.png';
import './Register.css'; 

export const Route = createLazyFileRoute("/register")({
    component: Register,
});

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState(undefined);
    const {token} = useSelector((state)=>state.auth);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate({ to: "/" });
        }
    }, [navigate]);

    const onSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password and password confirmation must be the same!");
            return;
        }

        const request = {
            name,
            email,
            password,
            profilePicture,
        };
        try {
            const result = await register(request);
            if (result.success) {
                dispatch(setToken(result.data.token));
                navigate({ to: "/" });
                return;
            }

            alert(result.message);
        } catch (error) {
            console.error("Registration error: ", error);
            alert("An error occurred during registration. Please try again.");
        }
    };

    return (
        <Container fluid className="container">
            <Row>
                <Col sm={8} className="image-container">
                    <Image src={carImage} alt="Car" rounded fluid /> 
                </Col>

                <Col sm={4} className="d-flex justify-content-center align-items-center">
                    <Row className="w-100">
                        <Col md={12}>
                            <h1 className="register-header">Register</h1>
                            <Form onSubmit={onSubmit}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        required
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter your password"
                                        required
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="confirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm your password"
                                        required
                                        value={confirmPassword}
                                        onChange={(event) => setConfirmPassword(event.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="profilePicture">
                                    <Form.Label>Profile Picture</Form.Label>
                                    <Form.Control
                                        type="file"
                                        placeholder="Choose File"
                                        required
                                        onChange={(event) => setProfilePicture(event.target.files[0])}
                                        accept=".jpg,.png"
                                    />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button type="submit" variant="primary">Register</Button>
                                </div>
                                <div className="login-link">
                                    Have an account? <a href="/login">Sign In</a>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}