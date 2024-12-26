import {
  faMicroscope,
  faPeopleGroup,
  faEnvelope,
  faChalkboardTeacher,
  faComments,
} from '@fortawesome/free-solid-svg-icons';

const navigation = [
  {
    name: 'Research',
    URL: '/research',
    icon: faMicroscope,
  },
  {
    name: 'Outreach',
    URL: '/outreach',
    icon: faComments,
  },
  {
    name: 'Mentoring',
    URL: '/mentoring',
    icon: faChalkboardTeacher,
  },
  {
    name: 'Contact',
    URL: '/contact',
    icon: faEnvelope,
  },
];

export default navigation;
