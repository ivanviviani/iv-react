import LayoutBasic from '../layouts/basic/Basic';
import Postcard from '../components/postcard/Postcard';

function PageHome() {
    return (
        <LayoutBasic wrapMain={true}>
            <Postcard />
        </LayoutBasic>
    );
}

export default PageHome;
