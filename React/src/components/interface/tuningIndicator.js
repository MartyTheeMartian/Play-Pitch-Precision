import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushNoteToArray,
        toggleAudioCapture } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    keyStrokeEvents: state.keyStrokeEvents,
    vocalInputResults: state.vocalInputResults,
    exerciseScores: state.exerciseScores,
    greenTime: state.greenTime,
    targetNote: state.targetNote,
    targetNoteIndex: state.targetNoteIndex,
    sungNote: state.sungNote,
    recordingStatus: state.recordingStatus
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({pushNoteToArray, toggleAudioCapture}, dispatch);
};


class TuningIndicator extends Component {
  render() {
    return (
      <div className="container">
        tuningIndicator works!
        {/* <div>
          <div class="tuner">
          <div class="wheel"></div>
          <div class="arrow"></div>
          <div class="freq">440<span>Hz</span></div>
          <svg class="flat" xmlns="http://www.w3.org/2000/svg">
          	<path fill="white" d="M1.349,0v16.376c1.525-1.365,3.251-2.063,5.177-2.095c1.172-0.016,2.176,0.45,3.011,1.397
          		c0.786,0.899,1.204,1.942,1.253,3.131c0.031,0.899-0.193,1.935-0.675,3.106c-0.192,0.466-0.569,0.972-1.132,1.518
          		c-0.306,0.288-0.764,0.714-1.373,1.276C5.073,26.555,2.536,28.426,0,30.321V0H1.349z M5.515,17.532
          		c-0.434-0.481-0.98-0.723-1.638-0.723c-0.834,0-1.493,0.467-1.974,1.397c-0.371,0.707-0.554,2.394-0.554,5.058v4.408
          		c0.016,0.127,0.971-0.707,2.866-2.506c1.011-0.963,1.676-2.087,1.999-3.371c0.128-0.529,0.193-1.043,0.193-1.542
          		C6.407,19.114,6.108,18.207,5.515,17.532z"/>
          </svg>
          <svg class="sharp" xmlns="http://www.w3.org/2000/svg">
          	<path fill="white" d="M0,9.692l2.074-0.676V1.217h1.397v7.344L8.138,7.04V0h1.397v6.584l1.871-0.61v4.979l-1.871,0.61v7.153
          		l1.871-0.611v4.955l-1.871,0.61v7.866H8.138v-7.395l-4.666,1.506v7.105H2.074v-6.65L0,26.778v-4.979l2.074-0.676v-7.128L0,14.672
          		V9.692z M8.138,12.019L3.472,13.54v7.128l4.666-1.498V12.019z"/>
          </svg>

          </div>

          <script src="shims.js"></script>
          <script src="../../../../vendors/mike.js/mike.js"></script>
          <script src="../../../../vendors/pitch.js/src/pitch.js"></script>
          <script src="pitch-logic.js"></script>
        </div> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TuningIndicator);
