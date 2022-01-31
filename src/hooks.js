import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};

// export const useOnScrollY = (ref, handler) => {
//   useEffect(() => {
//     const handleScroll = (event) => {
//       const { prevScrollpos } = this.state;
  
//       const currentScrollPos = window.pageYOffset;
//       const visible = prevScrollpos > currentScrollPos;
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }
  
//       this.setState({
//         prevScrollpos: currentScrollPos,
//         visible
//       });
//       handler(event);
//     };

//     document.addEventListener('scroll', handleScroll);

//     return () => {
//       document.removeEventListener('scroll', handleScroll);
//     };
//   },
//   [ref, handler],
//   );

// };