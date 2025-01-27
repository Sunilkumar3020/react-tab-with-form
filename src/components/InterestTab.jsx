import { useContext } from "react"
import { FormContext } from "../context/FormContext"
import formConfig from "../config/formConfig"

export default function InterestTab() {
    const { formData, updateFormData } = useContext(FormContext)
    const fields = formConfig.Interest

    const handleChange = e => {
        const { name, value } = e.target;
        const updatedValue = formData[name] || []
        if (updatedValue.includes(value)) {
            updateFormData(name, updatedValue.filter((item) => item !== value))
        } else {
            updateFormData(name, [...updatedValue, value])
        }
    }
    return (
        <>
            <form>
                <h2>Interest Tab</h2>
                {fields.map(field => (
                    <div key={field.name}>
                        <label htmlFor={field.name}> </label>
                        {field.options.map((option) => (
                            <div key={option} >
                                <input type='checkbox'
                                    name={field.name}
                                    id={option}
                                    value={option}
                                    checked={formData[field.name]?.includes(option) || false}
                                    onChange={handleChange}
                                />
                                <label htmlFor={option}>{option}</label>
                            </div>
                        ))}
                    </div>
                ))}

            </form>
        </>
    )
}

