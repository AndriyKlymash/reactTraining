import {useEffect, useState} from "react";
import {getPosts} from "../../services/api";
import Post from "../post/Post"

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [chosenPost, setChosenPost] = useState(null);

    useEffect(()=>{
        getPosts().then(value => setPosts([...value.data]))
    })

    const chosePost = (id)=>{
        let findPost = posts.find(value => value.id===id);
        setChosenPost(findPost);
    }

    return(
        <div>
            <div>
                {
                    posts.map(value => <Post
                    key={value.id}
                    item={value}
                    chosePost={chosePost}
                    />)
                }
            </div>
            <div>
                {chosenPost &&  <div><hr/>{chosenPost.body}</div>}
            </div>
        </div>
    );
}