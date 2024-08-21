

type Proptypes = {
    label?: string
    name: string
    type: string
    placeholder?: string
    defaultValue?: string
    disabled?: boolean
}
const Input = (props: Proptypes) => {

    const { label, name, type, placeholder, defaultValue, disabled } = props

    return (
        <div className="flex flex-col gap-2">
            {label && <label htmlFor={name} className="text-base font-medium mt-2">{label}</label>}
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                disabled={disabled}
                className="border-2 bg-slate-100 py-1 px-3 border-black rounded-sm w-full" />
        </div>
    )
}

export default Input

