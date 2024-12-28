import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBox({ page }) {
  return (
    <Link to={page.URL} className='big-navbox'>
      <h3 className='bnb-title'>{page.name}</h3>
      <div className='bnb-icon'>
        {page.icon && <FontAwesomeIcon icon={page.icon} />}
      </div>
      <div className='bnb-blurb'>{page.blurb ?? null}</div>
    </Link>
  );
}
