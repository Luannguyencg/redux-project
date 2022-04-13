import { createSlice } from '@reduxjs/toolkit'


export default createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload
    },// => {type: 'filters/searchFiterChange}
    statusFilterChange: (state, action) => {
      state.status = action.payload
    },
    priorityFilterChange: (state, action) => {
      state.priorities = action.payload
    },
  }

})


// const initState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filter/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filter/priorityFilterChange":
//       return {
//         ...state,
//         priorities: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default filterReducer;
