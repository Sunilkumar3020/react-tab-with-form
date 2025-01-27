import { useContext } from "react"
import { FormContext } from "../context/FormContext"
import formConfig from '../config/formConfig'
export default function ProfileTab() {
    const { formData, updateFormData } = useContext(FormContext);
    const fields = formConfig.Profile;
    const handleChange = e => {
        const { name, value } = e.target;
        updateFormData(name, value)
    }

    return (<>
        <form>
            {fields.map(field => (
                <div key={field.name}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input type={field.type} name={field.name} value={formData[field.name] || ''} required={field.required} onChange={handleChange} />
                </div>
            ))}
        </form>
    </>)
}

