import { configureStore } from '@reduxjs/toolkit'
import filterSlice from "../components/Filters/filterSlice";
import todoListSlice from "../components/TodoList/todoSlice";

const store = configureStore({
    reducer: {
        filters: filterSlice.reducer,
        todoList: todoListSlice.reducer
    }
})

export default store;

// import {createStore} from 'redux';
// import rootReducer from './reducer';


// const store = createStore(rootReducer)//, initValue, enHancers);

// export default store;