import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";
import AlertContext from "../../../context/alert/alertContext";
import Alert from "../../layout/Alert";
import $ from "jquery";

const ChangePasswordModal = () => {
  const [formPassword, setFormPassword] = useState({
    oldPassword: "",
    newPassword: "",
    newPassword2: "",
  });

  const authContext = useContext(AuthContext);
  const { editUserPassword, error, clearErrors } = authContext;

  useEffect(() => {
    if (
      error === "Please choose a new password" ||
      error === "Old password does not match"
    ) {
      setAlert("danger", error);
      clearErrors();
    } else if (error === "Password successfully updated") {
      setAlert("success", error);
      clearErrors();
      setFormPassword({
        oldPassword: "",
        newPassword: "",
        newPassword2: "",
      });
      setTimeout(() => {
        $("#change-password-modal").modal("hide");
      }, 3000);
    }
    //eslint-disable-next-line
  }, [error]);

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const { oldPassword, newPassword, newPassword2 } = formPassword;

  const onChange = (e) => {
    setFormPassword({ ...formPassword, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (oldPassword === "" || newPassword === "" || newPassword2 === "") return;
    if (newPassword !== newPassword2) {
      setAlert("danger", "Confirmation password does not match");
      return;
    }
    editUserPassword({ password: newPassword, oldPassword });
  };

  return (
    <div class="modal fade" id="change-password-modal" tabIndex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="change-password-title">
              Change Password
            </h5>
            <button type="button" class="close" data-dismiss="modal">
              <span class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <Alert />
            <form onSubmit={onSubmit}>
              <div class="form-group">
                <label htmlFor="old-password" class="col-form-label">
                  Old Password:
                </label>
                <input
                  type="password"
                  class="form-control"
                  name="oldPassword"
                  id="old-password"
                  minLength="6"
                  value={oldPassword}
                  onChange={onChange}
                  required
                />
              </div>
              <div class="form-group">
                <label htmlFor="new-password" class="col-form-label">
                  New Password:
                </label>
                <input
                  type="password"
                  class="form-control"
                  name="newPassword"
                  id="new-password"
                  minLength="6"
                  value={newPassword}
                  onChange={onChange}
                  required
                />
              </div>
              <div class="form-group">
                <label htmlFor="new-password2" class="col-form-label">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  class="form-control"
                  name="newPassword2"
                  id="new-password2"
                  minLength="6"
                  value={newPassword2}
                  onChange={onChange}
                  required
                />
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-success">
                  Update Password
                </button>
              </div>
            </form>
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

export default withRouter(ChangePasswordModal);
