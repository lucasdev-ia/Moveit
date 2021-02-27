import style from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
  return(
    <div className={style.completedChallengesContainer}>
      <span>Desafio completos</span>
      <span>5</span>
    </div>
  );
}