import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const List = () => (
  <div>
    <ul>
      <li>Item</li>
    </ul>
  </div>
);

describe('failing test', () => {
  it('runs', () => {
    const wrapper = shallow(<List />);

    expect(wrapper).toContainMatchingElement('ul');
  });
});
