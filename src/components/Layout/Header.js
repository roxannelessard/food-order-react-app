import { Fragment } from 'react';
// Fragments let you group a list of children without adding extra nodes to the DOM.
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt='Table with food'/>
    </div>
  </Fragment>
};

export default Header;
