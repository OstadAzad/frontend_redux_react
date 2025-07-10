🔥 ১. Short Notes – Quick Key Points
Redux হল একটি state management library যা React এর বাইরে থেকেও ব্যবহার করা যায়।

এটি ব্যবহার হয় complex ও scalable application গুলোর জন্য।

Redux এ data এক জায়গা থেকে control হয়: Single Source of Truth।

Action → Reducer → Store → View (এই flow-তে কাজ করে)।

যখন component অনেক বেশি হয়ে যায় তখন props drilling সমস্যার সমাধান Redux করে।

✅ 1. Short Notes – Key Points
Redux হলো একটি JavaScript লাইব্রেরি যা অ্যাপ্লিকেশনের state ম্যানেজ করার জন্য ব্যবহৃত হয়।

এটি মূলত React এর সাথে ব্যবহার করা হয়, তবে অন্য framework বা vanilla JS এর সাথেও ব্যবহার করা যায়।

Redux-এর তিনটি মূল অংশ: Store, Action, এবং Reducer।

Predictable state management: সবকিছুই এক জায়গা (store) থেকে নিয়ন্ত্রিত হয়।

Component গুলো cleaner হয় এবং state centralized থাকে।

🧠 Redux কি?
Redux হচ্ছে JavaScript এর একটি state management tool। React Component গুলোর মধ্যে state শেয়ার করার জন্য Redux ব্যবহৃত হয়।

🔹 Redux কী?
Redux হলো এমন একটা state management লাইব্রেরি, যেটা আমাদের ওয়েব অ্যাপ্লিকেশনে ডাটা বা state কিভাবে বদলাবে তা নিয়ন্ত্রণ করে।

🎯 Redux কেন প্রয়োজন?
যখন:

আপনার অ্যাপ অনেক বড় হয়,

একাধিক কম্পোনেন্টে একই state দরকার হয়,

props দিয়ে data পাঠানো জটিল হয়,

একটি central জায়গা থেকে state control করতে চান—

তখন Redux ব্যবহারের উপযোগিতা বেড়ে যায়।

🔹 কেন Redux ব্যবহার করবেন?
React-এ ছোট প্রজেক্টে useState যথেষ্ট। কিন্তু বড় অ্যাপে যখন অনেক কম্পোনেন্ট একই ডাটা শেয়ার করে, তখন সবকিছু track করা কঠিন হয়ে যায়। Redux সেই সমস্যার সমাধান করে।

🧭 Redux এর কাজের ধাপ:
Action – ইউজার বা সিস্টেমের করা কোনো কাজ বোঝায়।

Reducer – action অনুযায়ী নতুন state তৈরি করে।

Store – পুরো অ্যাপের state ধরে রাখে।

View – Component গুলো updated state অনুযায়ী রেন্ডার হয়।

🔹 Redux-এর মূল ৩ অংশ:
Store: পুরো অ্যাপের state রাখে।

Action: কী করতে চাচ্ছেন সেটা বোঝায়।

Reducer: কীভাবে state পরিবর্তন হবে সেটা বলে।

✨ ৩. Short Summary – Recap
Redux central ভাবে state ম্যানেজ করে।

Data flow একমুখী হওয়ায় ডিবাগ করা সহজ হয়।

Complex app-এ Redux ব্যবহারে সহজতা আসে।

✅ 3. Short Summary
Redux হলো একটি predictable state container যা বড় স্কেল অ্যাপে ডাটা ম্যানেজমেন্টকে সহজ করে। এটি component থেকে state আলাদা করে রাখে এবং সব কিছু এক জায়গা (store) থেকে নিয়ন্ত্রণ করে।

✅ Example 1: Counter App
// action
const increment = { type: 'INCREMENT' };

// reducer
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}
📌 বোঝার পয়েন্ট: একদম সাধারণ reducer, যেখানে state হিসেবে একটি সংখ্যা আছে।

উদাহরণ ১: কাউন্টার অ্যাপ
// অ্যাকশন
{ type: 'INCREMENT' }

// রিডিউসার
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    default: return state;
  }
};

✅ Example 1: Store তৈরি করা
import { createStore } from 'redux';

const reducer = (state = { count: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return { count: state.count + 1 };
  }
  return state;
};

const store = createStore(reducer);
📘 ব্যাখ্যা: এখানে store বানানো হয়েছে এবং reducer দিয়ে বলা হয়েছে কীভাবে state বাড়বে।

✅ Example 2: Action with Payload
const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: text,
});
📌 বোঝার পয়েন্ট: Action object এ extra data (payload) পাঠানো।

উদাহরণ ২: টুডু লিস্ট
// অ্যাকশন
{ type: 'ADD_TODO', text: 'Learn Redux' }

// রিডিউসার
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': return [...state, { text: action.text }];
    default: return state;
  }
};

📌 Exercise 1:
👉 একটি counterReducer বানান যা INCREMENT ও DECREMENT action হ্যান্ডেল করে।

Solution:
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}


প্রজেক্ট ১: কাউন্টার অ্যাপ
টাস্ক:

+ বাটনে ক্লিক করলে কাউন্ট বাড়বে, - বাটনে ক্লিক করলে কমবে।
সমাধান:
// Redux Setup
import { createStore } from 'redux';

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const store = createStore(counterReducer);

// React Component
store.subscribe(() => {
  document.getElementById('count').innerText = store.getState();
});

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

✅ ৯. Practice Questions with Answers
প্রশ্ন ১: Redux এর ৩টি core অংশ কী?
উত্তর: Action, Reducer, Store

প্রশ্ন ২: Redux এ state কোথায় থাকে?
উত্তর: Store এ

প্রশ্ন ৩: Redux asynchronous middleware এর নাম কী?
উত্তর: redux-thunk

🎙 ১১. Interview Questions & Answers
Q: Redux কেন React এ দরকার হয়?
A: Component গুলোর মধ্যে centralized state ম্যানেজ করতে Redux ব্যবহার হয়।

Q: Reducer কি pure function?
A: হ্যাঁ, Reducer একটি pure function যা action অনুযায়ী নতুন state return করে।

=====We will learn in redux======

Redux toolkit(local state)
and
RTK Query(data fetching) 

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

✅ 1. Short Notes – Key Points for Quick Understanding
RTK Query Redux Toolkit-এর অংশ।

Data fetch, caching, updating, ও background syncing সহজ করে।

Manual reducers বা thunk লিখার প্রয়োজন নেই।

createApi() function ব্যবহার করে API slice বানানো হয়।

Auto-generated hooks দিয়ে API call করা যায়।

🔹 RTK Query কী?
RTK Query হচ্ছে Redux Toolkit-এর একটি library যা API data fetch এবং management কে automate করে। এটি REST বা GraphQL API-র সাথে কাজ করতে পারে। আপনি সহজেই API calls করতে পারবেন যেমন: useGetPostsQuery, useAddPostMutation ইত্যাদি।

RTK Query কি?
RTK Query হলো Redux Toolkit-এর একটি পাওয়ারফুল ফিচার যেটি API কল ম্যানেজ করে:

অটোমেটিক caching।

Loading/error states হ্যান্ডেল করা।

Data re-fetching (polling, cache invalidation)।

🔹 কেন ব্যবহার করবেন?
Manual reducers বা thunk লেখার ঝামেলা কমে।

API call, loading, error handling – সব অটো।

Data caching এবং refetch intelligent উপায়ে হয়।

✅ 3. Short Summary – Key Takeaways
RTK Query হল Redux-এর জন্য তৈরি এক আধুনিক, lightweight এবং powerful data-fetching টুল।

আপনি সহজে createApi() দিয়ে endpoints বানিয়ে নিতে পারেন।

এটা auto hook তৈরি করে, যা দিয়ে component থেকে সহজে API call করা যায়।

🟩 Example 1: Basic Setup
// services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
  }),
});
export const { useGetPostsQuery } = api;

🟩 Example 2: Add to Store
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

🟩 Example 3: Use Hook in Component
// PostsList.js
import { useGetPostsQuery } from './services/api';

const PostsList = () => {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  return (
    <ul>
      {data.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
};

🟩 Example 4: Mutation (POST data)
addPost: builder.mutation({
  query: (newPost) => ({
    url: 'posts',
    method: 'POST',
    body: newPost,
  }),
}),
const [addPost] = useAddPostMutation();
addPost({ title: "Hello", body: "World" });

🟩 Example 5: Auto Caching and Refetch
useGetPostsQuery(undefined, {
  pollingInterval: 3000, // auto refetch every 3s
});

উদাহরণ ২: RTK Query দিয়ে API কল
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
  }),
});

const { useGetPostsQuery } = api;

উদাহরণ ৩: React-এ RTK Query ব্যবহার
import { useGetPostsQuery } from './api';

function PostsList() {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <ul>
      {data.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}

উদাহরণ ৪: Mutation (POST request)
const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    addPost: builder.mutation({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
});

const { useAddPostMutation } = api;

উদাহরণ ৫: Tag-based Cache Invalidation
const api = createApi({
  // ...
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
      providesTags: ['Posts'],
    }),
    addPost: builder.mutation({
      query: (newPost) => ({ /*...*/ }),
      invalidatesTags: ['Posts'], // Cache clear করে নতুন ডেটা আনবে
    }),
  }),
});

প্রজেক্ট ১: কাউন্টার অ্যাপ (Redux Toolkit)
টাস্ক: একটি কাউন্টার অ্যাপ বানান যেখানে increment, decrement বাটন থাকবে।
সমাধান:
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({ reducer: counterReducer });
export default store;

// App.js
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function App() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

প্রজেক্ট ২: ব্লগ পোস্ট ফেচ (RTK Query)
টাস্ক: JSONPlaceholder API থেকে পোস্ট ফেচ করে দেখান।
সমাধান:
// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
  }),
});

export const { useGetPostsQuery } = api;

// App.js
import { useGetPostsQuery } from './api';

function App() {
  const { data, isLoading, error } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

প্রজেক্ট ৩: Todo অ্যাপ (RTK Query + Mutation)
টাস্ক: Todo যোগ করা এবং দেখানো।
সমাধান:
// api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => 'todos',
      providesTags: ['Todos'],
    }),
    addTodo: builder.mutation({
      query: (text) => ({
        url: 'todos',
        method: 'POST',
        body: { text },
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = api;

// App.js
import { useState } from 'react';
import { useGetTodosQuery, useAddTodoMutation } from './api';

function App() {
  const [text, setText] = useState('');
  const { data: todos } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

✅ 9. Practice Questions with Answers
Q1: createApi() কেন ব্যবহার করা হয়?
Ans: RTK Query এর মাধ্যমে API slice তৈরি করার জন্য।

Q2: কোন hook data fetch করে?
Ans: useGetPostsQuery() (or similar)।

Q3: কিভাবে POST request করা হয়?
Ans: builder.mutation() এবং auto-generated useAddPostMutation দিয়ে।

✅ 11. Common Interview Questions
Q1: RTK Query কীভাবে Redux store এর সাথে যুক্ত হয়?
Ans: reducerPath ও api.middleware store এ যুক্ত করে।

Q2: mutation এবং query এর মধ্যে পার্থক্য কী?
Ans: query হল GET/READ data, mutation হল POST/UPDATE/DELETE।

Q3: RTK Query-তে caching কীভাবে কাজ করে?
Ans: query key অনুযায়ী intelligent caching করে।

Q: RTK Query caching কিভাবে কাজ করে?
A: একই endpoint কল হলে cached ডেটা রিটার্ন করে, providesTags/invalidatesTags দিয়ে ম্যানেজ করে।

