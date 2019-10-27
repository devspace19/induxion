import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash';

import * as Action from './redux/actions';

const HOCComponent = Component => {
  // map state to props 
  let mapStateToProps = state => state;
  
  if (Component.getStates) {
    const states = Component.getStates;

    mapStateToProps = mapState => {
      const props = {};

      Object.keys(states).map(state => {
        props[state] = get(mapState, `${states[state]}`);
      });

      return props;
    }
  }

  // map dispatch to props 
  let mapDispatchToProps = undefined;

  if (Component.getActions) {
    const actions = Component.getActions;

    actions.map(action => {
      props[action] = (...args) => dispatch(Action[action](...args));
    });

    return props;
  }

  class MainComponent extends Component {
    render = () => <Component {...this.props} />;
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainComponent);
};

export default HOCComponent;
