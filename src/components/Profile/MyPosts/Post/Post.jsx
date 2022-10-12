import React from 'react';
import s from'./Post.module.css';

const Post = (props) => {

  return <div className={s.content}>
          {/* ТУТ МОЖНО ПЕРЕДЕЛЫВАТЬ ПОСТ */}

          <div className={s.item}>
          <img src="https://hdpic.club/uploads/posts/2021-12/1638980983_19-hdpic-club-p-belii-mersedes-amg-20.jpg"/>
           { props.message }
      
            <div>like</div> { props.likesCount}    
          </div> 
    </div> 

}

export default Post;