import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import logo from 'assets/img/logo.svg';
import ListItem from 'components/list-item';
import Button from 'components/button';
import { increment, decrement } from 'redux/slices/counter.slice';

import './Popup.css';

const data = ['Tailwind ready', 'Redux ready'];

const Popup = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const counter = state.counter;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-blue-500 mb-3">Welcome to Extension Boilerplate</p>
        {data.map((item, index) => {
          return <ListItem key={index} title={item} />;
        })}
        <div className="mt-6">Counter Value: {counter.value}</div>
        <div className="flex space-x-4 mt-3">
          <Button
            onClick={() => {
              dispatch(increment());
            }}
          >
            Add
          </Button>
          <Button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Minus
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Popup;
