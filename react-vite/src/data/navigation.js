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
    blurb:
      'Faucibus interdum nostra netus pellentesque lorem. Laoreet vulputate bibendum dignissim tellus mus; pharetra porta maecenas.',
  },
  {
    name: 'Outreach',
    URL: '/outreach',
    icon: faComments,
    blurb: 'Euismod morbi purus hac ac convallis auctor sagittis.',
  },
  {
    name: 'Mentoring',
    URL: '/mentoring',
    icon: faChalkboardTeacher,
    blurb:
      'Dui condimentum inceptos quam hendrerit egestas sit. Curabitur quis mattis iaculis cursus phasellus suscipit taciti mauris. Sociosqu augue platea elementum ultrices cubilia semper cursus aliquet.',
  },
  {
    name: 'Contact',
    URL: '/contact',
    icon: faEnvelope,
    blurb: 'Ante elementum lectus parturient posuere massa.',
  },
];

export default navigation;
