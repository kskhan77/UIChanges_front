import React from "react";
import Alert from "../../../layout/Alert";
import EditModalTable from "./EditModalTable";

const EditModal = ({ items, removeDeletedAd }) => {
  return (
    <div class="modal fade" id="edit-products-modal" tabIndex="-1">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="change-password-title">
              Edit Posted Ads
            </h5>
            <button type="button" class="close" data-dismiss="modal">
              <span class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <Alert />
            <EditModalTable items={items} removeDeletedAd={removeDeletedAd} />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
