import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PiFileUploader } from "pixel-kit";
import React from 'react';

export default {
  title: "Pixel-kit/Pi-FileUploader",
  component: PiFileUploader,
  argTypes: {
    // libraryType: {
    //   options: ["atalskit", "default"],
    //   control: { type: "select" },
    //   description: "Library to use",
    // },
    dropzoneProps: {
      description: "dropzone props & values",
    },
    onUpload: {
      description: 'Event to Capture uploaded files array'
    },
  },
} as ComponentMeta<typeof PiFileUploader>;

const Template: ComponentStory<typeof PiFileUploader> = (args) => (
  <PiFileUploader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  dropzoneProps: {
    accept:'image/*',
    maxSize:5242880,
    text:'Click here or drag a file to upload!',
    validFieErrorMessage: 'Upload valid file type',
    maxFileSizeErroMessage:'Max file uplode size should be 5MB',
    multiple:false,
    disabled: false,
    noDrag:false
  },
  onUpload:() => {}
};
