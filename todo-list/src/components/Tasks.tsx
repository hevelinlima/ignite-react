import styles from './Tasks.module.css'

export function Tasks(){
  return(
    <article className={styles.tasks}>
      <header>
        <div className={styles.tasksHeader}>
          <h3>Tarefas criadas</h3>
          <p>0</p>
        </div>
        <div className={styles.tasksHeader}> 
          <h3>Concluídas</h3>
          <p>1 de 5</p>
        </div>
      </header>
      <div>

      </div>
    </article>
  )
}