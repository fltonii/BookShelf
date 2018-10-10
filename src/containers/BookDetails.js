import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class BookDetails extends Component {
  render() {
    return (
      <div>
        {this.props.activeBook ? (
          <h3>{this.props.activeBook.title}</h3>
        ) : (
          <h3>Select a Book</h3>
        )}
      </div>
    );
  }
}

BookDetails.propTypes = {
  activeBook: PropTypes.object
};

// wireing redux stuff
function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetails);
