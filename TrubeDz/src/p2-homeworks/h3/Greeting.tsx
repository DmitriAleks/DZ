import s from './Greeting.module.css'
import style from '../CoolButton.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser:  () => void
    error: string
    totalUsers: number
}


const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = error ? s.errorInput : s.input

    return (
        <div className={s.greeting}>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onBlur={setNameCallback}
            />

            <div className={s.errortext}>{error}</div>
            <button onClick={addUser} className={style.button}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting