import { ScrollingProvider, Section } from 'react-scroll-section';
import { useHistory, useRouteMatch } from 'react-router-dom';
import AppContent from '../components/layout-components/AppContent';
import SideNav from '../components/layout-components/SideNav';
import '../styles/App.scss'

function App() {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div className="app">
      <ScrollingProvider>
        <SideNav history={history} match={match}/>

        <AppContent />
      </ScrollingProvider>
    </div>
  );
}

export default App;
