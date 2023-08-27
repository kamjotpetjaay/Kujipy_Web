import React from 'react';
import { shallow } from 'enzyme';
import NavbarLogo from './NavbarLogo';

describe('<NavbarLogo />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NavbarLogo />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
