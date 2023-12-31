import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import StackedBarChart, { StackedSeries } from './StackedBarChart';

const series: StackedSeries[] = [
  {
    data: [{ value: 100, label: 'series-0-data-0' }],
    id: 'series-0',
    sum: 100,
  },
  {
    data: [{ value: 200, label: 'series-1-data-0' }],
    id: 'series-1',
    sum: 200,
  },
];
const series2x2: StackedSeries[] = [
  {
    data: [
      { value: 100, label: 'series-0-data-0' },
      { value: 110, label: 'series-0-data-1' },
    ],
    id: 'series-0',
    sum: 100,
    unit: 'm',
  },
  {
    data: [
      { value: 200, label: 'series-1-data-0' },
      { value: 210, label: 'series-1-data-1' },
    ],
    id: 'series-1',
    sum: 200,
    unit: 'm',
  },
];

describe('StackedBarChart', () => {
  it('Should render 2 series with labels', async () => {
    const { queryByText } = render(<StackedBarChart series={series} labels />);
    expect(queryByText('series-0-data-0')).to.exist;
    expect(queryByText('series-1-data-0')).to.exist;
  });
  it('Should render 2 series', async () => {
    const { queryByTestId } = render(
      <StackedBarChart series={series} labels={false} />,
    );
    expect(queryByTestId('series-0-data-0')).to.exist;
    expect(queryByTestId('series-1-data-0')).to.exist;

    expect(queryByTestId('labels-container')).to.not.exist;
  });
  it('Should render 2 series and 4 labels', async () => {
    const { queryAllByTestId } = render(
      <StackedBarChart series={series2x2} labels />,
    );
    expect(queryAllByTestId('labels-container').length).toBe(4);
  });
  it('Should render 2 series and 4 labels with units', async () => {
    const { queryByText } = render(
      <StackedBarChart series={series2x2} labels />,
    );
    expect(queryByText('100m')).to.exist;
    expect(queryByText('110m')).to.exist;
    expect(queryByText('200m')).to.exist;
    expect(queryByText('210m')).to.exist;
  });
});
