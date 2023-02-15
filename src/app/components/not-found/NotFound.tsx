import { bem } from '../../../utils/ComponentUtils';
import './NotFound.scss';
const cl = bem('e-not-found');

function NotFound() {
    return <p className={cl()}>404 - Not Found :(</p>;
}

export default NotFound;
