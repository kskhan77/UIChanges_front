import React from 'react';
import dateFormat from 'dateformat';

export const FeedbackTableRow = (props) => {
  const {
    firstname,
    lastname,
    email,
    message,
    datePosted,
    reviewed,
    id,
    index,
    setOneReviewed,
    setDeleteId,
    setReviewId,
  } = props;

  const markSeenEvent = () => {
    setOneReviewed(id);
  };

  const deleteEvent = () => {
    setDeleteId(id);
  };

  const replyClickEvent = () => {
    setReviewId(id);
  };

  return (
    <tr>
      <th scope='row'>{index + 1}</th>
      <td class='text-capitalize'>{firstname}</td>
      <td class='text-capitalize'>{lastname}</td>
      <td class='font-italic'>{email}</td>
      <td>{message}</td>
      <td>{dateFormat(datePosted, 'd-mmm-yy')}</td>
      <td class='font-weight-bold'>{reviewed.toString()}</td>
      <td class=''>
        <div class='dropleft'>
          <button
            class='btn btn-info btn-sm dropdown-toggle'
            type='button'
            data-toggle='dropdown'
          >
            Action
          </button>
          <div class='dropdown-menu dropdown-feedback-reply'>
            {reviewed === false ? (
              <li
                class='dropdown-item py-0 cursor-pointer'
                data-toggle='modal'
                data-target='#feedback-reply-modal'
                onClick={replyClickEvent}
              >
                <i class='fas fa-reply'></i>&emsp;Reply
              </li>
            ) : null}
            <li
              class='dropdown-item py-0 cursor-pointer'
              data-toggle='modal'
              data-target='#confirmation-modal'
              onClick={deleteEvent}
            >
              <i class='fas fa-trash-alt'></i>&emsp;Delete
            </li>
            {reviewed === false ? (
              <li
                class='dropdown-item py-0 cursor-pointer'
                onClick={markSeenEvent}
              >
                <i class='fas fa-check-double'></i>&emsp;Mark Seen
              </li>
            ) : null}
          </div>
        </div>
      </td>
    </tr>
  );
};
