import React from 'react';

export type ProviderComponent = React.ComponentType<React.PropsWithChildren<any>>;

export const withProviders = (...providers: ProviderComponent[]): ProviderComponent => {
  return ({ children }) => providers.reduceRight((childThree, Provider: ProviderComponent) => React.createElement(Provider, null, childThree), children);
};
