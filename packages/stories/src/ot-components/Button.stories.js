import { Button } from '../../../ot-components/src/index.js';

export default {
  title: 'OT Components/Button',
  argTypes: {
    onClick: {},
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
       <Button v-bind="args">jjjj</Button>
      `,
  }),
};

export const Example = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};
