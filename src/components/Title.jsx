
const Title = ({ className = '', classTitle = '', classText = '', number, song }) => {
    return (
        <article className={`text-center ${className}`}>
            <h1 className={`text-green text-xs uppercase font-bold ${classTitle}`}>advice #{number}</h1>
            <p className={`text-cyan text-base font-bold ${classText}`}>"{song}"</p>
        </article>
    )
}

export { Title }