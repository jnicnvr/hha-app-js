import React from "react";

const ContentHeader = ({ title }) => {
  return (
    <>
      <section className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h6>
                <strong>{title}</strong>
              </h6>
            </div>
            <div className='col-sm-6'></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentHeader;
