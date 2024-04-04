import type { Meta, StoryObj } from "@storybook/react";

import SelectBar from "../components/selectBar";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof SelectBar> = {
  component: SelectBar,
};

export default meta;

type Story = StoryObj<typeof SelectBar>;

export const Primary: Story = {
  render: () => (
    <BrowserRouter>
      <SelectBar />
    </BrowserRouter>
  ),
};
