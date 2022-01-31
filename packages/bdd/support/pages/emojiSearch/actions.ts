import { act, fireEvent, screen } from '@testing-library/react';

export const changeSearchInput = (input: string): void => {
  const searchInput = screen.getByRole('textbox');
  act(() => {
    fireEvent.change(searchInput, {target: { value: input } });
  })
}
