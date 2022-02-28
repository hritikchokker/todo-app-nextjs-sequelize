import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList, getRemove } from './todoActions';

function TodoList() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(getList());
  }, []);

  const dispatch = useDispatch();

  const list = useSelector((state) => state.todo.tasksList);

  // Hello Returning HTML

  return (
    <div>
      {list.map((data, index) => (
        <div key={index}>
          <ol>
            <li>{data.taskId}</li>
            <li>{data && data.task}</li>
            <li>{data && data.creater}</li>
          </ol>
          <button key={index} onClick={() => dispatch(getRemove(data.taskId))}>
            Delete
          </button>
          {/*  /edit/:id(taskId) */}
          <button onClick={setModal(!modal)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
