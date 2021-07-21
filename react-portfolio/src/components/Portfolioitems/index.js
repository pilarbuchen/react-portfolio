import React, { useState } from 'react';

const Portfolioitems = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'Resume',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Password Generator',
      category: 'Portfolio',
      description: 'For this challenge, I made a password generator. When clicking the button to obtain the password, the user will find that a series of different questions will prompt. Once those questions have been answered, the password will be generated.',
      link: "https://pilarbuchen.github.io/module-challenge3/", 
    },
    {
      name: 'Team Building',
      category: 'Portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/large/${category}/${i}.png`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolioitems;
