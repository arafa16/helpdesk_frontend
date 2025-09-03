import { useRoutes } from "react-router-dom";
import Menu from "../layouts/SideMenu";
import LoginPage from "../pages/AuthPage/LoginPage";
import RegistrationPage from "../pages/AuthPage/RegistrationPage";
import ErrorPage from "../pages/ErrorPage";
import DataTicketPage from "../pages/TicketPage/DataTicketPage";
import DataTicketExecutorPage from "../pages/TicketPage/DataTicketExecutorPage";
import DataTicketCustomerPage from "../pages/TicketPage/DataTicketCustomerPage";
import DataUserPage from "../pages/UserPage/DataUserPage";
import ViewTicketPage from "../pages/TicketPage/ViewTicketPage";
import CreateTicketPage from "../pages/TicketPage/CreateTicketPage";
import EditTicketPage from "../pages/TicketPage/EditTicketPage";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Menu />,
      children: [
        {
          path: "/ticket",
          element: <DataTicketPage />,
        },
        {
          path: "/ticket/create",
          element: <CreateTicketPage />,
        },
        {
          path: "/ticket_executor",
          element: <DataTicketExecutorPage />,
        },
        {
          path: "/ticket_customer",
          element: <DataTicketCustomerPage />,
        },
        {
          path: "/ticket/view/:id",
          element: <ViewTicketPage />,
        },
        {
          path: "/ticket/edit/:id",
          element: <EditTicketPage />,
        },
        {
          path: "/user",
          element: <DataUserPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/registration",
      element: <RegistrationPage />,
    },
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
