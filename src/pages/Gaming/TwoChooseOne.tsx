import React from 'react';
import Button from '../../components/Button';

interface TwoChooseOneComponentProps {
  correct: boolean;
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
  const generateResult = (selected: string, answer: string, current: string): 'correct' | 'incorrect' | '' => {
    if (selected === '' || answer === '') { return '' }
    if (props.correct) {
      return current === answer ? 'correct' : '';
    } else {
      return current === answer ? 'correct' : 'incorrect';
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
          result={generateResult(selected, answer, '是')}
          disabled={selected !== ''}
          onClick={() => props.onSubmit('是')}
        >
          是
        </Button>
        <Button
          width="auto"
          disabled={selected !== ''}
          result={generateResult(selected, answer, '否')}
          onClick={() => props.onSubmit('否')}
        >
          否
        </Button>
      </div>
    </div>
  );
};

export default TwoChooseOne;
