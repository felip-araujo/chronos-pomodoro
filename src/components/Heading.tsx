import styles from './Heading.module.css';

export function Heading(){
    return (<>
    
    <div>
        <h1>Iachecker</h1>
        <label htmlFor="">Cole Sua URL:</label>
        <input type="url" />
        <button>Enviar</button>
    </div>

    </>);
}