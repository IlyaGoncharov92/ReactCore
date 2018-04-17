import React, { Component } from 'react';
import { connect }          from "react-redux";
import './App.css';

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

const mapStateToProps = function (state) {
  console.log('mapStateToProps', state);
  return {articles: state.articles};
};

export const List = connect(mapStateToProps)(ConnectedList);

