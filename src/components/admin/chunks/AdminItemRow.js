import React, { useState, useEffect } from 'react';
import dateFormat from 'dateformat';
import axios from 'axios';

const AdminItemRow = (props) => {
  const { data, index, setItemsLoaded, arrayLength } = props;

  const [adderName, setAdderName] = useState('');

  useEffect(() => {
    (async function () {
      const res = await axios.get('/userName/' + data.addedBy);
      setAdderName(res.data);
      if (index + 1 === arrayLength) {
        setItemsLoaded(true);
      }
    })();
    //eslint-disable-next-line
  }, []);

  return (
    <tr class='table table-dark'>
      <th scope='row'>{index + 1}</th>
      <td>
        <i>Image</i>
      </td>
      <td>{data.title}</td>
      <td>{data.description}</td>
      <td>{data.price}</td>
      <td>{data.soldFrom}</td>
      <td>{data.condition}</td>
      <td>{adderName}</td>
      <td>{dateFormat(data.datePosted, 'd-mmm-yy')}</td>
      <td>{data.archived.toString()}</td>
      <td>{data.userArchived.toString()}</td>
      <td>
        <div class='dropleft'>
          <button
            class='btn btn-info btn-sm dropdown-toggle'
            type='button'
            data-toggle='dropdown'
          >
            Action
          </button>
          <div class='dropdown-menu'>
            <a class='dropdown-item' href='#a'>
              <i class='fas fa-trash-alt'></i>&emsp;Delete
            </a>
            <a class='dropdown-item' href='#a'>
              <i class='far fa-check-square'></i>
              <i class='far fa-square'></i>&emsp;Archive
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default AdminItemRow;
