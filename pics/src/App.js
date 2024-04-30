import SearchBar from "./components/SearchBar";

function App() {
    const handleSubmit = (term) => {
        console.log('Делаем поиск с помощью', term);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
        </div>
    );
}

export default App;