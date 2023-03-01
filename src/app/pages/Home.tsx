import ProfileExperience from '../components/profile-experience/ProfileExperience';
import ProfileHeader from '../components/profile-header/ProfileHeader';
import LayoutBasic from '../layouts/basic/Basic';

function PageHome() {
    return (
        <LayoutBasic wrapMain={true}>
            <ProfileHeader />
            <ProfileExperience />
        </LayoutBasic>
    );
}

export default PageHome;
