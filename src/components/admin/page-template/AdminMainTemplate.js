import React from 'react';
import AdminSidebar from '../chunks/AdminSidebar';

const AdminMainTemplate = ({ PageComponent: Component }) => {
  return (
    <section class=' '>
      <div class='container-fluid'>
        <div class='row pb-3'>
          <div class='col-sm-2 pl-0 mb-4 mb-sm-0'>
            <AdminSidebar />
          </div>

          <div class='col-sm-10'>
            {' '}
            {/*right main div*/}
            <Component />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminMainTemplate;
