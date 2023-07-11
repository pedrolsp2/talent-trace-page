import { animateScroll as scroll } from 'react-scroll';

export const scrollToFooter = () => {
  scroll.scrollToBottom({
    smooth: true,
    duration: 1000,
  });
};

export const scrollToTop = () => {
  scroll.scrollToTop({
    smooth: true,
    duration: 700,
  });
};