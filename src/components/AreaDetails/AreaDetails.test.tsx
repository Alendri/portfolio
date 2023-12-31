import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import AreaDetails from './AreaDetails';

describe('AreaDetails', () => {
  it('Area details gbg', async () => {
    const { findByText, findByTestId } = render(<AreaDetails area="gbg" />);
    expect(await findByText('Göteborg')).to.exist;

    //Check for 4 bars in chart.
    expect(await findByTestId('Q1')).to.exist;
    expect(await findByTestId('Q2')).to.exist;
    expect(await findByTestId('Q3')).to.exist;
    expect(await findByTestId('Q4')).to.exist;
  });
  it('Area details sthlm', async () => {
    const { findByText } = render(<AreaDetails area="sthlm" />);
    expect(await findByText('Stockholm')).to.exist;
  });
});
