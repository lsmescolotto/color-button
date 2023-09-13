import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
// eslint-disable-next-line testing-library/no-dom-import
import { logRoles } from "@testing-library/dom";

test('button has correct initial color and updates when clicked', () => {
  const {container} = render(<App/>);
  logRoles(container)
  //getting element in dom
  const colorButton = screen.getByRole("button", {name: "Change to blue"})
  //test if the button is initially red
  expect(colorButton).toHaveStyle("background-color: red")

  //test if after clicked, the button turns blue
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle("background-color: blue")

  //test if the button text is "Change to red"
  expect(colorButton).toHaveTextContent("Change to red")
});

test("checkbox is initially disabled and the button enabled", () => 
{
  render(<App/>)
  const colorButton = screen.getByRole("button", {name: "Change to blue"})
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox")
  expect(checkbox).not.toBeChecked();
})

test("when checkbox is checked tuhe button is disabled and vice versa", () => {
  render(<App/>)
  const checkbox = screen.getByRole("checkbox", {name: "Disable button"})
  fireEvent.click(checkbox)

  const colorButton = screen.getByRole("button", { name: "Change to blue"})
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled()
})

test("gray is the disabled button color", () => {
  render(<App/>)
  const checkbox = screen.getByRole("checkbox", {name: "Disable button"})
  fireEvent.click(checkbox)
  
  const button = screen.getByRole("button", {name: "Change to blue"})
  expect(button).toHaveStyle("background-color: gray")

  fireEvent.click(checkbox)
  expect(button).toHaveStyle("background-color: red")

  fireEvent.click(button)
  fireEvent.click(checkbox)
  expect(button).toHaveStyle("background-color: gray")

  fireEvent.click(checkbox)
  expect(button).toHaveStyle("background-color: blue")
})
