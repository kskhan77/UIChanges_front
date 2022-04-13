import React, { useContext, useEffect, useState } from "react";
import AdminFurnitureTableRow from "../chunks/admin-furniture/AdminFurnitureTableRow";
import FurnitureContext from "../../../context/furniture/furnitureContext";
import $ from "jquery";
import AuthContext from "../../../context/auth/authContext";
import ConfirmationModal from "../../layout/ConfirmationModal";
import Alert from "../../layout/Alert";
import AlertContext from "../../../context/alert/alertContext";

$.DataTable = require("datatables.net-bs4");

export const ViewFurnitureContent = () => {
  const furnitureContext = useContext(FurnitureContext);
  const { furnitures, deleteFurnitureAdmin, clearFurnitureMessage } =
    furnitureContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  const [itemsLoaded, setItemsLoaded] = useState(false);

  const [deleteId, setDeleteId] = useState(undefined);

  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (itemsLoaded) {
      $("table").DataTable();
    }
    // eslint-disable-next-line
  }, [itemsLoaded]);

  const deleteOneFurniture = async () => {
    const deleted = await deleteFurnitureAdmin(deleteId);
    if (deleted) {
      // window.location.reload(true);
      setAlert("success", `One listing for furniture deleted`);
      clearFurnitureMessage();
    } else {
      setAlert("danger", `Failed to delete listing`);
    }
    setDeleteId(undefined);
  };

  return (
    <div class=" ">
      <ConfirmationModal functiontoexecute={deleteOneFurniture} />
      <div class="row">
        <div class="col text-light bg-primary rounded ">
          <div class="lead font-weight-light" style={{ fontSize: "2.3rem" }}>
            Manage Furnitures <i class="fas fa-chair  text-light"></i>
          </div>
          <div class="card border">
            <div class="border-bottom p-3">
              <p class="d-flex align-items-center m-0">
                <i class="fas fa-cog"></i>&ensp;
                <span class="  text-uppercase text-danger">Listings</span>
              </p>
            </div>
            <div class="p-3">
              <Alert />
              <div class="mt-3">
                {/*Div containing table*/}
                <div class="table-responsive">
                  <table
                    class="table table-bordered table-sm table-hover text-center"
                    style={{ minWidth: "1000px" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sold From</th>
                        <th scope="col">Condition</th>
                        <th scope="col">Posted By</th>
                        <th scope="col">Date</th>
                        <th scope="col">Archived</th>
                        <th scope="col">User Archived</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {furnitures.length === 0 ? (
                        <tr>
                          <td colSpan="12">No data available</td>
                        </tr>
                      ) : (
                        furnitures &&
                        furnitures.map((p, i, array) => (
                          <AdminFurnitureTableRow
                            key={p._id}
                            data={p}
                            index={i}
                            setItemsLoaded={setItemsLoaded}
                            length={array.length}
                            setDeleteId={setDeleteId}
                          />
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
