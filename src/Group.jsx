import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Group({ name, members, albums }) {
  return (
  <div>
    <h2>Group: {name}</h2>
    <div>
      <h3>Members:</h3>
      <ul>
        {members.map((member, index) => (
        <li key={index}>
          {member.name} - {member.role}
        </li>
        ))}
      </ul>
    </div>
    <h3>Albums: </h3>
    <ul>
      {albums.map((album, index) => (
        <li key={index}>
          <h4> {album.name} </h4>
          <img src={album.img} width={250} height={250}/>
        </li>
      ))}
    </ul>
  </div>
  );
}
export default Group