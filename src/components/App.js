import React from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import { connect } from 'react-redux';

const mapStateToProps = (props, {params: {deckId} }) => ({
  deckId
});

const App = (deckId, props) => {
  return (
    <div className="app">
      <Toolbar deckId={deckId} />
      <Sidebar />
      {props.children}
    </div>
  );
};

export default connect(mapStateToProps)(App);