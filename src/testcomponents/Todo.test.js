import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "./Todo";

describe("Todo component is working correctly.", () => {
  const todo = { id: 5, text: "hacer la compra", completed: true };
  render(<Todo todo={todo} />);
  const todoelement = screen.getByTestId(`todo-test-${todo.id}`);

  it("should render Todo component", () => {
    expect(todoelement).toBeInTheDocument();
  });
  it("should haver right text", () => {
    expect(todoelement).toHaveTextContent(todo.text);
  });
});

describe("Todo component should chech/uncheck completed/not completed todos", () => {
  const checkbox = screen.getByTestId("checkbox");

  it("should be checked", () => {
    expect(checkbox).toBeChecked();
  });

  it("matches snapshot", () => {
    const snapTodo = { id: 5, text: "hacer la compra 2", completed: true };
    const tree = renderer.create(<Todo todo={snapTodo} />);
    expect(tree).toMatchSnapshot();
  });
});
