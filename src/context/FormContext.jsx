import { createContext, useState } from "react";

export const FormContext = createContext()
export const FormProvider = ({ children }) => {
    const [formData, setFormdata] = useState({})
    const updateFormData = (name, value) => {
        setFormdata(prevData => ({ ...prevData, [name]: value }))
    }
    return (
        <>
            <FormContext.Provider value={{ formData, updateFormData }}>
                {children}
            </FormContext.Provider>
        </>
    )
}