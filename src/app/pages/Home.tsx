import ProfileCertifications from '../components/profile-certifications/ProfileCertifications';
import ProfileExperience from '../components/profile-experience/ProfileExperience';
import ProfileHeader from '../components/profile-header/ProfileHeader';
import LayoutBasic from '../layouts/basic/Basic';

function PageHome() {
    return (
        <LayoutBasic wrapMain={true}>
            <ProfileHeader />
            <ProfileExperience />
            <ProfileCertifications />
        </LayoutBasic>
    );
}

export default PageHome;
