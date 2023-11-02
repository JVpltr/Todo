import moon from "../assets/icon-moon.svg"

export const Header = () => {
    return (
        <header className={'header'}>
            <h1>TODO</h1>
            <button><img src={moon}/></button>
        </header>
    )
}