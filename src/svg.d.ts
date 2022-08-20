declare module '*.svg' {
  import type {ReactElement, SVGProps, ReactSVGElement} from 'react';
  const content: (props: SVGProps<ReactSVGElement>) => ReactElement;
  export default content;
}
