import React, { useEffect} from "react";
import { NavDropdown, Image } from 'react-bootstrap';
import { setToken, setUser } from "../redux/slices/auth";
import { createLazyFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/logo.png";
import icon from "../assets/icon.png";
import mobil from "../assets/img_car.png";
import centang from "../assets/centang.png";
import imgservice from "../assets/img_service.png";
import iconPrice from "../assets/icon_price.png";
import iconComplete from "../assets/icon_complete.png";
import icon24hrs from "../assets/icon_24hrs.png";
import iconProfessional from "../assets/icon_professional.png";
import imgPhoto from "../assets/img_photo.png";
import imgPhoto2 from "../assets/img_photo2.png";
import imgRate from "../assets/Rate.png";
import imgLeft from "../assets/Left button.png";
import imgRight from "../assets/Right button.png";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./landingpage.css"
import { profile } from "../service/auth";
import Button from "react-bootstrap/esm/Button";

export const Route = createLazyFileRoute('/landingpage')({
  component: LandingPage,
})

function LandingPage() {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProfile = async () => {
      const result = await profile();
      if (result.success) {
        dispatch(setUser(result.data));
        return;
      }
      dispatch(setUser(null));
      dispatch(setToken(null));
    };

    if (token) getProfile();
  }, [dispatch, token]);

  const logout = (event) => {
    event.preventDefault();
    dispatch(setUser(null));
    dispatch(setToken(null));
    navigate({ to: "/" });
  };
  return (
    <>
    <div  id="landing-page">
      <div style={{ backgroundColor: "#F1F3FF" }}>
        <nav className="navbar navbar-expand-lg bg-body-transparent">
          <img src={logo} alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            style={{ borderColor: "transparent" }}
          >
            <span className="navbar-toggler-icon" style={{ width: "8vw" }}></span>
          </button>
          <div className="offcanvas offcanvas-end offcanvas-half" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={{ fontWeight: "bold" }}>BCR</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                title={
                    <span>
                    <Image
                        src={user?.profile_picture}
                        fluid
                        style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        overflow: "hidden",
                        borderRadius: "50%",
                        marginRight: "5px",
                        }}
                    />
                    {user?.name}
                    </span>
                }
                id="basic-nav-dropdown"
                >
                <NavDropdown.Item as={Link} to="/profile">
                    Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>
                    Logout
                </NavDropdown.Item>
                </NavDropdown>
              </ul>
            </div>
          </div>
        </nav>

        <div className="row section1">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="container">
              <h2 className="judul">Sewa & Rental Mobil Terbaik di kawasan Jember</h2>
              <p className="mt-4 judul">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                untuk sewa mobil selama 24 jam.
              </p>
              <Link to="/cariMobil" className="btn text-white">Mulai Sewa Mobil</Link>
            </div>
          </div>
          <div className="col-md-6">
            <img src={mobil} alt="gambar_mobil" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="row mt-5" id="ourservice">
        <div className="col-sm-6">
          <img className="img-service" src={imgservice} alt="Layanan terbaik Binar Car Rental" />
        </div>
        <div className="col-sm-6 d-flex align-items-center">
          <div className="container">
            <h3>Best Car Rental for any kind of trip in Jember!!</h3>
            <p className="mt-4">
              Sewa mobil di Jember bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <div className="d-flex align-items-center">
              <img src={centang} alt="Centang layanan" className="img-centang" />
              <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
            </div>
            <div className="d-flex align-items-center">
              <img src={centang} alt="Centang layanan" className="img-centang" />
              <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
            </div>
            <div className="d-flex align-items-center">
              <img src={centang} alt="Centang layanan" className="img-centang" />
              <p>Sewa Mobil Jangka Panjang Bulanan</p>
            </div>
            <div className="d-flex align-items-center">
              <img src={centang} alt="Centang layanan" className="img-centang" />
              <p>Gratis Antar - Jemput Mobil di Bandara</p>
            </div>
            <div className="d-flex align-items-center">
              <img src={centang} alt="Centang layanan" className="img-centang" />
              <p>Layanan Airport Transfer / Drop In Out</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column section3" id="why-us">
          <h3 className="judul-section3">Why Us?</h3>
          <p>Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className="container section4">
          <div className="row">
              <div className="col-md-3">
                  <div className="card">
                      <div className="card-body" style={{marginLeft: "1vw"}}>
                          <img src={iconComplete} alt="jempol_kuning" className="img-card"/>
                          <h3 className="card-title">Mobil Lengkap</h3>
                          <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="card">
                      <div className="card-body" style={{marginLeft: "1vw"}}>
                          <img src={iconPrice} alt="icon_price" className="img-card"/>
                          <h3 className="card-title">Harga Murah</h3>
                          <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain </p>
                      </div>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="card">
                      <div className="card-body" style={{marginLeft: "1vw"}}>
                          <img src={icon24hrs} alt="icon_24hrs" className="img-card"/>
                          <h3 className="card-title">Layanan 24 Jam</h3>
                          <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-3">
                  <div className="card">
                      <div className="card-body" style={{marginLeft: "1vw"}}>
                          <img src={iconProfessional} alt="icon_professional" className="img-card"/>
                          <h3 className="card-title">Sopir Profesional</h3>
                          <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="d-flex flex-column align-items-center" id="testimonial">
          <h3>Testimonial</h3>
          <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div className="container">
          <div id="myCarousel" className="carousel slide carousel-container" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <div className="d-flex row">
                          <div className="col-md-4">
                              <div className="d-flex justify-content-center">
                                  <img src={imgPhoto} alt="orang1" className="img-profile"/>
                              </div>
                          </div>
                          <div className="col-md-8 d-flex align-items-center">
                              <div className="container">
                                  <img src={imgRate} alt="rating" className="img-rating"/>
                                  <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, rerum. Laborum accusamus eveniet dolorem velit excepturi neque, illum ea voluptate perferendis assumenda eos libero necessitatibus. Ipsam repellendus mollitia dolores culpa."</p>
                                  <p style={{fontWeight: 600}}>John Dee 32, Bromo</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="carousel-item">
                      <div className="d-flex row">
                          <div className="col-md-4">
                              <div className="d-flex justify-content-center">
                                  <img src={imgPhoto2} alt="orang2" className="img-profile"/>
                              </div>
                          </div>
                          <div className="col-md-8">
                              <div className="container">
                                  <img src={imgRate} alt="rating" className="img-rating"/>
                                  <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit eum at nobis eaque amet doloremque debitis vero, obcaecati deleniti cumque tenetur a maiores ullam aspernatur qui quasi distinctio saepe magni."</p>
                                  <p style={{fontWeight: 600}}>John Dee 32, Bromo</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="carousel-item">
                      <div className="d-flex row">
                          <div className="col-md-4">
                              <div className="d-flex justify-content-center">
                                  <img src={imgservice} alt="orang3" className="img-profile"/>
                              </div>
                          </div>
                          <div className="col-md-8 d-flex align-items-center">
                              <div className="container">
                                  <img src={imgRate} alt="rating" className="img-rating"/>
                                  <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, rerum. Laborum accusamus eveniet dolorem velit excepturi neque, illum ea voluptate perferendis assumenda eos libero necessitatibus. Ipsam repellendus mollitia dolores culpa."</p>
                                  <p style={{fontWeight: 600}}>John Dee 32, Bromo</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <button className="carousel-control-prev visually-hidden" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next visually-hidden" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
          </div>
          <div className="carousel-nav-buttons">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide="prev"><img src={imgLeft} alt="Previous"/></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide="next"><img src={imgRight} alt="Next"/></button>
          </div>
      </div>
      <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-center section6">
              <div className="d-flex align-items-center flex-column" style={{width: "80%"}}>
                  <h3 className="text-white judul-section6 text-center">Sewa Mobil di Jember Sekarang</h3>
                  <p className="text-white" style={{textAlign: "center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veniam minima doloremque ipsa nam. Reprehenderit, dolore explicabo repudiandae, cupiditate quam repellat officia corrupti ad dicta eaque, sed velit exercitationem vero!</p>
                  <Link to="/cariMobil" className="btn text-white">Mulai Sewa Mobil</Link>
              </div>
          </div>
      </div>
      <div className="d-flex row" id="faq">
          <div className="col-md-4 section7">
              <h4 className="judul-section7">Frequently Asked Question</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
          </div>
          <div className="col-md-6">
              <div className="accordion" id="accordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Apa saja syarat yang dibutuhkan?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordion">
                      <div className="accordion-body">Minimal manusia</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Berapa hari minimal sewa mobil lepas kunci?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion">
                      <div className="accordion-body">Bebasss, pokok nggak dibawa kabur ajaa</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Berapa hari sebelumnya sebaiknya booking sewa mobil?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
                      <div className="accordion-body">Sebelum anda lahir kalau bisa sudah booking</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Apakah ada biaya antar - jemput?
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">Tergantung, kalau lagi mood nyetir biaya gratis. Kalau nggak mood ada biaya 10 M</div>
                      </div>
                  </div>
                  <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          Bagaimana jika terjadi kecelakaan?
                        </button>
                      </h2>
                      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">Kerumah sakit laaa, pakai nanyaaa</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="row section8">
          <div className="col-md-3">
              <div className="card footer-card">
                  <div className="card-body" style={{marginLeft: "1vw"}}>
                      <p className="card-text">Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
                      <p className="card-text">binarcarrental@gmail.com</p>
                      <p className="card-text">081-233-334-556</p>
                  </div>
              </div>
          </div>
          <div className="col-md-2">
              <div className="card footer-card">
                  <div className="card-body d-flex flex-column" style={{marginLeft: "1vw"}}>
                      <a href="#ourservice" className="card-text link text-black">Our Services</a>
                      <a href="#why-us" className="card-text link text-black">Why Us</a>
                      <a href="#testimonial" className="card-text link text-black">Testimonial</a>
                      <a href="#faq" className="card-text link text-black">FAQ</a>
                  </div>
              </div>
          </div>
          <div className="col-md-3">
              <div className="card footer-card">
                  <div className="card-body" style={{marginLeft: "1vw"}}>
                      <p className="card-text">Connect with us</p>
                      <img src={icon} alt="icon" className="img-icon"/>
                  </div>
              </div>
          </div>
          <div className="col-md-3">
              <div className="card footer-card">
                  <div className="card-body" style={{marginLeft: "1vw"}}>
                      <p className="card-text">Copyright Binar 2022</p>
                      <img src={logo} alt="icon_professional"/>
                  </div>
              </div>
          </div>
      </div>
    </div>
    </>
  );
}