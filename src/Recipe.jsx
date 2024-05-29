import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Recipe({ name, components, consistency, photo}) {
  return (
    <div>
      <h2>Recipe: {name}</h2>
      <div>
        <h3>Components:</h3>
        <ul>
          {components.map((component, index) => (
          <li key={index}>
            {component.name} - {component.quantity}
          </li>
          ))}
        </ul>
      </div>
      <h3>Consistency: </h3>
      <ol>
        {consistency.map((one_consistency, index) => (
        <li key={index}>
          {one_consistency.text}
        </li>
        ))}
      </ol>
      <img src={photo} width={350} height={250} alt={name} />
    </div>
  );
}
export default Recipe