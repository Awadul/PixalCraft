/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>Av. Insurgentes Sur 1234, Col. Del Valle, CDMX 03100, Mexico</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>hello@pixelcraft.mx</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+52 (55) 1234-5678</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent Projects</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/project-detailed">
                      <a>
                        <img src="/img/Group 1686551828.png" alt="Software Development Project" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/project-detailed">
                      <a>
                        <p>
                          Modern E-commerce Platform with React & Node.js
                        </p>
                      </a>
                    </Link>
                    <Link href="/works/works-dark">
                      <a>
                        <span className="date">15 Dec 2023</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/project-detailed">
                      <a>
                        <img src="/img/portfolio/2.jpg" alt="Mobile App" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/project-detailed">
                      <a>
                        <p>
                          Cross-platform Mobile App for Healthcare
                        </p>
                      </a>
                    </Link>
                    <Link href="/works/works-dark">
                      <a>
                        <span className="date">28 Nov 2023</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Subscribe to our newsletter" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <h3 style={{ color: '#fff', fontSize: '28px', fontWeight: '700', marginBottom: '20px' }}>
                  PIXELCRAFT
                </h3>
                <p style={{ color: '#999', fontSize: '14px', lineHeight: '1.6', marginBottom: '30px' }}>
                  {`We've delivered dozens of successful software projects, from web applications to mobile apps, helping businesses transform their digital presence in Mexico and Latin America.`}
                </p>
              </div>

              <div className="social">
                <a href="#0" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-behance"></i>
                </a>
              </div>

              <div className="copy-right">
                <p>
                  © 2023, PixelCraft. Crafting digital solutions with passion in Mexico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
