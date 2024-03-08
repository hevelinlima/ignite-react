import { Post, PostType } from './components/Post.jsx'
import { Header } from './components/Header.jsx'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar.jsx'

// author: {avatar:'', name: '', role: '' }
// publishedAt : Date 
// content: {}

const posts: PostType[] = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego F.',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('03/03/2024 16:12:13')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('03/03/2024 16:15:13')
  }
];

export function App() {
  return (
   <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        { posts.map(post => {
          return (
            <Post 
              key={post.id}
              post={post}
            />
          )
        })}
      </main>
    </div>
   </div> 
  )
}


