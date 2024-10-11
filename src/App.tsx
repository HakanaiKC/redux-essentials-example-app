import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../src/index.css'
import { Navbar } from './components/Navbar'
import { PostsList } from './features/posts/PostList'
import { AddPostForm } from './features/posts/AddPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage'
import PostsMainPage from './features/posts/PostsMainPage'
import { EditPostForm } from './features/posts/EditPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<PostsMainPage />}></Route>
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
