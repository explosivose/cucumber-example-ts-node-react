import React from 'react';
import { render as testRender } from '@testing-library/react';
import App from '../../../../frontend/src/App';

export const render = () => {
  testRender(
    <App />
  );
};
