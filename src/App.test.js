import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup, 
  render,
  screen
} from '@testing-library/react';
import App from './App';
import { GlobalStyles } from './Styles/global';
import CTAButton from './components/Button/CTAButton';
// TODO ReactDOM.render deprecated
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders global styles', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GlobalStyles />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText("Hi, it's")).toBeInTheDocument();
});

describe('the component should render', () => {
  beforeEach(cleanup)
  it('renders call to action button', () => {
    render(<CTAButton to="home" />)
  })
})