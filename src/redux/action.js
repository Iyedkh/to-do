import { createSlice, nanoid } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    filter: 'ALL',
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: nanoid(),
        description: action.payload,
        isDone: false,
      });
    },
    toggleDone: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const { id, newDescription } = action.payload;
      const task = state.tasks.find(t => t.id === id);
      if (task) task.description = newDescription;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
});

export const { addTask, toggleDone, editTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
