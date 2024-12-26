import AboutMe from './AboutMe';
import Screensavers from './Screensavers';
import Blurb from './BigNavigation';

export default function LandingPage() {
  return (
    <>
      <Screensavers />
      <AboutMe />
      {['research', 'outreach', 'mentoring', 'contact'].map(idk => (
        <Blurb />
      ))}
    </>
  );
}
