import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiPagination } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-Pagination",
  component: PiPagination,
  argTypes: {
    selectedIndex: {
      description: "Default Selected Page",
    },
    pages: {
      description: "Number of pages to display",
    },
    onChange: {
      description: "Event fired on change of page number",
    },
  },
} as ComponentMeta<typeof PiPagination>;

const Template: ComponentStory<typeof PiPagination> = (args) => <PiPagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedIndex: 2,
  pages:10
};
