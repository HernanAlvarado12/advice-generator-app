

const Picture = ({ classPicture, classImg, mobile, desktop, alt, breakpoint, onClick }) => {
    return (
        <picture className={classPicture} onClick={onClick}>
            {breakpoint && <source media={`(min-width: ${breakpoint})`} srcSet={desktop} />}
            <img className={classImg} src={mobile} alt={alt} onClick={onClick} />
        </picture>
    )
}

export { Picture }