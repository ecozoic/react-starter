/* @flow */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

/**
 * About page component.
 * @extends React.Component
 */
class About extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  /**
   * Render method.
   */
  render() {
    const { dispatch } = this.props;

    return (
      <div>
        <h1>About</h1>
        <button onClick={() => dispatch(push('/'))}>Go Home</button>
      </div>
    );
  }
}

export const AboutContainer = connect()(About);
