import React from 'react';
import { shallow } from 'enzyme';
import NavbarElement from './NavbarElement';

describe('<NavbarElement />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NavbarElement texto='holahola'/>);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
