import { renderHook as RTLRenderHook } from '@testing-library/react-hooks';
import React from 'react';

export function renderHook<R>(
  hook: () => R,
  Component: React.ComponentType<any> = ({ children }) => <>{children}</>,
) {
  return RTLRenderHook(hook, { wrapper: Component });
};
