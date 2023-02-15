import { ReactNode } from 'react';
import { bem } from '../../../utils/ComponentUtils';
import './Basic.scss';
const cl = bem('l-basic');

function Basic({ children }: { children: ReactNode[] }) {
    return (
        <div className={cl()}>
            {children?.map((item) => (
                <section className={cl('item')}>{item}</section>
            ))}
        </div>
    );
}

export default Basic;
