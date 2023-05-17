import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

export default function Newsletter() {
  return (
    <div className="app__newslettr">
      <div className="app__newsletter-heading">
        <SubHeading title="newsletter" />
        <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
        <p className="p__opensans">And newver miss our latest updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button className="customer__button">Subscribe</button>
      </div>
    </div>
  );
}
