import "./app.scss";

import type { FC } from "react";

interface AppProps {
  children:React.ReactNode
}

const App: FC<AppProps> = ({ children }) => children

export default App;
