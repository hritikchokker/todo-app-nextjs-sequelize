import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList, getRemove } from './todoRedux/todoActions';
import { useNavigate } from 'react-router-dom';

function TodoList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateList = useSelector((state) => state.todo.updateList);
  const list = useSelector((state) => state.todo.tasksList);
  console.log(updateList,'updateList');
  useEffect(() => {
    dispatch(getList());
  }, [updateList]);

  // const help = useSelector((state) => state);
  // eslint-disable-next-line no-debugger
  // debugger;
  console.log(list, 'List data');

  return (
    <>
      <div>
        <h1>To Do List</h1>
      </div>
      <div>
        <button onClick={() => navigate('/dashboard/add', { replace: true })}>
          Add a new Data
        </button>
      </div>
      <table border="1">
        <tbody>
          <tr>
            <td>Task Creator</td>
            <td>To Do Task</td>
            <td>Is Immediate</td>
            <td>Delete</td>
            <td>Edit</td>
          </tr>
          {list &&
            list.map((data, index) => (
              <tr key={index}>
                <td>{data && data.creator}</td>
                <td>{data && data.task}</td>
                <td>{data && data.isImmediate}</td>
                <td>
                  <button onClick={() => dispatch(getRemove(data.taskId))}>
                    delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      navigate(`/dashboard/edit/${data.taskId}`, {
                        replace: true,
                      })
                    }
                  >
                    Edit data
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoList;
