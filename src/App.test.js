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

