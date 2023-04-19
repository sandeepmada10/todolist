import React, { useState } from 'react';
import All from '../components/All';
import Ex from '../Ex';
import '../index.css'
import TodoUseReducer from '../Todo/TodouseReducer';
import TodoList from '../TodoList/TodoList';

export default function StatusOfList({ action, setFilter }) {
  return (
    <div>
      <button className='buttons' onClick={() => setFilter(action)}>{action}</button> &nbsp;&nbsp;

      {/* <button>All</button>
      <button>Active</button>
      <button>Completed</button> */}
    </div>
  )
}
