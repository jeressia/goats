import React from 'react';

import goatShape from '../../helpers/propz/goatShape';
import PropTypes from 'prop-types';
import Goat from '../Goat/Goat';

import './GoatCorral.scss';

class GoatCorral extends React.Component {
  static propTypes {
    goats: PropTypes.arrayOf(goatShape)
  }
  render() {
    const { goats } = this.props;
    const makeGoats = goats.map(goat => (
      <Goat key={goat.id} goat={goat} />
    ));
    return (
      <div className="GoatCorral d-flex flex-wrap">
        { makeGoats }
      </div>
    );
  }
}

export default GoatCorral;
