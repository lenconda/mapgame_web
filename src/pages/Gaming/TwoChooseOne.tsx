import React from 'react';
import Button from '../../components/Button';

interface TwoChooseOneComponentProps {
  imgUrl: string[];
  selected: string;
  answer: string;
  onSubmit: (answer: string) => any;
}

const TwoChooseOne = ({
  selected = '',
  answer = '',
  ...props
}: TwoChooseOneComponentProps): JSX.Element => {
  const generateResult = (selected: string, answer: string): 'correct' | 'incorrect' | '' => {
    if (selected === '' || answer === '') { return '' }
    else {
      return selected === answer ? 'correct' : 'incorrect';
    }
  };

  return (
    <div>
      {
        props.imgUrl.map((value, index) => (
          <div className="image-box" key={index}>
            <img src={value} alt={`picture_${index}`} width="100%" height="100%" />
          </div>
        ))
      }
      <div className="buttons-container">
        <Button
          width="auto"
          result={generateResult(selected, answer)}
          disabled={selected !== ''}
          onClick={() => props.onSubmit('yes')}
        >
          是
        </Button>
        <Button
          width="auto"
          disabled={selected !== ''}
          result={generateResult(selected, answer)}
          onClick={() => props.onSubmit('no')}
        >
          否
        </Button>
      </div>
    </div>
  );
};

export default TwoChooseOne;
