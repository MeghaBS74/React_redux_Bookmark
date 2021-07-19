import React, { Component } from 'react'
import NewBookmark from '../components/NewBookmark'
import { connect } from 'react-redux'
import { addAction } from '../actions/Aindex'

const mapDispatchToProps = dispatch => {
    return{
        passBookMark : bookMark => {
            dispatch(addAction(bookMark));
        }
    }
};


export default connect (
    null,
    mapDispatchToProps)
    (NewBookmark)
    ;