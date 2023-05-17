import React from 'react';
import { images } from '../../constants';

export default function SubHeading() {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className="p__cormorant">TITLE</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </div>
  );
}
