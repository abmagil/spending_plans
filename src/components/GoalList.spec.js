import { mount, shallow } from 'enzyme';
import GoalList from './GoalList';
import React from 'react';
import expect from 'expect';

function setup() {
  const orderedGoals = [];
  return {
    wrapper: shallow(<GoalList orderedGoals={orderedGoals} />)
  }
}

describe('GoalList', () => {
  it(`should render one GoalRow into the tbody for each element in orderedGoals prop`, () => {
    const { wrapper } = setup();
    expect(wrapper.find('tbody tr').length).toBe(0);

    wrapper.setProps({orderedGoals: [1,2,3,4]});
    expect(wrapper.find('tbody').children().length).toBe(4);
  })
});

