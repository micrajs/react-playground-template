/**
 * This is where you can initialize your test environment.
 */
import '../../src/global.d';
import { toHaveNoViolations } from 'jest-axe';
import '@testing-library/jest-dom/extend-expect';

/**
 * Jest extension
 */
expect.extend(toHaveNoViolations);
