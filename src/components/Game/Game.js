import React, { useState, useEffect } from 'react';
import css from './Game.module.css';
import quiz from '../../assets/json/quiz.json';
import { uuid } from 'uuidv4';
import { GameOver } from '../GameOver/GameOver';
import { Route } from 'react-router-dom';

export const Game = () => {
  const [chooseAnswer, setChoosedAnswer] = useState('');
  const [statusAnswer, setStatusAnswer] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [index, setIndex] = useState(0);

  useEffect(() => {
    dataOfCurrentQuestion();
    console.log(currentQuestion);
  }, [statusAnswer]);

  useEffect(() => {
    сheckingUserAnswer();
    console.log(chooseAnswer);
  }, [chooseAnswer]);

  const getUserAnswer = e => {
    setChoosedAnswer(e.target.innerText.substr(1));
  };

  const dataOfCurrentQuestion = () => {
    setIndex(index + 1);
    console.log(index);
    setCurrentQuestion(quiz[index]);
  };

  const сheckingUserAnswer = () => {
    chooseAnswer.includes(currentQuestion.correct_answer) ? setStatusAnswer(true) : setStatusAnswer(false);
    console.log(statusAnswer, 'statusAnswer');
  };

  return (
    <>
      {statusAnswer ? (
        <p>НЕ правильно</p>
      ) : (
        <div className={css.container}>
          <div className={css.question_block}>
            <h2 className={css.question}>{currentQuestion.questions_title && currentQuestion.questions_title}</h2>
            <div className={css.answer_block}>
              <ul className={css.answer_box}>
                {currentQuestion.answers &&
                  currentQuestion.answers.map(answer => (
                    <li className={css.one_answer} onClick={getUserAnswer} key={uuid()}>
                      <p className={css.answer_title}>
                        <span className={css.answerTitle_word}>{Object.keys(answer).join()}</span>
                        {Object.values(answer).join()}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <ul className={css.winnings_block}>
            {quiz &&
              quiz.map(oneQuiz => (
                <li className={css.level_block} key={uuid()}>
                  <p className={css.title}>${oneQuiz.price}</p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};
