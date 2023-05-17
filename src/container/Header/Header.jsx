import React from 'react';
import { images } from '../../constants';

import './Header.css';

export default function Header() {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info"></div>
      <div className="app__wrapper_img"></div>
    </div>
  );
}
