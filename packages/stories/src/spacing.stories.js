export default {
  title: 'Spacing',
  argTypes: {
    class: {
      control: { type: 'select' },
      description: `
The classes are named using the format \`{property}{sides}-{size}\`.

Where *property* is one of:

- \`m\`: set margin
- \`p\`: set padding

Where *sides* is one of:

- \`t\`: set margin-top or padding-top
- \`b\`: set margin-bottom or padding-bottom
- \`l\`: set margin-left or padding-left
- \`r\`: set margin-right or padding-right
- \`x\`: set both *-left and *-right
- \`y\`: set both *-top and *-bottom
- blank: set a margin or padding on all 4 sides of the element

Where *size* is one of:

- \`0\`: eliminate the margin or padding by setting it to 0
- \`1\`: set the margin or padding to (16 * 1/4) px
- \`2\`: set the margin or padding to (16 * 1/2) px
- \`3\`: set the margin or padding to (16 * 1.0) px
- \`4\`: set the margin or padding to (16 * 1.5) px
- \`5\`: set the margin or padding to (16 * 2.0) px
- \`6\`: set the margin or padding to (16 * 2.5) px
- \`auto\`: set the margin to auto
`,
      options: [
        '',
        'm-auto',
        'm-0',
        'm-1',
        'm-2',
        'm-3',
        'm-4',
        'm-5',
        'm-6',
        'mx-0',
        'mx-1',
        'mx-2',
        'mx-3',
        'mx-4',
        'mx-5',
        'mx-6',
        'my-0',
        'my-1',
        'my-2',
        'my-3',
        'my-4',
        'my-5',
        'my-6',
        'mt-0',
        'mt-1',
        'mt-2',
        'mt-3',
        'mt-4',
        'mt-5',
        'mt-6',
        'mr-0',
        'mr-1',
        'mr-2',
        'mr-3',
        'mr-4',
        'mr-5',
        'mr-6',
        'mb-0',
        'mb-1',
        'mb-2',
        'mb-3',
        'mb-4',
        'mb-5',
        'mb-6',
        'ml-0',
        'ml-1',
        'ml-2',
        'ml-3',
        'ml-4',
        'ml-5',
        'ml-6',
        'p-0',
        'p-1',
        'p-2',
        'p-3',
        'p-4',
        'p-5',
        'p-6',
        'px-0',
        'px-1',
        'px-2',
        'px-3',
        'px-4',
        'px-5',
        'px-6',
        'py-0',
        'py-1',
        'py-2',
        'py-3',
        'py-4',
        'py-5',
        'py-6',
        'pt-0',
        'pt-1',
        'pt-2',
        'pt-3',
        'pt-4',
        'pt-5',
        'pt-6',
        'pr-0',
        'pr-1',
        'pr-2',
        'pr-3',
        'pr-4',
        'pr-5',
        'pr-6',
        'pb-0',
        'pb-1',
        'pb-2',
        'pb-3',
        'pb-4',
        'pb-5',
        'pb-6',
        'pl-0',
        'pl-1',
        'pl-2',
        'pl-3',
        'pl-4',
        'pl-5',
        'pl-6'
      ]
    }
  }
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template: `
    <div style="background: #ddd; width: 7rem; height: 1rem"></div>
    <div style="display: flex">
      <div style="background: #ddd; width: 1rem; height: 5rem"></div>
      <div style="background: rgb(241, 194, 27)">
        <div style="color: #fff; background: rgb(0, 67, 206); width: 5rem; height: 5rem;" :class="args.class"></div>
      </div>
      <div style="background: #ddd; width: 1rem; height: 5rem"></div>
    </div>
    <div style="background: #ddd; width: 7rem; height: 1rem"></div>

    {{ args.class }}
  `
})

export const Example = Template.bind({})
Example.args = {}
