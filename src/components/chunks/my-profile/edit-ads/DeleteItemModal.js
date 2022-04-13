import React from "react";
import $ from "jquery";

const DeleteItemModal = () => {
  return (
    <div class="modal fade" tabIndex="-1" id="delete-item-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title">Are you sure?</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => {
                $("#delete-item-modal").modal("hide");
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemModal;
