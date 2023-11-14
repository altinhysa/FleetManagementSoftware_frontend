const Button = ( props : any ) => {
    const name = props.name



    return (
        <>
            <button className="italic">{name}</button>
        </>
    )
}

export default Button