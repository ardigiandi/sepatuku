type Option = {
    label: string
    value: string
}

type Proptypes = {
    label?: string
    name: string
    defaultValue?: string
    disabled?: boolean
    options: Option[]
}

const Select = (props: Proptypes) => {

    const { label, name, defaultValue, disabled, options } = props

    return (
        <div className="flex flex-col mt-3">
            <label className="text-base font-medium" htmlFor={name}>{label}</label>
            <select name={name} id={name} defaultValue={defaultValue} disabled={disabled} className="border bg-slate-100 py-1 px-2 border-slate-300 rounded-sm mt-2">
                {options.map((option) => (
                    <option value={option.value} key={option.label}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select