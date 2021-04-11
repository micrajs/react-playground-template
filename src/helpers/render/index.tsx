import React from 'react';
import { render as RTLRender, RenderResult } from '@testing-library/react';

const see = ({ queryAllByText }: RenderResult) => (query: string) => queryAllByText((content) => content === query).length > 0;

export function render(Component: React.ComponentType, Providers: React.ComponentType = ({ children }) => <>{children}</>) {
  const result = RTLRender(<Providers><Component /></Providers>);
  return {
    ...result,
    see: see(result),
  }
};
