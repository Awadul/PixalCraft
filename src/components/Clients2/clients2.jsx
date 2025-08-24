/* eslint-disable @next/next/no-img-element */
import React from "react";
import ClientsData from "../../data/sections/clients.json";
import Split from "../Split";

const Clients2 = ({ theme }) => {
  return (
    <section className="clients sub-bg pt-50 pb-50">
      <h2 style={{ display: "none" }}>&nbsp;</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              {ClientsData.slice(0, 4).map((item) => (
                <div key={item.id} className="col-lg-3 brands">
                  <div className="item no-bord wow fadeIn" data-wow-delay=".3s">
                    <div className="img">
                      {theme === "light" ? (
                        <img src={item.lightImage} alt="" />
                      ) : (
                        <img src={item.darkImage} alt="" />
                      )}
                      <Split>
                        {/* Display URL as simple text with anchor styling on hover */}
                        <span
                          className="link words chars splitting client-url"
                          data-splitting
                        >
                          {item.url}
                        </span>
                      </Split>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .client-url {
          cursor: pointer;
          display: inline-block;
          color: inherit;
          text-decoration: none;
        }
        .client-url:hover {
          color: var(--color-primary);
        }
      `}</style>
    </section>
  );
};

export default Clients2;
