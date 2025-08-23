/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import ProjectDataArray from "../../data/project-details2.json";

const WorksStyle2 = ({ grid, hideFilter, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <style jsx>{`
        .item-img {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
        }
        
        .item-img .imago {
          display: block;
          width: 100%;
          height: 250px;
          overflow: hidden;
        }
        
        .item-img .imago img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: all 0.4s ease;
        }
        
        .item-img .imago:hover img {
          transform: scale(1.1);
        }
        
        .item-img-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: all 0.4s ease;
        }
        
        .item-img .imago:hover .item-img-overlay {
          opacity: 1;
        }
      `}</style>
      <section
        className={`${
          grid ? (grid === 3 ? "three-column" : null) : null
        } portfolio section-padding pb-70`}
      >
        {!hideFilter && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Portfolio
                  </h6>
                  <h3 className="wow color-font">
                    Our Recent Web Design &amp; <br /> Some Past Projects.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={"container"}>
          <div className="row">
            {!hideFilter && (
              <div
                className={`filtering ${
                  filterPosition === "center"
                    ? "text-center"
                    : filterPosition === "left"
                    ? "text-left"
                    : "text-right"
                } col-12`}
              >
                <div className="filter">
                  <span data-filter="*" className="active">
                    All
                  </span>
                  <span data-filter=".brand">Branding</span>
                  <span data-filter=".web">Mobile App</span>
                  <span data-filter=".graphic">Creative</span>
                </div>
              </div>
            )}

            <div className="gallery full-width">
              {ProjectDataArray.slice(0, 6).map((project, index) => (
                <div
                  key={project.id}
                  className={`${
                    grid === 3
                      ? "col-lg-4 col-md-6"
                      : grid === 2
                      ? "col-md-6"
                      : "col-12"
                  } items ${project.categories[0]?.name === "Branding" ? "brand" : 
                            project.categories[0]?.name === "Mobile App" ? "web" : "graphic"} wow fadeInUp`}
                  data-wow-delay=".4s"
                >
                  <div className="item-img">
                    <Link href={`/project-detailed?id=${project.id}`}>
                      <a className="imago wow">
                        <img src={project.projectHeaderImage} alt={project.title.big} />
                        <div className="item-img-overlay"></div>
                      </a>
                    </Link>
                  </div>
                  <div className="cont">
                    <h6>{project.title.small}</h6>
                    <span>
                      <Link href={`/project-detailed?id=${project.id}`}>
                        {project.title.big}
                      </Link>,
                      <Link href={`/project-display`}>
                        {project.categories[0]?.name || "Web Design"}
                      </Link>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksStyle2;
