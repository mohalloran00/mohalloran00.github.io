import { Transition } from 'react-transition-group';
import { useRef } from 'react';

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default function Fade({ content, in: inProp, duration }) {
  const nodeRef = useRef(null);
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      {state => (
        <div
          ref={nodeRef}
          style={{ ...defaultStyle, ...transitionStyles[state] }}
        >
          {content}
        </div>
      )}
    </Transition>
  );
}
