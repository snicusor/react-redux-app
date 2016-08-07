import React from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import { connect } from 'react-redux';

const mapStateToProps = (props, {params: {deckId} }) => ({
  deckId
});

const App = (props) => {
  return (
    <div className="app">
      <Sidebar />
      <Toolbar />
      {props.children}
    </div>
  );
};

export default App;