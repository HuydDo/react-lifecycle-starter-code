import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Instructions for react-lifecycles challenge:
// Comment out the RandomKoala from App. Our next demo is to create a widget that switches between showing a clock and a stock ticker on click. 
//WidgetSelector should be a child of app which has siblings of DigitalClock and StockTicker.
// Our app should have a state which determines which widget (clock or stock) is currently showing. App should pass down to WidgetSelector 
//a function which can change the App state. WidgetSelector will call this on button click. If you want to console your lifecycle methods again, you can
// demonstrate that the component unmounts when the switch happens.
// Start building the DigitalClock which we will use to demonstrate componentWillUnmount. This component will hold a time state which we will 
//initialize in the constructor. Then we will setInterval to update this state once a second in componentDidMount.
// Start building the StockTicker to demonstrate componentDidUpdate. Create a function which will randomly generate a two-digit stock price. 
//Like our clock, setInterval so the stock price changes every second. You want the price to show green if it has gone up or red if it has gone down. 
//This means you will need access to the prevState and current state in order to compare the prices. Using componentDidUpdate we can compare both states. 
//Based on the difference, we can update a second state which says what color our ticker should be.