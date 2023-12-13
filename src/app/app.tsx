import './index.scss';
import {withProviders} from './providers/index.ts';
import {Routing} from '../pages/routing.tsx';
import logo from '../../assets/logoMimic.gif';
import {Header} from '../widgets/index.ts';
import {Footer} from 'src/widgets/footer/ui/footer.tsx';
import {Layout} from 'antd';

const App = () => {
    return (
        <Layout className="app">
            <Header logoSrc={logo} title={'Что то на Front-end\'ском'}/>
            <Routing/>
            <Footer/>
        </Layout>

    );
};

export default withProviders(App);
