import React, { useContext, useState, useEffect, Fragment } from "react";
import FeedbackContext from "../../../../context/feedback/feedbackContext";
import axios from "axios";
import dateFormat from "dateformat";
import capitalize from "../../../../utils/capitalize";
import Alert from "../../../layout/Alert";
import AlertContext from "../../../../context/alert/alertContext";

const QuickReplyFeedback = () => {
  const feedbackContext = useContext(FeedbackContext);
  const { setReviewed, sendEmail } = feedbackContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [feedback, setFeedback] = useState(null);

  const [reply, setReply] = useState("");

  const feedbackSetFunc = async () => {
    try {
      const res = await axios.get("/lastFeedback");
      setFeedback(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    feedbackSetFunc();
    //eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    setReply(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstname: capitalize(feedback.firstname),
      lastname: capitalize(feedback.lastname),
      email: feedback.email,
      dateReceived: dateFormat(feedback.datePosted, "d-mmm-yy"),
      dateReplied: dateFormat(Date.now(), "d-mmm-yy"),
      message: feedback.message,
      reply,
    };
    const res = await sendEmail(data);
    setAlert(res.type, res.msg);
    if (res.type === "success") {
      setReply("");
      await setReviewed(feedback._id);
      feedbackSetFunc();
    }
  };

  return (
    <div class="card rounded">
      <div class="card-body">
        <h5 class="text-muted text-center mb-4">Quick Feedback Reply</h5>
        <Alert />
        {feedback ? (
          <Fragment>
            <div class="mb-3">
              <div class="d-flex justify-content-between">
                <p>
                  <i class="fas fa-user mr-2"></i>
                  <span class="text-info font-weight-bold text-capitalize">
                    {`${feedback && feedback.firstname} `}{" "}
                  </span>
                  <span class="text-info font-weight-bold text-capitalize">
                    {`${feedback && feedback.lastname}`}{" "}
                  </span>
                  <span class="font-weight-light">
                    {" "}
                    {feedback && `(${feedback.email})`}{" "}
                  </span>
                  <span class="text-muted mr-2">writes</span>
                  <i class="fas fa-pencil-alt"></i>...
                </p>
                <p>
                  <span class="font-weight-normal text-muted">
                    {feedback && dateFormat(feedback.datePosted, "d-mmm")}
                  </span>
                </p>
              </div>
              <div class="div border p-3 bg-light text-secondary font-weight-normal rounded">
                {feedback && feedback.message}
              </div>
            </div>
            <div>
              <p class="text-muted">
                <i class="font-weight-bold">Reply:</i>{" "}
              </p>
            </div>
            <form onSubmit={onSubmit}>
              <div class="form-group">
                <textarea
                  class="form-control py-2 mb-3"
                  placeholder="..."
                  rows="4"
                  value={reply}
                  onChange={onChange}
                  required
                ></textarea>
                <div class="text-center">
                  <button
                    type="submit"
                    class="btn text-uppercase font-weight-bold text-light bg-info"
                  >
                    Reply through Email
                  </button>
                </div>
              </div>
            </form>
          </Fragment>
        ) : (
          <Fragment>
            <h4 class="text-muted lead text-center">No feedback available</h4>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default QuickReplyFeedback;
