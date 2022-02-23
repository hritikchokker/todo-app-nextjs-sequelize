import React from 'react';
import { useParams } from 'react-router-dom';

function AddEditTodo() {
  const { id } = useParams();
  React.useEffect(() => {
    if (id) {
      //    dispatch(getTaskDetails())
    }
  }, []);

  return <div>AddEditTodo {id}</div>;
}

export default AddEditTodo;
