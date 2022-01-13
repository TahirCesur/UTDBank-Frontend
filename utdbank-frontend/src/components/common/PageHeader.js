import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div>
      <header
        className="page-title page-bg"
        style={{ backgroundImage: 'url(assets/images/terms.png)' }}
      >
        <div className="container">
          <div className="page-title-inner">
            <div className="section-title">
              <h1>{title}</h1>
              <ul className="page-breadcrumbs">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default PageHeader;
