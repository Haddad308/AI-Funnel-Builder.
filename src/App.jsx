import { RouterProvider, createHashRouter } from "react-router-dom"
import FunnelBuilder from "./pages/FunnelBuilder"
import Gallery from "./pages/Gallery"
import QuestionsForm from "./pages/QuestionsForm"
import Funnels from "./pages/Funnels"
import Layout from "./components/Layout/Layout"
import NotFound from "./pages/NotFound"


let routers = createHashRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Funnels /> },
      { path: "FunnelBuilder", element: <FunnelBuilder /> },
      { path: "Gallery", element: <Gallery /> },
      { path: "QuestionsForm", element: <QuestionsForm /> }
    ]
  }, {
    path: "*", element: <NotFound />
  }
]);



function App() {
  return (
    <RouterProvider router={routers} />
  )
}

export default App
