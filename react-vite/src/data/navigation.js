import {
  faMicroscope,
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
    subpages: [
      {
        name: 'Current Projects',
        URL: '/research/current',
      },
      {
        name: 'Publications',
        URL: '/research/publications',
      },
      {
        name: 'CV',
        file: true,
        URL: 'https://mohalloran00.github.io/cv.pdf',
      },
    ],
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
      'Dui condimentum inceptos quam hendrerit egestas sit. Curabitur quis mattis iaculis cursus phasellus suscipit taciti mauris.',
  },
  {
    name: 'Contact',
    URL: '/contact',
    icon: faEnvelope,
    blurb: 'Ante elementum lectus parturient posuere massa.',
  },
];

export default navigation;
