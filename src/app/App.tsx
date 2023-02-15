import { bem } from '../utils/ComponentUtils';
import Counter from './atoms/counter/Counter';
import Text from './atoms/text/Text';
import './App.scss';
import Basic from './layouts/basic/Basic';
import Footer from './components/footer/Footer';
const cl = bem('app');

function App() {
    const plainText =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat officiis sapiente ad odit. Voluptatem totam, inventore perspiciatis iste, aliquam at debitis animi corporis rem distinctio officia blanditiis aspernatur exercitationem?';
    const htmlText = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat officiis sapiente ad odit. Voluptatem totam, inventore perspiciatis iste, aliquam at debitis animi corporis rem distinctio officia blanditiis aspernatur exercitationem?</p>`;
    return (
        <div className={cl()}>
            <main
                id="main"
                className={cl('main')}
            >
                <Basic>
                    <Text
                        text={htmlText}
                        textIsRich={true}
                    />
                    <Text text={plainText} />
                    <Counter />
                </Basic>
            </main>
            <Footer />
        </div>
    );
}

export default App;
