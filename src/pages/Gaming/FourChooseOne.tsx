import React from 'react';
import Button from '../../components/Button';

interface FourChooseOneComponentProps {
  imgUrl: string;
  selected: string;
  answer: string;
  selections: string[];
  onSubmit: (answer: string) => any;
}

const FourChooseOne = ({
  selected = '',
  answer = '',
  ...props
}: FourChooseOneComponentProps): JSX.Element => {
  const selectionPrefix = ['A', 'B', 'C', 'D'];

  const generateResult = (selected: string, answer: string, current: string): 'correct' | 'incorrect' | '' => {
    if (selected === '' || answer === '' || (current !== selected && current !== answer)) { return '' }
    else if (selected === answer) {
      return current === answer ? 'correct' : '';
    } else {
      return current === answer ? 'correct' : 'incorrect';
    }
  };

  return (
    <div>
      <div className="image-box">
        <img src={props.imgUrl} alt="picture" width="100%" height="100%" />
      </div>
      <div className="options-container">
        {
          props.selections.map((value, index) => (
            <Button
              key={index}
              disabled={selected !== ''}
              result={generateResult(selected, answer, value)}
              onClick={() => props.onSubmit(value)}
            >
              <>{selectionPrefix[index]}.{value}</>
            </Button>
          ))
        }
      </div>
    </div>
  );
};

export default FourChooseOne;
