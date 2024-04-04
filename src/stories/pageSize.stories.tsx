import type { Meta, StoryObj } from "@storybook/react";

import PageSize from "../components/pageSize";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof PageSize> = {
  component: PageSize,
};

export default meta;

type Story = StoryObj<typeof PageSize>;

const quantity = 300;

export const Primary: Story = {
  render: () => (
    <BrowserRouter>
      <PageSize quantity={quantity} />
    </BrowserRouter>
  ),
};
