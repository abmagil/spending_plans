import { mount, shallow } from 'enzyme';
import FrpTable from './FrpTable';
import React from 'react';
import expect from 'expect';

function setup() {
  const wrapper = shallow(<FrpTable />);

  return {
    wrapper
  }
}

describe('components', () => {
  describe('<FrpTable />', () => {
    it('should render a table', () => {
      const { wrapper } = setup();

      expect(wrapper.find('table').length).toBe(1);
    })

    it(`should render children from then 'children' prop into the tbody`, () => {
      const { wrapper } = setup();
      expect(wrapper.find('tbody tr').length).toBe(0);

      wrapper.setProps({children: [1,2,3,4]});
      expect(wrapper.find('tbody').children().length).toBe(4);
    })
  })
})
