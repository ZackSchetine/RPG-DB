import * as React from 'react';
import Breadcrumb from '../components/BreadCrumb'
import MonsterDescription from '../components/MontersDescription';
import { monsterRequest } from '../api/BestiaryRequests'
import { useParams } from "react-router-dom";


export default function Bestiary() {

  const { id } = useParams();

  const monster = monsterRequest(id);

  if (monster == null) {
    console.log("Monstro com ID inválido\nImplementar Redirect");
  }

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