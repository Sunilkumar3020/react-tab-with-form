// src/config/formConfig.js

// const formConfig = {
//     Profile: [
//         { name: "age", label: "Age", type: "number", required: true },
//         { name: "email", label: "Email", type: "email", required: true },
//     ],
//     Interest: [
//         { name: "hobbies", label: "Hobbies", type: "checkbox", options: ["Sports", "Reading", "Traveling"], required: true },
//     ],
//     Settings: [
//         { name: "notification", label: "Notifications", type: "radio", options: ["Enabled", "Disabled"], required: true },
//     ],
// };

// export default formConfig;

// src/context/FormContext.js
// import React, { createContext, useState } from "react";

// export const FormContext = createContext();

// export const FormProvider = ({ children }) => {
//     const [formData, setFormData] = useState({});

//     const updateFormData = (name, value) => {
//         setFormData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     return (
//         <FormContext.Provider value={{ formData, updateFormData }}>
//             {children}
//         </FormContext.Provider>
//     );
// };


// src/App.js
// import React, { useState } from "react";
// import { FormProvider } from "./context/FormContext";
// import Tab from "./components/Tab";
// import ProfileTab from "./components/ProfileTab";
// import InterestTab from "./components/InterestTab";
// import SettingsTab from "./components/SettingsTab";

// const App = () => {
//     const [activeTab, setActiveTab] = useState("Profile");
//     const tabs = ["Profile", "Interest", "Settings"];

//     const renderTabContent = () => {
//         switch (activeTab) {
//             case "Profile":
//                 return <ProfileTab />;
//             case "Interest":
//                 return <InterestTab />;
//             case "Settings":
//                 return <SettingsTab />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <FormProvider>
//             <div className="app">
//                 <Tab tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
//                 {renderTabContent()}
//             </div>
//         </FormProvider>
//     );
// };

// export default App;

// src/components/Tab.js
// import React from "react";

// const Tab = ({ tabs, activeTab, onTabChange }) => {
//     return (
//         <div className="tabs">
//             {tabs.map((tab) => (
//                 <button
//                     key={tab}
//                     className={`tab ${activeTab === tab ? "active" : ""}`}
//                     onClick={() => onTabChange(tab)}
//                 >
//                     {tab}
//                 </button>
//             ))}
//         </div>
//     );
// };

// export default Tab;

// src/components/ProfileTab.js
// import React, { useContext } from "react";
// import { FormContext } from "../context/FormContext";
// import formConfig from "../config/formConfig";

// const ProfileTab = () => {
//     const { formData, updateFormData } = useContext(FormContext);
//     const fields = formConfig.Profile;

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         updateFormData(name, value);
//     };

//     return (
//         <form>
//             {fields.map((field) => (
//                 <div key={field.name}>
//                     <label>{field.label}</label>
//                     <input
//                         type={field.type}
//                         name={field.name}
//                         value={formData[field.name] || ""}
//                         required={field.required}
//                         onChange={handleChange}
//                     />
//                 </div>
//             ))}
//         </form>
//     );
// };

// export default ProfileTab;


// src/components/InterestTab.js
// import React, { useContext } from "react";
// import { FormContext } from "../context/FormContext";
// import formConfig from "../config/formConfig";

// const InterestTab = () => {
//     const { formData, updateFormData } = useContext(FormContext);
//     const fields = formConfig.Interest;

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         const updatedValue = formData[name] || [];
//         if (updatedValue.includes(value)) {
//             updateFormData(name, updatedValue.filter((item) => item !== value));
//         } else {
//             updateFormData(name, [...updatedValue, value]);
//         }
//     };

//     return (
//         <form>
//             {fields.map((field) => (
//                 <div key={field.name}>
//                     <label>{field.label}</label>
//                     {field.options.map((option) => (
//                         <div key={option}>
//                             <input
//                                 type="checkbox"
//                                 name={field.name}
//                                 value={option}
//                                 checked={formData[field.name]?.includes(option) || false}
//                                 onChange={handleChange}
//                             />
//                             <label>{option}</label>
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </form>
//     );
// };

// export default InterestTab;


// src/components/SettingsTab.js
import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import formConfig from "../config/formConfig";

const SettingsTab = () => {
    const { formData, updateFormData } = useContext(FormContext);
    const fields = formConfig.Settings;

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData(name, value);
    };

    const handleSubmit = () => {
        console.log("Form Data:", formData);
        alert("Form submitted successfully!");
    };

    return (
        <form>
            {fields.map((field) => (
                <div key={field.name}>
                    <label>{field.label}</label>
                    {field.options.map((option) => (
                        <div key={option}>
                            <input
                                type="radio"
                                name={field.name}
                                value={option}
                                checked={formData[field.name] === option}
                                onChange={handleChange}
                            />
                            <label>{option}</label>
                        </div>
                    ))}
                </div>
            ))}
            <button type="button" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    );
};

export default SettingsTab;


