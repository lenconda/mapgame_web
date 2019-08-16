import React from 'react';
import './index.scss';

interface ButtonComponentProps {
  className?: string;
  children?: React.ReactChild;
  type?: 'normal' | 'medium';
  largeFont?: boolean;
  width?: 'auto' | 'fixed';
}

const Button = ({
  className = '',
  type = 'normal',
  largeFont = false,
  width = 'fixed',
  ...props
}: ButtonComponentProps): JSX.Element => {
  const buttonClassNameString = `
    ${type} 
    ${width} 
    ${largeFont ? 'font-large' : ''} 
    ${className}
  `;

  return (
    <button className={`mg-button ${buttonClassNameString}`}>
      {props.children}
    </button>
  );
};

export default Button;
