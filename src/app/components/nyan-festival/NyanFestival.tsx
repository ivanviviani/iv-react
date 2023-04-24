import Nyan from 'nyan-cat-festival/index';
import './NyanFestival.scss';
import { bem } from '../../../utils/ComponentUtils';
const cl = bem('c-nyan-festival');

function NyanFestival() {
    const festival = new Nyan({
        song: null,
        transitionDuration: 5 * 1000,
        transitionTiming: 'cubic-bezier(0.0, 0.0, 0.85, 1.0)',
        cues: [
            {
                delay: 0,
                start: 'left',
                zIndex: 5,
            },
            {
                delay: 1500,
                start: 'left-top',
                zIndex: 5,
            },
            {
                delay: 1500,
                start: 'left-bottom',
                end: 'right-top',
                transitionDuration: 5 * 1000,
                transitionTiming: 'ease-in',
                zIndex: 10,
            },
        ],
    });

    const label = 'Start Nyan festival!';

    return (
        <button
            id="nyan-festival"
            className={cl()}
            type="button"
            aria-label={label}
            title={label}
            onClick={() => festival.nyan()}
        >
            🎉
        </button>
    );
}

export default NyanFestival;
