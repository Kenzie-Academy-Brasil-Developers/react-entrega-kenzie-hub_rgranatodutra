import { StyledFieldset } from "./style"

export const FormField = ({ name, placeholder, label, inputType, inputFunction, options, errors }) => {
    return (
        <StyledFieldset>
            <label htmlFor={name}> {label} </label>
            {
                inputType === 'select' ?
                    (
                        <div className="select">
                            <select id={name} {...inputFunction}>
                                {options.map((opt, index) => <option key={index} value={opt.value && opt.value}> {opt.text} </option>)}
                            </select>
                        </div>
                    )
                    :
                    (<input id={name} type={inputType} placeholder={placeholder} {...inputFunction} />)
            }
            {errors && errors}
        </StyledFieldset>
    )
}