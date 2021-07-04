import React from 'react';
import Portfolioitems from '../Portfolioitems';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfoliolanding (props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <Portfolioitems category={currentCategory.name} />
    </section>
  );
}

export default Portfoliolanding;
