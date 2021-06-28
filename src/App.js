import './App.css';
import Car from "./components/car/Car";
import {useState} from "react";

let cars = [
    {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    },
    {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {
        producer: "bmw",
        model: "650",
        year: 2009,
        color: "black",
        type: "coupe",
        engine: "f60",
        volume: 6,
        power: 350
    },
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
]

function App() {


    let [carsList, setCars] = useState(cars);
    const deleteCar = () => {
        carsList.pop();
        setCars([...carsList])
    }

    return (
        <div className="App">
            {/*<div>*/}
            {/*    counter is {counter}*/}
            {/*    <button onClick={increment}>increment</button>*/}
            {/*</div>*/}
            <div>
                {
                    carsList.map((car, index) =>
                        <Car key={index}
                             producer={car.producer}
                             model={car.model}
                             year={car.year}
                             power={car.power}
                             but={<button onClick={deleteCar}>delete</button>}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default App;
