import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ title, author }) => (
  <div>
    <h3>{title}</h3>
    <p>{author}</p>
  </div>
);

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
