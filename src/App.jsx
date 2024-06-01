import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import LushCardData from './LushCardData'
import Card from './Card'
import { useState } from 'react';

// Skapa LushCard komponenten
const LushCard = ({ background, title, paragraph }) => {
  return (
    <div className="LushCard-container">
      <div className="LushCard" style={{ backgroundColor: background }}></div>
      <h2 className="card-title">{title}</h2>
      <p className="card-paragraph">{paragraph}</p>
    </div>
  );
};

function App() {
  console.log(Navbar);
  const [count, setCount] = useState(0);


  const shop = { url: '/shop', text: 'Shop' }
  const home = { url: '/home', text: 'Home' }
  const info = { url: '/contact-me', text: 'Contact' }
  const profile = { url: '/profile', text: 'Profile' }
  const links = [home, shop, info, profile]

  const navbarProps = {
    logo: '/logo.png',
    listOfLinks: links
  }

  const data = [
    {
      title: 'Card with paragraph',
  
      children: <p>I am a paragraph</p>,
    },
  
    {
      title: 'Card with div',
  
      children: <div>I am a div</div>,
    },
  
    {
      title: 'Card with button',
  
      children: <button>I am a button</button>,
    },
  ];

  const handleCardClick = (title) => {
    console.log({title})
  }


  return (
    <div className='App'>

      <Navbar { ...navbarProps } />
      <main>
        <h1>{ count }</h1>
        <button onClick = { () => setCount (count + 1) }>+</button>
        {/* {data.map((element, i) => {
          return <Card handleClick={handleCardClick} title= { element.title } key= { i }>{ element.children }</Card>
        }) } */}
      </main>
      {/* <div className="card-container">
        {LushCardData.map((card, index) => (
          <LushCard
            key={index}
            background={card.background}
            title={card.title}
            paragraph={card.paragraph}
          />
        ))}
      </div> */}
      <Footer />
    </div>
    
  )
}

export default App
