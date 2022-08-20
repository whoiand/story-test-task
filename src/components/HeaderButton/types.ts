import {ReactElement, ReactSVGElement, SVGProps} from 'react';

interface HeaderButtonProps {
  onPress: () => void;
  IconComponent: (props: SVGProps<ReactSVGElement>) => ReactElement;
}

export type {HeaderButtonProps};
