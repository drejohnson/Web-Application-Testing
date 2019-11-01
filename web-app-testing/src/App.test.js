import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Render App', () => {
  it('renders App without crashing', () => {
    render(<App />);
  });
});

describe('Increment Strikes', () => {
  it('it increments Strike count by 1 when Strike button is clicked', () => {
    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId('strike-button'));
    expect(getByTestId('strikesCount').textContent).toEqual('1');
  });
});

describe('Reset Balls and Strikes count', () => {
  it('it increments Balls and Strikes count by 2 then resets the count to 0 when Hit button is clicked', () => {
    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId('strike-button'));
    fireEvent.click(getByTestId('strike-button'));
    expect(getByTestId('strikesCount').textContent).toEqual('2');

    fireEvent.click(getByTestId('ball-button'));
    fireEvent.click(getByTestId('ball-button'));
    expect(getByTestId('ballsCount').textContent).toEqual('2');

    fireEvent.click(getByTestId('hit-button'));
    expect(getByTestId('strikesCount').textContent).toEqual('0');
    expect(getByTestId('ballsCount').textContent).toEqual('0');
  });
});
