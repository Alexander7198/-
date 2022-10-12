import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    
  return (
    <div className={s.postBlock}>

      <h3>My posts</h3>
      <div>
        New posts
      </div>
      {/* Кнопка написания нового поста */}
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {/* Тут можно добавлять посты */}

        {postsElements}

      </div>


    </div >
  )
}

export default MyPosts;