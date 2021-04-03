import React from 'react';

export interface ComponentProps {
  children?: React.ReactNode;
  dataTestId?: string;
}

export const Component = ({
  dataTestId = 'component',
}: ComponentProps) => (
  <h1 data-testid={dataTestId}>
    My test component
  </h1>
);
