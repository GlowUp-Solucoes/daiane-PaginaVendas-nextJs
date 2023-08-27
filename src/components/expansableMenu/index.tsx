'use client';
import { useState } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import DropDown from '../../media/img/DropDown.svg';

interface ExpansableProps {
  question: string;
  answer: string;
}

export default function ExpansableMenu({ question, answer }: ExpansableProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansable = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.expansableMenu}>
      <div className={`${styles.header} ${expanded ? styles.expanded : ''}`} onClick={toggleExpansable}>
        <div className={styles.icon}>
          <Image src={DropDown} alt='DropDown' width={20} height={20} priority />
        </div>
        {question}
      </div>
      <div className={`${styles.answer} ${expanded ? styles.answerExpanded : ''}`}>
        {answer}
      </div>
    </div>
  );
}