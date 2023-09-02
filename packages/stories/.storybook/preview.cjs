import { setup } from '@storybook/vue3'
import {
  OtComponents
} from '../../ot-components/src/index.js'
import '../../ot-components/src/ot-components.scss'

setup((app) => {
  app.use(OtComponents)
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
