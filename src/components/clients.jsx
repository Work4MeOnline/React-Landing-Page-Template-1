import React from "react";

export const Clients = (props) => {
  return (
    <div id="Clients" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>For Clients</h2>
          <p>
        The Industrys changing connecting with top talent for short term or long term projects is now easier than ever.
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
