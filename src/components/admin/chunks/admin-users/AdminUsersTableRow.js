import React from "react";
import capitalize from "../../../../utils/capitalize";
import dateFormat from "dateformat";
import axios from "axios";

const AdminUsersTableRow = (props) => {
  const {
    firstname,
    lastname,
    email,
    address,
    facebook,
    instagram,
    _id,
    phone,
    description,
    joinedOn,
    gender,
    archived,
  } = props.user;
  const { index, setOneArchived, setDeleteId } = props;

  //do archive and delete operation
  const onArchivePress = async () => {
    try {
      const res = await axios.patch(`/archiveOneUser/${_id}`);
      setOneArchived(_id, res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onDeletePress = () => {
    setDeleteId(_id);
  };

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      {/* <td><i>Image</i></td> */}
      <td>{capitalize(firstname) + " " + capitalize(lastname)}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td class="text-capitalize">{gender}</td>
      <td>{phone}</td>
      <td>{description}</td>
      <td class="px-0">
        <div class="d-flex flex-column">
          {facebook && (
            <a
              href={"https://www.facebook.com/" + facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook
            </a>
          )}
          {instagram && (
            <a
              href={"https://www.instagram.com/" + instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
          )}
        </div>
      </td>
      <td>{dateFormat(joinedOn, "d-mmm-yy")}</td>
      <td>{archived.toString()}</td>
      <td class="">
        <div class="dropdown">
          <button
            class="btn btn-info btn-sm dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            Action
          </button>
          <div class="dropdown-menu">
            <li
              class="dropdown-item cursor-pointer"
              data-toggle="modal"
              data-target="#confirmation-modal"
              onClick={onDeletePress}
            >
              <i class="fas fa-trash-alt"></i>&emsp;Delete
            </li>
            <li class="dropdown-item cursor-pointer" onClick={onArchivePress}>
              {archived ? (
                <i class="far fa-check-square"></i>
              ) : (
                <i class="far fa-square"></i>
              )}
              &emsp;Archive
            </li>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default AdminUsersTableRow;
