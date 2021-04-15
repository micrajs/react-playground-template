import React from 'react';
import { render as RTLRender, RenderOptions, RenderResult } from '@testing-library/react';

const see = ({ queryAllByText }: RenderResult) => (query: string) =>
  queryAllByText((content) => content === query).length > 0;

export function render(
  Component: React.ComponentType,
  Providers: React.ComponentType = ({ children }) => <>{children}</>,
  options?: Omit<RenderOptions, 'queries'>,
) {
  const result = RTLRender(
    <Providers>
      <Component />
    </Providers>,
    options,
  );

  return {
    ...result,
    see: see(result),
  };
}
