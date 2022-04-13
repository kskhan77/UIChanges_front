import React from "react";

const ConfirmationModal = ({ functiontoexecute }) => {
  return (
    <div class="modal fade" id="confirmation-modal" tabIndex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title">Confirm Action</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body">Are you sure?</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-dismiss="modal"
              onClick={() => {
                functiontoexecute();
              }}
            >
              Yes
            </button>
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

export default ConfirmationModal;
