import React from 'react';
import { Link } from 'react-router';
import { updateCard, setShowBack } from '../actions';
import { connect } from 'react-redux';

const MS_IN_DAY = 86400000;

const mapStateToProps = ({ cards, showBack }, { params: { deckId } }) => ({
  showBack,
  deckId,
  card: cards.filter(card => card.deckId === deckId &&
  (!card.lastStudiedOn || (new Date - card.lastStudiedOn) / MS_IN_DAY >= card.score))[0]
});

const mapDispatchToProps = dispatch => ({
  onStudied: (cardId, score) => {
    var now = new Date();
    now.setHours(0, 0, 0, 0);
    dispatch(updateCard({ id: cardId, score, lastStudiedOn: +now }));
    dispatch(setShowBack());
  },
  onFlip: () => dispatch(setShowBack(true))
});