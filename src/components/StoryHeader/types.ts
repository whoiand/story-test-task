import {Dispatch, SetStateAction} from 'react';

interface StoryHeaderProps {
  onImageSelect: Dispatch<SetStateAction<string>>;
}

export type {StoryHeaderProps};
