import Footer from '../components/footer/Footer';
import ProfileCertifications from '../components/profile-certifications/ProfileCertifications';
import ProfileExperience from '../components/profile-experience/ProfileExperience';
import ProfileHeader from '../components/profile-header/ProfileHeader';
import ProfileLanguages from '../components/profile-languages/ProfileLanguages';
import SkipLinks from '../components/skip-links/SkipLinks';
import LayoutBasic from '../layouts/basic/Basic';

function PageHome() {
    return (
        <>
            <SkipLinks />
            <LayoutBasic wrapMain={true}>
                <ProfileHeader />
                <ProfileExperience />
                <ProfileCertifications />
                <ProfileLanguages />
            </LayoutBasic>
            <Footer />
        </>
    );
}

export default PageHome;
