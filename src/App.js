import './App.css';
import Cars from "./components/cars/cars";

function App() {
    return (
        <div>
            <Cars
                model={'audi'}
                power={450}
                image={'https://images.drive.ru/i/0/5f858717ec05c4970d000056.jpg'}
                description={'Audi Q8 (укр. Ауді Кью 8) — купеподібний кросовер виробництва компанії Audi, що зявиться на ринку в 2018 році.'}
            />
            <Cars
                model={'bmw'}
                power={350}
                image={'https://lh3.googleusercontent.com/proxy/wqd9QeN_l8UPmtqX9uHiPsdVP01yPvaeJV00SZX4hDj7xO5C3m_scO0R4dAbjZws_y3v_PFvOCqtITjBz8oMMLXsI6I'}
                description={'BMW i8 — повноприводне купе класу «G2» з гібридною силовою установкою. Вперше концепт-кар BMW Vision Efficient Dynamics'}
            />
        </div>
    );
}

export default App;
