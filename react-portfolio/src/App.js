import React, { useState } from 'react';
import Nav from './components/Nav';
import Portfoliolanding from './components/Portfoliolanding';

function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'Resume', description: 'Delicious delicacies' },

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav>
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      </Nav>
      <main>
      <Portfoliolanding currentCategory={currentCategory}></Portfoliolanding>
      </main>
    </div>
  );
}

export default App;
