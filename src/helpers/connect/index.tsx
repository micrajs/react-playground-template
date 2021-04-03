import React from 'react';

export function connect<P = unknown, CP = unknown>(
  setup: (props: P) => CP,
  Component: React.ComponentType<CP>,
) {
  return function ConnectedComponent(props: P) {
    return <Component {...setup(props)} />;
  };
}
