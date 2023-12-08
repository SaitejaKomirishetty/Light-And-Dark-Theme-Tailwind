import { useState } from "react";
import "./App.css";
import "./index.css";
import SideBar from "./components/SideBar";
import ChannelBar from "./components/ChannelBar";

import ContentContainer from "./components/ContentContainer";
import TopNavigation from "./components/TopNavigation";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex h-screen">
            <SideBar />
            <ChannelBar />
            <div className="ml-[272px]">
                
                <ContentContainer />
            </div>
        </div>
    );
}

export default App;
