import React from "react";

export const You = (props) => {
  return (
    <div id="You" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>For You</h2>
          <p>
        Top Talent coming from other marketplaces can enjoy NO FEES for 60 days!.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
