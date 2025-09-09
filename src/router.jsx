import {Routes, Route} from 'react-router-dom';
import Privacy from './Componentes/PoliticaTerminos/PrivacyPolicy';
import Terms from './Componentes/PoliticaTerminos/TermsConditions';
import Cendi from './Componentes/ComponentesCendi/ContainerCendi';
import Preescolar from './Componentes/ComponentesPreescolar/ContainerPreescolar';
import Primaria from './Componentes/ComponentesPrimaria/ContainerPrimaria';
import Secundaria from './Componentes/ComponentesSecundaria/ContainerSecundaria';
import ContainerApp from './ContainerApp';
import ScrollToTop from './Componentes/ScrollToTop';

const RouterComponent = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<ContainerApp />} />
                <Route path="/presentacion" element={<ContainerApp />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/terms-and-conditions" element={<Terms />} />
                <Route path="/cendi" element={<Cendi />} />
                <Route path="/preescolar" element={<Preescolar />} />
                <Route path="/primaria" element={<Primaria />} />
                <Route path="/secundaria" element={<Secundaria />} />
            </Routes>
        </>
    );
};
export default RouterComponent;