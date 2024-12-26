import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBox({ page }) {
  return (
    <div>
      {page.icon && <FontAwesomeIcon icon={page.icon} />}
      {page.name}
    </div>
  );
}
