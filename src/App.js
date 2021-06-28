import './App.css';
import Cars from "./components/cars/cars";

function App() {
    return (
        <div>
            <Cars
                image={'https://images.drive.ru/i/0/5f858717ec05c4970d000056.jpg'}
                description={'Audi Q8 (укр. Ауді Кью 8) — купеподібний кросовер виробництва компанії Audi, що зявиться на ринку в 2018 році.'}
            />
        </div>
    );
}

export default App;
