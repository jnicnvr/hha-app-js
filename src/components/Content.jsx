import React from "react";
import Table from "./Table";
import ContentHeader from "./ContentHeader";

function Content({ children }) {
  return (
    <div className='content-wrapper'>
      <ContentHeader title={children.type.name} />
      <section className='content'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
