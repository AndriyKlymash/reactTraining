export default function User({item, choseUser}) {
    return (
        <div>
            {item.name}
            <button onClick={() => choseUser(item.id)}>details</button>
            <br/>
        </div>
    );
}