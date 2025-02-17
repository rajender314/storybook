import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiProductCard } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-Product Card",
  component: PiProductCard,
  libraryType: {
    options: ['atalskit'],
    control: { type: 'select' },
    description: 'Library to use'
  },
  argTypes: {
    name: {
      description: 'Product Name',
      control: { type: 'text' }
    },
    description:{
      description:'Product description text',
      control: { type: 'text' }
    },
    src:{
      description:'Product Image src',
      control: { type: 'text' }
    },
    isDisabled: {
      description: "Disable",
    },
    onClick:{
      description:'Function to click on product name '
    },
    button_lable: {
      description: 'Add to Cart Button lable',
      control: { type: 'text' }
    },
    onAddToCartHandler: {
      action: 'clicked',
      description: 'Function for click event on Add to Cart'
    },
    onAddToWishListHandler: {
      action: 'clicked',
      description: 'Function for click event on Add to Wish List'
    },
    onCompareHandler: {
      action: 'clicked',
      description: 'Function for click event on Compare to Products'
    },

  },
} as ComponentMeta<typeof PiProductCard>;

const Template: ComponentStory<typeof PiProductCard> = (args) => <PiProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name:"Product Name",
  button_lable: "Add to Cart",
  src: "http://192.168.1.167/opencart-master/upload/image/cache/placeholder-250x250.png",
  description: "Product Description"
};
