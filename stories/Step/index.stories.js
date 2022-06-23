import { createStep } from "./index";

export default {
  title: "Components/Step",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
};

const Template = (args) => createStep(args);

export const Step = Template.bind({});
Step.args = {
  steps: ["1", "2", "3", "4"],
};
