import React from 'react';
import './index.scss';

interface ButtonComponentProps {
  className?: string;
  children?: React.ReactChild;
  type?: 'normal' | 'medium';
  largeFont?: boolean;
  width?: 'auto' | 'fixed';
  result?: 'correct' | 'incorrect' | '';
  disabled?: boolean;
  onClick?: () => any;
}

const Button = ({
  className = '',
  type = 'normal',
  largeFont = false,
  width = 'fixed',
  result = '',
  disabled = false,
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
    <button className={`mg-button ${buttonClassNameString}`} onClick={props.onClick} disabled={!!result || disabled}>
      {props.children}
    </button>
  );
};

export default Button;
