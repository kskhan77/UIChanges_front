import React, { Fragment, useContext, useEffect, useState } from "react";
import FeedbackReplyModal from "../chunks/admin-feedback/FeedbackReplyModal";
import FeedbackContext from "../../../context/feedback/feedbackContext";
import AuthContext from "../../../context/auth/authContext";
import { FeedbackTableRow } from "../chunks/admin-feedback/FeedbackTableRow";
import ConfirmationModal from "../../layout/ConfirmationModal";
import "../datatable-js/dataTables.bootstrap4.min.css";
import $ from "jquery";
$.DataTable = require("datatables.net-bs4");

const FeedbackPageContent = () => {
  const feedbackContext = useContext(FeedbackContext);
  const { getAllFeedbacks, feedbacks, setReviewed, deleteFeedback } =
    feedbackContext;

  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  const [deleteId, setDeleteId] = useState(undefined);
  const [reviewId, setReviewId] = useState(undefined);

  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getAllFeedbacks();
    //eslint-disable-next-line
  }, []);

  // const myRef = useRef(null);

  useEffect(() => {
    // $(document).ready(function () {
    if (feedbacks.length > 0) {
      $("table").DataTable();
    }
    // });
    // eslint-disable-next-line
  }, [feedbacks]);

  const setOneReviewed = (id) => {
    setReviewed(id);
  };

  const deleteOneFeedback = () => {
    deleteFeedback(deleteId);
    setDeleteId(undefined);
  };

  return (
    <Fragment>
      {<FeedbackReplyModal reviewId={reviewId} />}
      <ConfirmationModal functiontoexecute={deleteOneFeedback} />

      <div class="row">
        <div class="col">
          <p class="lead font-weight-light" style={{ fontSize: "2.3rem" }}>
            View Feedbacks
          </p>
          <div class="div border">
            <div class="border-bottom p-3">
              <p class="d-flex align-items-center m-0">
                <i class="fas fa-cog"></i>&ensp;
                <span class="lead text-uppercase">Feedbacks</span>
              </p>
            </div>
            <div class="p-3">
              {/* <form class="form-inline">
                                <div class="form-group">
                                    <label htmlFor="rowcount">Max Rows:</label>&emsp;
                                <select class="form-control form-control-sm" id="rowcount">
                                        <option defaultValue value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                        <option value="25">25</option>
                                    </select>
                                </div>
                            </form> */}
              <div class="mt-3">
                {" "}
                {/*Div containing table*/}
                <div class="table-responsive">
                  <table
                    class="table table-bordered table-sm table-hover text-center"
                    style={{ minWidth: "1000px" }}
                  >
                    <thead>
                      {/* <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <select class="form-control form-control-sm" name="condition">
                                                        <option defaultValue value="">...</option>
                                                        <option value="true">true</option>
                                                        <option value="false">false</option>
                                                    </select>
                                                </td>
                                                <td></td>
                                            </tr> */}
                      <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Message</th>
                        <th scope="col">Date</th>
                        <th scope="col">Reviewed</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feedbacks.length === 0 ? (
                        <tr>
                          <td colSpan="8">No data available</td>
                        </tr>
                      ) : null}
                      {feedbacks &&
                        feedbacks.map(
                          (
                            {
                              firstname,
                              lastname,
                              email,
                              message,
                              datePosted,
                              reviewed,
                              _id,
                            },
                            i
                          ) => (
                            <FeedbackTableRow
                              key={_id}
                              firstname={firstname}
                              lastname={lastname}
                              email={email}
                              message={message}
                              datePosted={datePosted}
                              reviewed={reviewed}
                              id={_id}
                              index={i}
                              setOneReviewed={setOneReviewed}
                              deleteOneFeedback={deleteOneFeedback}
                              setDeleteId={setDeleteId}
                              setReviewId={setReviewId}
                            />
                          )
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <div class="d-flex justify-content-between py-2 px-4">
                                <div class="text-secondary">
                                    <p>Showing 10 of 14 entries</p>
                                </div>
                                <div class="">
                                    <nav>
                                        <ul class="pagination pagination-sm">
                                            <li class="page-item">
                                                <a class="page-link" href="#a">
                                                    <span>&laquo;</span>
                                                </a>
                                            </li>
                                            <li class="page-item active"><a class="page-link" href="#a">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#a">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#a">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#a">
                                                    <span>&raquo;</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FeedbackPageContent;
