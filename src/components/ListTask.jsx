import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from '../redux/action';

function ListTask() {
  const { tasks, filter } = useSelector(state => state.task);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task =>
    filter === 'DONE' ? task.isDone :
    filter === 'NOT_DONE' ? !task.isDone :
    true
  );

  return (
    <div>
      <div className="filters">
        <button onClick={() => dispatch(setFilter('ALL'))}>All</button>
        <button onClick={() => dispatch(setFilter('DONE'))}>Done</button>
        <button onClick={() => dispatch(setFilter('NOT_DONE'))}>Not Done</button>
      </div>

      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
export default ListTask;
