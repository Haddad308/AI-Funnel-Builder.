import { RouterProvider, createBrowserRouter } from "react-router-dom"
import FunnelBuilder from "./pages/FunnelBuilder"
import Gallery from "./pages/Gallery"
import QuestionsForm from "./pages/QuestionsForm"
import Funnels from "./pages/Funnels"
import Layout from "./components/Layout"


let routers = createBrowserRouter([
  {path: "", element: <Layout />, children:[
    { index:true, element: <Funnels /> },
    { path: "FunnelBuilder", element: <FunnelBuilder /> },
    { path: "Gallery", element: <Gallery /> },
    { path: "QuestionsForm", element: <QuestionsForm /> }
  ]}
]);

function App() {

  return (
      <RouterProvider router={routers} />
  )
}

export default App