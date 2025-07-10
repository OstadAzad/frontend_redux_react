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
