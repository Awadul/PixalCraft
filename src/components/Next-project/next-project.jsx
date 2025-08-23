/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const NextProject = ({ nextProject }) => {
  if (!nextProject) {
    return null;
  }

  return (
    <section className="next-prog section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box">
              <div
                className="bg-img"
                style={{
                  backgroundImage: `url(${nextProject.projectHeaderImage || nextProject.image})`,
                }}
              ></div>
              <div className="cont">
                <h1>
                  <Link href={`/project-detailed?id=${nextProject.id}`}>
                    <a>
                      {nextProject.title?.big || nextProject.title || "Next Project"}
                      <span className="icon">
                        <i className="fas fa-chevron-right"></i>
                      </span>
                    </a>
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextProject;
