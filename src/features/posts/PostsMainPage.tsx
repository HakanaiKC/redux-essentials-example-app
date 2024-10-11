import { useAppSelector } from '@/app/hook'

const PostsMainPage = () => {
  const posts = useAppSelector((state) => state.posts)

  return (
    <section>
      <h2>Posts</h2>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </article>
      ))}
    </section>
  )
}

export default PostsMainPage
