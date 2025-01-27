export default function Tab({ tabs, activeTab, onTabChange }) {
    return (
        <>
            {tabs.map((tab) => (
                <button key={tab} className={`tab ${activeTab === tab ? 'active' : ''}`} onClick={() => onTabChange(tab)} >{tab}</button>
            ))}
        </>
    )
}