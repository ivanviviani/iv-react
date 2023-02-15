import { bem } from '../../../utils/ComponentUtils';
import './Postcard.scss';
const cl = bem('c-postcard');

function Postcard() {
    return <div className={cl()}>POSTCARD</div>;
}

export default Postcard;
