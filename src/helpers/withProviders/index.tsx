import React from 'react';

export type ProviderComponent = React.ComponentType<React.PropsWithChildren<any>>;

export const withProviders = (...providers: ProviderComponent[]): ProviderComponent => ({
  children,
}) =>
  providers.reduceRight(
    (childTree, Provider: ProviderComponent) => React.createElement(Provider, null, childTree),
    children,
  );
