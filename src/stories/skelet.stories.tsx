import type { Meta, StoryObj } from '@storybook/react';

import Skelet from '../components/skelet';

const meta: Meta<typeof Skelet> = {
  component: Skelet,
};

export default meta;

type Story = StoryObj<typeof Skelet>;

const index = 5;

export const Primary: Story = {
    render: () => <Skelet index={index}/>,
  };