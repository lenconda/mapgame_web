import React from 'react';
import './index.scss';

interface ButtonComponentProps {
  className?: string;
  children?: React.ReactChild;
  type?: 'normal' | 'medium';
  largeFont?: boolean;
  width?: 'auto' | 'fixed';
  result?: 'correct' | 'incorrect' | '';
}

const Button = ({
  className = '',
  type = 'normal',
  largeFont = false,
  width = 'fixed',
  result = '',
  ...props
}: ButtonComponentProps): JSX.Element => {
  const buttonClassNameString = `
    ${type} 
    ${width} 
    ${largeFont ? 'font-large' : ''} 
    ${result} 
    ${className}
  `;

  return (
    <button className={`mg-button ${buttonClassNameString}`} disabled={!!result}>
      {props.children}
    </button>
  );
};

export default Button;
