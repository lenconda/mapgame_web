import React from 'react';
import './index.scss';

interface BookmarkComponentProps {
  className?: string;
  background?: 'pink' | 'blue';
  children: React.ReactChild;
}

const Bookmark = (props: BookmarkComponentProps): JSX.Element => {
  return (
    <div className={`mg-bookmark ${props.background} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Bookmark;
