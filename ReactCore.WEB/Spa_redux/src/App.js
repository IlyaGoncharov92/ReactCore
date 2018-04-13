import React, { Component } from 'react';
import { connect }          from "react-redux";
import './App.css';

const mapStateToProps = state => {
  console.log('mapStateToProps', state);
  return {articles: state.articles};
};

const ConnectedList = ({articles}) => (
  <ul>
    {
      articles.map(el => (
        <li key={el.id}>
          {el.title}
        </li>
      ))
    }
  </ul>
);

export const List = connect(mapStateToProps)(ConnectedList);

