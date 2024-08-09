
type Proptypes = {
    type: "button" | "submit" | "reset" | undefined
    onClick?: () => void
    children: React.ReactNode
    variant?: string
    className?: string 
}

const Button = (props: Proptypes) => {

    const { type, onClick, children, variant, className  } = props

    return (
        <button 
        className={`${className} ${[variant]}`}
        type={type} 
        onClick={onClick}>
            {children}
        </button>
    )
}

export default Button 