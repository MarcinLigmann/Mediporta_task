import type { Meta, StoryObj } from '@storybook/react';

import Error from '../components/error';

const meta: Meta<typeof Error> = {
  component: Error,
};

export default meta;

type Story = StoryObj<typeof Error>;

export const Primary: Story = {
    render: () => <Error />,
  };