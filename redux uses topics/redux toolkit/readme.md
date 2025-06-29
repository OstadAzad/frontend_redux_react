🌟 ১. Short Notes – মূল পয়েন্টগুলো সংক্ষেপে
Redux Toolkit হচ্ছে Redux ব্যবহারের সহজ উপায়।

এটি @reduxjs/toolkit প্যাকেজের মাধ্যমে ব্যবহার হয়।

Redux Toolkit দিয়ে Slice, Reducer, Store তৈরি অনেক সহজ হয়।

createSlice, configureStore, createAsyncThunk — Toolkit-এর মূল API।

এটি Boilerplate কমিয়ে কোড লেখা দ্রুত করে।

🔸 Redux Toolkit কী?
Redux Toolkit হচ্ছে Redux ব্যবহারের জন্য একটি সরকারিভাবে সমর্থিত লাইব্রেরি, যা Redux-এর জটিলতা সরিয়ে দেয়।

Redux Toolkit (RTK) কি?
Redux Toolkit হলো Redux-এর একটি সরলীকৃত সংস্করণ। এটি নিম্নলিখিত সুবিধা দেয়:

createSlice: reducer + action একসাথে তৈরি করে।

configureStore: Redux store সেটআপ সহজ করে।

immer integration: state mutate করা যায় (অবশ্য আসলে immutable ভাবেই কাজ করে)।

🔸 কেন Redux Toolkit ব্যবহার করবো?
Redux আগে ব্যবহার করতে গেলে অনেক কোড লিখতে হতো (boilerplate)। Redux Toolkit এগুলো সহজ করে দিয়েছে।

🔸 Redux Toolkit এর মূল অংশ:
configureStore() → Store তৈরি করে

createSlice() → Action এবং Reducer একসাথে তৈরি করে

createAsyncThunk() → Async API call সহজ করে

🧠 ৩. Short Summary
Redux Toolkit হচ্ছে Redux ব্যবহারের সবচেয়ে আধুনিক, সহজ এবং boilerplate-free উপায়। এটি slice ভিত্তিক মডিউল তৈরি করে অ্যাপকে ম্যানেজ করা সহজ করে তোলে।

১. Redux Toolkit ইনস্টল করা:
npm install @reduxjs/toolkit react-redux

২. Store তৈরি:
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

৩. Slice তৈরি:
// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

৪. React Component এ ব্যবহার:
// Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

৫. AsyncThunk উদাহরণ (API থেকে data আনতে):
// features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: { users: [], status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      });
  },
});

export default userSlice.reducer;

উদাহরণ ১: বেসিক Redux Toolkit সেটআপ
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });

// Usage
store.dispatch(counterSlice.actions.increment());
console.log(store.getState()); // { value: 1 }



❓ ৯. Practice Questions with Answers
configureStore() কেন দরকার?

Store তৈরি ও middleware যুক্ত করার জন্য।

Slice কী?

Redux Toolkit এর অংশ যেখানে action + reducer একসাথে লেখা হয়।

createAsyncThunk() কী কাজে লাগে?

Async API call এর জন্য।

💼 ১১. Common Interview Questions and Answers
Redux Toolkit কী এবং এর উপকারিতা কী?

এটি Redux ব্যবহারকে সহজ ও কম কোডে কার্যকর করে।

Redux Toolkit এর প্রধান API কোনগুলো?

configureStore, createSlice, createAsyncThunk

Redux Middleware কিভাবে কাজ করে?

Redux Toolkit এ অটো middleware থাকে যেমন thunk।

Q: Redux vs Redux Toolkit পার্থক্য কী?
A: Redux Toolkit Redux-এর simplification, boilerplate কমায়, createSlice, RTK Query দেয়।