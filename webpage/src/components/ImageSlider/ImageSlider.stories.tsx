/* eslint-disable */
import ImageSlider, { Imagen } from './ImageSlider';

export default {
  title: "ImageSlider",
};

const galeriaImagenes: Imagen[] = []

export const Default = () => <ImageSlider galeriaImagenes={galeriaImagenes}/>;

Default.story = {
  name: 'default',
};
