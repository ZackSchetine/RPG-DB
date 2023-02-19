import * as React from 'react';
import NaviBar from '../components/NaviBar';
import {dropDownRequest} from '../api/GeneralRequests'
import TitleImage from '../components/TitleImage';

export default function Home() {
  return (
    <div>
      <NaviBar activeTab="summary" itensList={dropDownRequest()}/>
      <TitleImage title="D&D Next" src='https://mloz35cl5wye.i.optimole.com/cb:s357.4350f/w:800/h:560/q:90/https://www.slugmag.com/wp/wp-content/uploads/2015/02/9313-DnD_PHB_Art.jpg' alt='System representation'/>
    </div>
  );
}