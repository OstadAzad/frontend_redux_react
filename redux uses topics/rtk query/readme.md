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