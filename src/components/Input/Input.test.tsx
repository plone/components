import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Input from './Input';

expect.extend(toHaveNoViolations);

it('should demonstrate this matcher`s usage with react testing library', async () => {
  const { container } = render(
    <Input
      name="field1"
      title="field 1 title"
      placeholder="Type something…"
      description="Optional help text"
      isRequired
    />,
  );

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});