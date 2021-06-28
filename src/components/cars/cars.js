import './cars.css'

function Cars(props) {

    let {model, image, description, power} = props;

    return <div>
        <h2>{model}</h2>
        <p>Power: {power}</p>
        <img src={image}/>
        <p>{description}</p>
    </div>
}

export default Cars;