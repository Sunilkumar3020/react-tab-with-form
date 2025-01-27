import ProfileTab from "./ProfileTab";
import InterestTab from "./InterestTab";
import SettingsTab from './SettingsTab';
export default function TabContent({ activeTab }) {

    switch (activeTab) {
        case 'Profile':
            return <ProfileTab />
        case 'Interest':
            return <InterestTab />
        case 'Settings':
            return <SettingsTab />

        default:
            return null
    }

}