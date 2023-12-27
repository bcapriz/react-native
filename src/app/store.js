// import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from '../features/counter/counterSlice'

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer
//   },
// })
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import shopReducer from '../features/shop/shopSlice';

export const store = configureStore({
  reducer: combineReducers({
    shop: shopReducer,
  }),
});
