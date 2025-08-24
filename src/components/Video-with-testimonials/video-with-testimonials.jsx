/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = useState(false);
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Close modal if clicked outside the video
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && modalRef.current && !videoRef.current.contains(e.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const openModal = () => {
    setOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
    // Pause the video when modal is closed
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="block-sec">
      <div
        className="background bg-img pt-100 pb-0 parallaxie"
        style={{ backgroundImage: `url(/img/bg-vid.jpg)` }}
        data-overlay-dark="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="vid-area">
                <span className="text">Watch Video</span>
                <div className="vid-icon">
                  <a
                    className="vid"
                    onClick={(e) => {
                      e.preventDefault();
                      openModal();
                    }}
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Our Clients
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    What Client&apos;s Say?
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <p>
                    From concept to launch, this team was professional and delivered
                    a website that perfectly represents our company.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Alex Regelman</h6>
                          <span className="author-details">
                            Co-founder, Colabrio
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                    Working with this team was an absolute pleasure. They delivered
                    exceptional results that exceeded our expectations.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Michael Owen</h6>
                          <span className="author-details">
                            Marketing Director, TechFlow
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                      PixelCraft delivers creative, high-performing digital solutions that help 
                      brands grow and stand out in today’s competitive market.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/3.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Leo Ranta</h6>
                          <span className="author-details">
                            CEO, InnovateCorp
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Video Modal */}
      {isOpen && (
        <div
          ref={modalRef}
          className="custom-video-modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            className="modal-content"
            style={{
              position: "relative",
              width: "80%",
              maxWidth: "900px",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "30px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <video
              ref={videoRef}
              src="/video/1.mp4"
              controls
              autoPlay
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoWithTestimonials;
