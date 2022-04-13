import React, { useContext, useState, useEffect } from 'react';
import Alert from '../../../layout/Alert';
import FeedbackContext from '../../../../context/feedback/feedbackContext';
import dateFormat from 'dateformat';
import capitalize from '../../../../utils/capitalize';
import AlertContext from '../../../../context/alert/alertContext';
import $ from 'jquery';
const FeedbackReplyModal = (props) => {
  const { reviewId } = props;

  const feedbackContext = useContext(FeedbackContext);
  const { feedbacks, sendEmail, setReviewed } = feedbackContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [state, setState] = useState({
    loading: true,
    feedback: null,
  });

  const [reply, setReply] = useState('');

  const { feedback } = state;

  useEffect(() => {
    feedbacks.forEach((f) => {
      if (f._id === reviewId) {
        setState({ feedback: f, loading: false });
        return;
      }
    });
    //eslint-disable-next-line
  }, [feedbacks, reviewId]);

  const onChange = (e) => {
    setReply(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstname: capitalize(feedback.firstname),
      lastname: capitalize(feedback.lastname),
      email: feedback.email,
      dateReceived: dateFormat(feedback.datePosted, 'd-mmm-yy'),
      dateReplied: dateFormat(Date.now(), 'd-mmm-yy'),
      message: feedback.message,
      reply,
    };
    const res = await sendEmail(data);
    setAlert(res.type, res.msg);
    if (res.type === 'success') {
      setReply('');
      setReviewed(feedback._id);
      setTimeout(() => {
        $('#feedback-reply-modal').modal('hide');
      }, 2000);
    }
  };
  return (
    <div class='modal fade' id='feedback-reply-modal' tabIndex='-1'>
      <div class='modal-dialog modal-dialog-centered modal-lg'>
        <div class='modal-content'>
          <div class='modal-header bg-dark text-white'>
            <h5 class='modal-title' id='reply-feedback-title'>
              Reply to Feedback
            </h5>
            <button type='button' class='close' data-dismiss='modal'>
              <span class='text-white'>&times;</span>
            </button>
          </div>
          <div class='modal-body'>
            <Alert />
            <div class='p-4'>
              <div class='mb-3'>
                <div class='d-flex justify-content-between'>
                  <p>
                    <i class='fas fa-user mr-2'></i>
                    <span class='text-info font-weight-bold text-capitalize'>
                      {`${feedback && feedback.firstname} `}{' '}
                    </span>
                    <span class='text-info font-weight-bold text-capitalize'>
                      {`${feedback && feedback.lastname}`}{' '}
                    </span>
                    <span class='font-weight-light'>
                      {' '}
                      {feedback && `(${feedback.email})`}{' '}
                    </span>
                    <span class='text-muted mr-2'>writes</span>
                    <i class='fas fa-pencil-alt'></i>...
                  </p>
                  <p>
                    <span class='font-weight-normal text-muted'>
                      {feedback && dateFormat(feedback.datePosted, 'd-mmm-yy')}
                    </span>
                  </p>
                </div>
                <div class='div border p-3 bg-light text-secondary font-weight-normal rounded'>
                  {feedback && feedback.message}
                </div>
              </div>
              <div>
                <p class='text-muted'>
                  <i class='font-weight-bold'>Reply:</i>{' '}
                </p>
              </div>
              <form onSubmit={onSubmit}>
                <div class='form-group'>
                  <textarea
                    class='form-control py-2 mb-3'
                    placeholder='...'
                    rows='4'
                    value={reply}
                    onChange={onChange}
                    required
                  ></textarea>
                  <div class='text-center'>
                    <button
                      type='submit'
                      class='btn text-uppercase font-weight-bold text-light bg-info'
                    >
                      Reply through Email
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class='modal-footer p-2'>
            <button
              type='button m-0'
              class='btn btn-secondary'
              onClick={() => {
                setReply('');
              }}
              data-dismiss='modal'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackReplyModal;
