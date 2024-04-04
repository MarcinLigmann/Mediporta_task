import type { Meta, StoryObj } from "@storybook/react";

import Header from "../components/header";

const meta: Meta<typeof Error> = {
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  render: () => <Header />,
};
