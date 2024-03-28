import styles from './TaskBar.module.css'

import plusSign from '../assets/plus-sign.svg'

export function TaskBar( ){
  return(
    <div className={styles.taskbar}>
      <form className={styles.taskbarForm} action="">
        <textarea name="" id="" placeholder="Adicione uma nova tarefa"></textarea>
        <div>
          <button type="submit">
            Criar
            <img src={ plusSign } alt="" />
          </button>
        </div>
      </form>
      
    </div>
  )
}