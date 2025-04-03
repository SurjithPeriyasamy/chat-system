import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div className="flex p-3 gap-5 h-[90vh] w-[90vw] bg-[rgb(17,25,40,0.75)] rounded-lg *:border-r-gray-600 *:border-r *:p-2">
      <List />
      <Chat />
      <Detail />
    </div>
  );
}

export default App;
