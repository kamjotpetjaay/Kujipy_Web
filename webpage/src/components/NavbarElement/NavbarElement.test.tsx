import React from 'react';
import { shallow } from 'enzyme';
import NavbarElement from './NavbarElement';



describe('<NavbarElement />', () => {
  let component;

  const testFunction = (test: string) => {

  }

  beforeEach(() => {
    component = shallow(<NavbarElement texto='holahola' buttonName='' link='/' customStyle='' clickEvent={() => testFunction('')} />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
