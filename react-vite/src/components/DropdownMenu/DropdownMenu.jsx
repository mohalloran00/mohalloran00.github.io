export default function DropdownMenu({ anchor, menuItems }) {
  return (
    <>
      {anchor}
      <ul className='dropdown-menu'>
        {menuItems.map(({ content, id }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
    </>
  );
}
