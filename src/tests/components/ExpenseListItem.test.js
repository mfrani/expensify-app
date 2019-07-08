import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { ExpenseListItem } from "../../components/ExpenseListItem";

test("should render ExpenseListItem with expense fixture", () => {
  const wrapper = shallow(<ExpenseListItem expense {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
