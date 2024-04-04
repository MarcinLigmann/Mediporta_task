import type { Meta, StoryObj } from "@storybook/react";

import BoardItem from "../components/boardItem";
import { Tag } from "../types/Tag";

const meta: Meta<typeof BoardItem> = {
  component: BoardItem,
};

export default meta;

type Story = StoryObj<typeof BoardItem>;

const item: Tag = { name: "name", count: 123 };

export const Primary: Story = {
  render: () => <BoardItem item={item} />,
};
