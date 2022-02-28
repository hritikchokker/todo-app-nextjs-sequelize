import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetails } from './todoRedux/todoActions';

function EditTodo() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    isImmediate: '',
    creator: '',
    task: '',
  });

  const updateForm = (datas) => {
    setData({
      isImmediate: datas.isImmediate,
      creator: datas.creator,
      task: datas.task,
    });
    console.log(data,'dass');
  };
  const taskDetails = useSelector((state) => state.todo.taskDetails);
  console.log(taskDetails, 'task details');
  const { id } = useParams();
  console.log(id, 'Id from param');
  useEffect(() => {
    if (id) {
      dispatch(getDetails(id));
    }
  }, [id]);
  useEffect(() => {
    if (taskDetails) {
      // setTimeout(() => {
      updateForm(taskDetails);
      // }, 2000);
    }
  }, []);

  const onChange = (e) => {
    //
  };

  return (
    <div>
      <h3>Edit Data from {id}</h3>
      <div>
        <input onChange={onChange} value={data.creator} />
        <br />
      </div>
      <div>
        <input onChange={onChange} value={data.isImmediate} />
        <br />
      </div>
      <div>
        <input onChange={onChange} value={data.task} />
        <br />
      </div>
    </div>
  );
}

export default EditTodo;
