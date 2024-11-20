import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import carImage1 from "../../assets/calendar.png";
import carImage2 from "../../assets/settings.png";
import carImage3 from "../../assets/users.png";

const CarsItem2 = ({ cars }) => {
    return (
        <Col style={{ marginBottom: "50px"}}>
            <Card 
                style={{ 
                    width: "350px", 
                    height: "fit-content", 
                    border: "1px solid #ddd", 
                    borderRadius: "8px", 
                    margin: "20px auto" 
                }}
            >
                <div className="card-body card-mobil">
                    <div>
                        <Image 
                            src={cars?.image} 
                            alt="gambar" 
                            className="img-fluid fotomobil-card ms-auto me-auto d-flex justify-content-center" 
                            style={{ width: "fit-content", height: "270px", padding: "5px" }} 
                        />
                    </div>
                    <h5 
                        className="car-title pt-4" 
                        style={{ fontSize: "14px", color: "#777", marginBottom: "15px" }}
                    >
                        {cars?.Manufacture?.manufacture} - {cars?.Model?.type}
                    </h5>
                    <h2 
                        className="car-price" 
                        style={{ fontSize: "18px", color: "#333", margin: "10px 0" }}
                    >
                        Rp {cars?.rentPerDay} / hari
                    </h2>
                    <p 
                        className="car-subtitle" 
                        style={{ height: "120px", fontSize: "14px", color: "#777", marginBottom: "15px" }}
                    >
                        Spesifikasi: {cars?.specs}, {cars?.options} & available at {cars?.availableAt}
                    </p>
                    <div className="car-detail">
                        <div 
                            className="detail-item mb-3" 
                            style={{ fontSize: "14px", color: "#777", marginBottom: "15px", display: "flex", alignItems: "center" }}
                        >
                            <Image 
                                src={carImage3} 
                                alt="Kapasitas" 
                                style={{ width: "20px", height: "20px", marginRight: "10px" }} 
                            />
                            Kapasitas {cars?.capacity} Penumpang
                        </div>
                        <div 
                            className="detail-item mb-3" 
                            style={{ fontSize: "14px", color: "#777", marginBottom: "15px", display: "flex", alignItems: "center" }}
                        >
                            <Image 
                                src={carImage2} 
                                alt="Transmisi" 
                                style={{ width: "20px", height: "20px", marginRight: "10px" }} 
                            />
                            Transmisi {cars?.Transmission?.type}
                        </div>
                        <div 
                            className="detail-item mb-3" 
                            style={{ fontSize: "14px", color: "#777", marginBottom: "15px", display: "flex", alignItems: "center" }}
                        >
                            <Image 
                                src={carImage1} 
                                alt="Tahun" 
                                style={{ width: "20px", height: "20px", marginRight: "10px" }} 
                            />
                            Tahun {cars?.year}
                        </div>
                    </div>
                    <Button 
                        className="btn btn-success w-100 mt-4" 
                        style={{
                            backgroundColor: "#5CB85F",
                            border: "none",
                            color: "white",
                            padding: "10px 20px",
                            textAlign: "center",
                            display: "block",
                            fontSize: "14px",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Pilih Mobil
                    </Button>
                </div>
            </Card>
        </Col>
    );
};

CarsItem2.propTypes = {
    cars: PropTypes.object,
};

export default CarsItem2;
