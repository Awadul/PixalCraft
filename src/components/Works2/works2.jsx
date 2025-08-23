/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import ProjectDataArray from "../../data/project-details2.json";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const Works2 = ({ sliderRef }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/ionicons.min.css" />
      </Head>
      <section className="work-carousel section-padding caroul position-re pb-0">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head  text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Latest Work
                </h6>
                <h3 className="wow color-font">
                  Our Recent Web Design &amp; <br /> Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="swiper-container">
                <div className="swiper-container ">
                  {!load ? (
                    <Swiper
                      speed={1000}
                      loop={true}
                      spaceBetween={0}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        767: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                        },
                        991: {
                          slidesPerView: 3,
                          spaceBetween: 0,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 0,
                        },
                      }}
                      navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                      }}
                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl =
                          navigationPrevRef.current;
                        swiper.params.navigation.nextEl =
                          navigationNextRef.current;
                      }}
                      onSwiper={(swiper) => {
                        setTimeout(() => {
                          swiper.params.navigation.prevEl =
                            navigationPrevRef.current;
                          swiper.params.navigation.nextEl =
                            navigationNextRef.current;

                          swiper.navigation.destroy();
                          swiper.navigation.init();
                          swiper.navigation.update();
                        });
                      }}
                      className="swiper-wrapper"
                      slidesPerView={1}
                    >
                      {ProjectDataArray.slice(0, 6).map((project, index) => (
                        <SwiperSlide className="swiper-slide" key={project.id}>
                          <div
                            className="content wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div
                              className="item-img bg-img wow imago"
                              style={{
                                backgroundImage: `url(${project.projectHeaderImage})`,
                              }}
                            ></div>
                            <div className="cont bgbox">
                              <h6>
                                <Link
                                  href={`/project-display`}
                                >
                                  <a>{project.categories[0]?.name || "Web Design"}</a>
                                </Link>
                              </h6>
                              <h4>
                                <Link
                                  href={`/project-detailed?id=${project.id}`}
                                >
                                  <a>{project.title.big}</a>
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-next" ref={navigationNextRef}>
          <span className="pe-7s-angle-right"></span>
        </div>
        <div className="swiper-button-prev" ref={navigationPrevRef}>
          <span className="pe-7s-angle-left"></span>
        </div>
      </section>
    </>
  );
};

export default Works2;
