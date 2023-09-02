export default {
  title: 'Typography',
  argTypes: {}
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template: `
<h1 class="h1">Heading h1</h1>
<h2 class="h2">Heading h2</h2>
<h3 class="h3">Heading h3</h3>
<h4 class="h4">Heading h4</h4>
<h5 class="h5">Heading h5</h5>
<h6 class="h6">Heading h6</h6>
<div class="subhead">Subheading</div>
<div class="body-long1">Body long 1</div>
<div class="body-long2">Body long 2</div>
<div class="body-short1">Body short 1</div>
<div class="body-short2">Body short 2</div>
<div class="caption-lg">Large body caption</div>
<div class="caption-md">Regular body caption</div>
<div class="caption-sm">Small body caption</div>
<hr />
<div class="fw-lighter">thin (100)</div>
<div class="fw-light">light (300)</div>
<div class="fw-normal">default (400)</div>
<div class="fw-medium">medium (500)</div>
<div class="fw-semibold">semibold (600)</div>
<div class="fw-bold">bold (700)</div>
  `
})

export const Example = Template.bind({})
Example.args = {}
