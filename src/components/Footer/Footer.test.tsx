import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Footer from './Footer';

describe('Footer', () => {
  it('should send string by click', () => {
    const { getByRole } = render(<Footer />);
    const stringToTest = 'Test string';
    const inputEl = getByRole('textbox');
    const button = getByRole('button');

    userEvent.type(inputEl, stringToTest);

    expect(inputEl.value).toEqual(stringToTest);

    userEvent.click(button);

    expect(inputEl.value).toEqual('');
  });
});