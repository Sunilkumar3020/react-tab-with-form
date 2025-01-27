import { useContext } from "react";
import { FormContext } from '../context/FormContext';
import formConfig from '../config/formConfig';
export default function SettingsTab() {
    const { formData, updateFormData } = useContext(FormContext);
    const fields = formConfig.Settings;

    const handleChange = e => {
        const { name, value } = e.target;
        updateFormData(name, value)
    }

    const handleSubmit = e => {
        console.log('Form Data:', formData);
        alert('Form submitted successfully!')

    }
    return (<>
        <form>
            {fields.map(field => (
                <div key={field.name}>
                    <label>{field.label}</label>
                    {field.options.map(option => (
                        <div key={option} >
                            <input type="radio"
                                name={field.name}
                                value={option}
                                id={option}
                                checked={formData[field.name] === option}
                                onChange={handleChange}
                            />
                            <label htmlFor={option}>{option}</label>

                        </div>
                    ))}
                </div>
            ))}

            <button type="button" onClick={handleSubmit} >Submit</button>
        </form>
    </>)
}

