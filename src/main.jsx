import React from 'react'
import ReactDOM from 'react-dom/client'
import Book from './Book.jsx'
import Group from './Group.jsx'
import Recipe from './Recipe.jsx'
import './index.css'

const reviews = [
  { text: "Harry Potter and the Philosopher's Stone is a huge treasury of fantasy and wisdom. This book fascinates, educates, and inspires."  },
  { text: "It is impossible to leave it aside, it becomes part of the reader's heart, filling it with its own magic and unique atmosphere." },
  { text: "It has an impact on everyone, whether on children who are discovering this amazing world for themselves for the first time, or on adults who want to immerse themselves in childhood." }
];
const members = [
  {name: "Agnetha Faltskog", role: "Vocal"},
  {name: "Anni-Frid Lyngstad", role: "Vocal"},
  {name: "Bjorn Ulvaeus", role: "Guitarist"},
  {name: "Benny Andersson", role: "Keyboardis"},
];
const albums = [
  {name: "ABBA", img: "/ABBA.jpg"},
  {name: "The Album", img: "/Album.jpg"},
  {name: "Waterloo", img: "/Waterloo.jpg"},
];

const components= [
  {name: "Flour", quantity: "250 g"},
  {name: "Kefir", quantity: "400 ml"},
  {name: "Water", quantity: "200 ml"},
  {name: "Eggs", quantity: "2 pcs."},
  {name: "Sunflower oil", quantity: "1 tbsp."},
  {name: "Sugar", quantity: "1.5 tbsp."},
  {name: "Salt", quantity: "0.5 tsp"},
  {name: "Soda", quantity: "0.5 tsp"},
  {name: "Butter", quantity: "50 g"},
];

const consistency = [
  { text: "Prepare the syrup. Pour 200 ml of water into the saucepan, add 3 tbsp. sugar and 0.5 tsp. salt Bring to a boil, turn the heat to medium and cook until the sugar dissolves. Leave the syrup to cool." },
  { text: "Make pancake batter. Pour 400 ml of 2.5% kefir into a deep bowl, beat 2 eggs and add 2 tbsp. sunflower oil. Mix thoroughly with a whisk until the ingredients are combined." },
  { text: "Gradually, in small portions, add 250 g of wheat flour and add 0.5 tsp. of soda. Stir with a whisk so that no lumps remain. Your mixture should resemble the consistency of thick sour cream." },
  { text: "Pour the cooled syrup from the saucepan into it in a thin stream and stir constantly with a whisk. Now your pancake batter is runny. Leave it to rest for 20 minutes." },
  { text: "Heat a non-stick pan, grease it with a small amount of sunflower oil using a cooking brush or a piece of lard." },
  { text: "Ladle the pancake batter into the middle of the pan, tilt the pan from side to side so that it spreads over the entire surface. Fry the pancakes on both sides until golden brown and place them on a plate one on top of another" },
  { text: "Serve them warm with your favorite toppings, eat with coffee, tea, ryazhenka, cocoa or milk. Everything will be delicious!" },

];
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Book book_name="Harry Potter" author_name="J. K. Rowling" genre = "Fantasy" reviews={reviews} page_count={223}/>
    <Group name="ABBA" members={members} albums={albums} />
    <Recipe name="Pancakes" components={components} consistency={consistency} photo="/pancake.jpg"/>
  </React.StrictMode>,
)