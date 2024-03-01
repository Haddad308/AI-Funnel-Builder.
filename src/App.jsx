import { RouterProvider, createBrowserRouter } from "react-router-dom"
import FunnelBuilder from "./pages/FunnelBuilder"
import Gallery from "./pages/Gallery"
import QuestionsForm from "./pages/QuestionsForm"
import Funnels from "./pages/Funnels"
import Layout from "./components/Layout/Layout"
import NotFound from "./pages/NotFound"
import SelectedStepContextProvider from "./Context/SelectedStepID"


let routers = createBrowserRouter([
  {
    path: "home", element: <Layout />, children: [
      { index: true, element: <Funnels /> },
      { path: "FunnelBuilder", element: <FunnelBuilder /> },
      { path: "Gallery", element: <Gallery /> },
      { path: "QuestionsForm", element: <QuestionsForm /> }
    ]
  }, {
    path: "*", element: <NotFound />
  }
]);


// TODO: 1- Add roles. 
// TODO: 2- fix drag and drop. 

function App() {
  return (
    <SelectedStepContextProvider>
      <RouterProvider router={routers} />
    </SelectedStepContextProvider>
  )
}

export default App
