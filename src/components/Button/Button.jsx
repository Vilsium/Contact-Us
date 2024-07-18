import style from './Button.module.css'

const Button = (props) => {
    return (
        <button className={props.isOutline ? style.outlineBtn : style.primaryBtn}>
            {props.icon}
            {props.text}
        </button>
    )
}

export default Button
