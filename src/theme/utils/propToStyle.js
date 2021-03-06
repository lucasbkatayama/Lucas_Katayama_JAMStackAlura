import { breakpointsMedia } from './breakpointsMedia';

export const propToStyle = (propName) => (props) => {
  const propValue = props[propName];

  if (typeof propValue === 'string' || typeof propValue === 'number') {
    return {
      // textAlign: props.textAlign
      [propName]: propValue,
    };
  }

  if (typeof propValue === 'object') {
    return breakpointsMedia({
      xs: {
        [propName]: propValue.xs,
      },
      sm: {
        [propName]: propValue.sm,
      },
      md: {
        [propName]: propValue.md,
      },
      lg: {
        [propName]: propValue.lg,
      },
      xl: {
        [propName]: propValue.xl,
      },
    });
  }
};
