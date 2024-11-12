import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { setToken } from "../redux/slices/auth";
import { login } from "../service/auth";
import Image from 'react-bootstrap/Image';
import carImage from '../assets/carslr2.png';
import './Login.css';

export const Route = createLazyFileRoute("/login")({
    component: Login,
});

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { token } = useSelector((state) => state.auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (token) {
            navigate({ to: "/" });
        }
    }, [navigate, token]);

    const onSubmit = async (event) => {
        event.preventDefault();

        const body = { email, password };

        const result = await login(body);
        if (result.success) {
            dispatch(setToken(result.data.token));
            navigate({ to: "/" });
            return;
        }

        alert(result.message);
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
                            <h1 className="welcome-header">Welcome!</h1>
                            <Form onSubmit={onSubmit}>
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
                                <div className="d-grid gap-2">
                                    <Button type="submit" variant="primary">Sign In</Button>
                                </div>
                                <div className="register-link">
                                    Don't have an account? <a href="/register">Sign Up</a>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
