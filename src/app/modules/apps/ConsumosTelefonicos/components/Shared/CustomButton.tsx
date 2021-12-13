type Props = {
    texto: string,
    onClickHandler: VoidFunction,
    customClasses?: string;
    customStyles?: Object
}

export default function CustomButton({texto, onClickHandler, customClasses = '', customStyles = {}}: Props) {
    const onClickButtonHandler = () => {
        onClickHandler()
    }

    return (
        <div>
            <button onClick={onClickButtonHandler} className={customClasses} style={customStyles}>{texto}</button>
        </div>
    )
}
