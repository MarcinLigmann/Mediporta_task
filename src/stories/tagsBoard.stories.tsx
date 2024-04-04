import type { Meta, StoryObj } from "@storybook/react";

import TagsBoard from "../components/tagsBoard";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";

const meta: Meta<typeof TagsBoard> = {
  component: TagsBoard,
};

export default meta;

type Story = StoryObj<typeof TagsBoard>;

const setQuantity = () => {};

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
      <BrowserRouter>
        <TagsBoard setQuantity={setQuantity} />
      </BrowserRouter>
    </Provider>
  ),
};
