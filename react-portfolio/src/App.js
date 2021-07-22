import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfoliolanding from './components/Portfoliolanding';
import ContactForm from './components/ContactForm';

function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'Resume', description: 'Portraits of people in my life' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  const [aboutSelected, setAboutSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>  
            <About></About>
            <Portfoliolanding currentCategory={currentCategory}></Portfoliolanding>
          </>
        ) : (
          <>
          <ContactForm></ContactForm>
          </>
        )};
      </main>
    </div>
  );
}

export default App;