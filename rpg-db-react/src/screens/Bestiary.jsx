import * as React from 'react';
import Breadcrumb from '../components/BreadCrumb'
import MonsterDescription from '../components/MontersDescription';
import { monsterRequest } from '../api/BestiaryRequests'

const monster = monsterRequest(1);


export default function Bestiary() {
  return (
    <div>
      <Breadcrumb pages={[
        {
          name: 'Pesquisa', link: '', selected: false
        },
        {
          name: 'Bestiário', link: '', selected: true
        }
      ]} />
      <MonsterDescription monster={monster} alt='Monster image' />
    </div>
  );
}