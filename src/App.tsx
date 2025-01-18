import './App.css';
import EditModal from './components/Modal';
import useApp from './hooks/useApp';
import Header from './components/Header';
import InventoryStats from './components/InventoryStats';
import CardsSection from './components/CardsSection';
import ContentSection from './components/ContentSection';

function App() {
  const { handleToggle, isAdmin, fetching, editItemDetails } = useApp()
  return (
    <div className="App">
      <div className="App-header p-7 pt-0">
        <Header isAdmin={isAdmin} handleToggle={handleToggle} />
        <InventoryStats />
        <CardsSection />
        <ContentSection fetching={fetching} />
        {editItemDetails && <EditModal />}
      </div>
    </div>
  );
}

export default App;
