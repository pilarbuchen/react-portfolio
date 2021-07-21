import React, { useState } from 'react';
import Nav from './components/Nav';
import Portfoliolanding from './components/Portfoliolanding';
import About from "./components/About"
import ContactForm from "./components/ContactForm"

function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'List of all of my boot camp projects',
    },
    { name: 'Resume', description: 'Delicious delicacies' },

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);

  return (
    <div>
      <Nav>
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      </Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfoliolanding currentCategory={currentCategory}></Portfoliolanding>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
