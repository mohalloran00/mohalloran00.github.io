import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export default function NavBox({ page }) {
  const navigate = useNavigate();
  const handleClick = () => navigate(page.URL);

  return (
    <div className='big-navbox' onClick={handleClick}>
      <h3 className='bnb-title'>{page.name}</h3>
      <div className='bnb-icon'>
        {page.icon && <FontAwesomeIcon icon={page.icon} />}
      </div>
      <div className='bnb-blurb'>{page.blurb ?? null}</div>
    </div>
  );
}
