import * as React from 'react';
import NaviBar from '../components/NaviBar';
import {dropDownRequest} from '../api/GeneralRequests'

export default function Home() {
  return (
    <div>
      <NaviBar activeTab="summary" itensList={dropDownRequest()}/>
    </div>
  );
}