import { render } from './test_helper.js'
import '@testing-library/jest-dom'
import Button from './Button.vue'

describe('Button', () => {
  test('default', () => {
    const { container } = render(Button, { props: { } })

    expect(container.firstChild).toHaveClass('p-button')
    expect(container.firstChild).toHaveClass('is-medium')
  })

  test('label', () => {
    const label = 'hello'
    const { getByText } = render(Button, { props: { label } })

    getByText(label)
  })

  test('full-width', () => {
    const { container } = render(Button, { props: { "full-width": true } })

    expect(container.firstChild).toHaveClass('is-full-width')
  })

  test('size:small', () => {
    const { container } = render(Button, { props: { size: "small" } })

    expect(container.firstChild).toHaveClass('is-small')
  })

  test('size:medium', () => {
    const { container } = render(Button, { props: { size: "medium" } })

    expect(container.firstChild).toHaveClass('is-medium')
  })

  test('size:large', () => {
    const { container } = render(Button, { props: { size: "large" } })

    expect(container.firstChild).toHaveClass('is-large')
  })

  test('variant:primary', () => {
    const { container } = render(Button, { props: { variant: "primary" } })

    expect(container.firstChild).toHaveClass('p-button')
  })

  test('variant:secondary', () => {
    const { container } = render(Button, { props: { variant: "secondary" } })

    expect(container.firstChild).toHaveClass('p-button-outlined')
  })

  test('variant:tertiary', () => {
    const { container } = render(Button, { props: { variant: "tertiary" } })

    expect(container.firstChild).toHaveClass('p-button-secondary')
  })

  test('variant:link', () => {
    const { container } = render(Button, { props: { variant: "link" } })

    expect(container.firstChild).toHaveClass('p-button-text')
  })
})
