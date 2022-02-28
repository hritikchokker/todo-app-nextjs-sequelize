import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetails } from './todoRedux/todoActions';

function EditTodo({}) {
  const dispatch = useDispatch();
  const [data, setData] = useState('');

  const { id } = useParams();
  console.log(id, 'Id from param');
  useEffect(() => {
    if (id) {
      dispatch(getDetails(id));
    }
  }, []);

  return (
    <div>
      <h3>Edit Data from {id}</h3>
      <div>
        <input></input>
      </div>
    </div>
  );
}

export default EditTodo;
