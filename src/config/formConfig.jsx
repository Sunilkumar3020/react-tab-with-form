const formConfig = {
    Profile: [
        { name: 'age', label: 'Age', type: 'number', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'name', label: 'Name', type: 'text', required: true }
    ],
    Interest: [
        { name: 'hobbies', label: 'Hobbies', type: 'checkbox', options: ['Sports', 'Reading', 'Traveling'], required: true }
    ],
    Settings: [
        { name: 'notification', label: 'Notification', type: 'radio', options: ['Enabled', 'Disabled'], required: true }
    ]

}

export default formConfig;