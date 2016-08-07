import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';

const mapStateToProps = (props, {params: {deckId} }) => ({
  deckId
});

const App = (props) => {
  return (
    <div className="app">
      <Sidebar />
      <h1>Deck {props.deckId} </h1>
      {props.children}
    </div>
  );
};

export default App;