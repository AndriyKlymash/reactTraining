import './cars.css'

function Cars(props) {
    return <div>
        <img src={props.image} />
        <p>{props.description}</p>
    </div>
}

export default Cars;