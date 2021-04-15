import React from 'react';
import { renderHook as RTLRenderHook, RenderHookOptions } from '@testing-library/react-hooks';

export function renderHook<R>(
  hook: () => R,
  Providers: React.ComponentType = ({ children }) => <>{children}</>,
  options?: RenderHookOptions<R>,
) {
  return RTLRenderHook(hook, Object.assign({ wrapper: Providers, ...(options ?? {}) }));
}
