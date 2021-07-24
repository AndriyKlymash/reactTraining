export default function Post({item, chosePost}) {
    return(
        <div>
            {item.id})
            {item.title}
            <button onClick={()=>chosePost(item.id)}>details</button>
        </div>
    );
}