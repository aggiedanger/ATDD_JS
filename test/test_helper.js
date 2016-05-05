import ReactDOM from 'react-dom';
import React from 'react';
import jsdom from 'jsdom';
import _$ from 'jquery'; // using underscore to tell jquery to make use of the jsdom window and not reach out to some global object
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TestUtils from 'react-addons-test-utils';
import reducers from '../src/reducers';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';

// Set up testing environment like a browser in the command line
// window = global in node_modules
global.document = jsdom.jsdom('<!doctype html><body></body></html>');
global.window = global.document.defaultView;

// have to be explicit with jquery here
const $ = _$(global.window);

// Build 'renderComponent' helper that should render a given react element
function renderComponent(ComponentClass, props={}, state={}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}


// Build helper for simulating events
$.fn.simulate = function(eventName, value) {

  // 'this' is a reference to the selected html element
  if(value) {
    this.val(value);
  }

  //trigger event on the first element of the array
  TestUtils.Simulate[eventName](this[0]);
}

// Set up chai-jquery
chaiJquery(chai, chai.util, $);


export { renderComponent, expect };
