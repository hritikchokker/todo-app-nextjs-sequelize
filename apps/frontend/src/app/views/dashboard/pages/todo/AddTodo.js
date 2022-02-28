import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAdd } from './todoRedux/todoActions';

function AddTodo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [field, setField] = useState({
    task: 'First',
    creator: 'Belliary',
    isImmediate: false,
  });
  const backNavigate = useSelector((state) => state.todo.redirectBack);

  const handleAdd = (data) => {
    data.preventDefault();
    // debugger;
    // console.log(data, "Data it is");
    dispatch(getAdd(field));
  };
  useEffect(() => {
    if (backNavigate) {
      navigate('/dashboard', { replace: true });
    }
  }, [backNavigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setField((field) => ({ ...field, [name]: value }));
  };
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add a Task"
          value={field.task}
          name="task"
          onChange={handleChange}
        />
        <input
          type="creator"
          placeholder="Creator Name"
          value={field.creator}
          name="creator"
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="isImmediate"
          value={field.isImmediate}
          onChange={(e) =>
            setField((field) => ({ ...field, isImmediate: e.target.checked }))
          }
        />
        <label>Is Immediate</label>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default AddTodo;
