/* eslint-disable */
import NavbarElement from './NavbarElement';

export default {
  title: "NavbarElement",
};
const testFunction = (test: string) => {

}


export const Default = () => <NavbarElement buttonName='' texto='xxx' link='/' customStyle='' clickEvent={() => testFunction} />;

Default.story = {
  name: 'default',
};
