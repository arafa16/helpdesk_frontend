import { useRoutes } from "react-router-dom";
import Menu from "../layouts/SideMenu";
import LoginPage from "../pages/AuthPage/LoginPage";
import RegistrationPage from "../pages/AuthPage/RegistrationPage";
import RequestResetPasswordPage from "../pages/AuthPage/RequestResetPasswordPage";
import ResetPasswordPage from "../pages/AuthPage/ResetPasswordPage";
import ErrorPage from "../pages/ErrorPage";
import DataTicketPage from "../pages/TicketPage/DataTicketPage";
import DataTicketExecutorPage from "../pages/TicketPage/DataTicketExecutorPage";
import DataTicketCustomerPage from "../pages/TicketPage/DataTicketCustomerPage";
import DataUserPage from "../pages/UserPage/DataUserPage";
import ViewTicketPage from "../pages/TicketPage/ViewTicketPage";
import CreateTicketPage from "../pages/TicketPage/CreateTicketPage";
import EditTicketPage from "../pages/TicketPage/EditTicketPage";
import ViewUserPage from "../pages/UserPage/ViewUserPage";
import EditUserPage from "../pages/UserPage/EditUserPage";
import CreateUserPage from "../pages/UserPage/CreateUserPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import DataCompanyPage from "../pages/Company/DataCompanyPage";
import ViewCompanyPage from "../pages/Company/ViewCompanyPage";
import EditCompanyPage from "../pages/Company/EditCompanyPage";
import CreateCompanyPage from "../pages/Company/CreateCompanyPage";
import DataLocationPage from "../pages/Location/DataLocationPage";
import ViewLocationPage from "../pages/Location/ViewLocationPage";
import CreateLocationPage from "../pages/Location/CreateLocationPage";
import EditLocationPage from "../pages/Location/EditLocationPage";
import DataDivisionPage from "../pages/Division/DataDivisionPage";
import ViewDivisionPage from "../pages/Division/ViewDivisionPage";
import CreateDivisionPage from "../pages/Division/CreateDivisionPage";
import EditDivisionPage from "../pages/Division/EditDivisionPage";
import DataUserStatusPage from "../pages/UserStatus/DataUserStatusPage";
import ViewUserStatusPage from "../pages/UserStatus/ViewUserStatusPage";
import EditUserStatusPage from "../pages/UserStatus/EditUserStatusPage";
import CreateUserStatusPage from "../pages/UserStatus/CreateUserStatusPage";
import DataTicketStatusPage from "../pages/TicketStatus/DataTicketStatusPage";
import ViewTicketStatusPage from "../pages/TicketStatus/ViewTicketStatusPage";
import EditTicketStatusPage from "../pages/TicketStatus/EditTicketStatusPage";
import CreateTicketStatusPage from "../pages/TicketStatus/CreateTicketStatusPage";
import DataTicketCategoryPage from "../pages/TicketCategory/DataTicketCategoryPage";
import ViewTicketCategoryPage from "../pages/TicketCategory/ViewTicketCategoryPage";
import EditTicketCategoryPage from "../pages/TicketCategory/EditTicketCategoryPage";
import CreateTicketCategoryPage from "../pages/TicketCategory/CreateTicketCategoryPage";
import DataTicketAccessPage from "../pages/TicketAccess/DataTicketAccessPage";
import ViewTicketAccessPage from "../pages/TicketAccess/ViewTicketAccessPage";
import EditTicketAccessPage from "../pages/TicketAccess/EditTicketAccessPage";
import CreateTicketAccessPage from "../pages/TicketAccess/CreateTicketAccessPage";
import DataAreaPage from "../pages/Area/DataAreaPage";
import ViewAreaPage from "../pages/Area/ViewAreaPage";
import EditAreaPage from "../pages/Area/EditAreaPage";
import CreateAreaPage from "../pages/Area/CreateAreaPage";
import DataCustomerPage from "../pages/Customer/DataCustomerPage";
import ViewCustomerPage from "../pages/Customer/ViewCustomerPage";
import EditCustomerPage from "../pages/Customer/EditCustomerPage";
import CreateCustomerPage from "../pages/Customer/CreateCustomerPage";
import DataTicketTroubleConsequencePage from "../pages/TicketTroubleConsequence/DataTicketTroubleConsequencePage";
import ViewTicketTroubleConsequencePage from "../pages/TicketTroubleConsequence/ViewTicketTroubleConsequencePage";
import EditTicketTroubleConsequencePage from "../pages/TicketTroubleConsequence/EditTicketTroubleConsequencePage";
import CreateTicketTroubleConsequencePage from "../pages/TicketTroubleConsequence/CreateTicketTroubleConsequencePage";
import DataTicketTroubleCategoryPage from "../pages/TicketTroubleCategory/DataTicketTroubleCategoryPage";
import ViewTicketTroubleCategoryPage from "../pages/TicketTroubleCategory/ViewTicketTroubleCategoryPage";
import EditTicketTroubleCategoryPage from "../pages/TicketTroubleCategory/EditTicketTroubleCategoryPage";
import CreateTicketTroubleCategoryPage from "../pages/TicketTroubleCategory/CreateTicketTroubleCategoryPage";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Menu />,
      children: [
        {
          path: "/",
          element: <DashboardPage />,
        },
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
        //user page
        {
          path: "/user",
          element: <DataUserPage />,
        },
        {
          path: "/user/view/:id",
          element: <ViewUserPage />,
        },
        {
          path: "/user/edit/:id",
          element: <EditUserPage />,
        },
        {
          path: "/user/create",
          element: <CreateUserPage />,
        },

        //company
        {
          path: "/company",
          element: <DataCompanyPage />,
        },
        {
          path: "/company/view/:id",
          element: <ViewCompanyPage />,
        },
        {
          path: "/company/edit/:id",
          element: <EditCompanyPage />,
        },
        {
          path: "/company/create",
          element: <CreateCompanyPage />,
        },

        //location
        {
          path: "/location",
          element: <DataLocationPage />,
        },
        {
          path: "/location/view/:id",
          element: <ViewLocationPage />,
        },
        {
          path: "/location/edit/:id",
          element: <EditLocationPage />,
        },
        {
          path: "/location/create",
          element: <CreateLocationPage />,
        },

        //division
        {
          path: "/division",
          element: <DataDivisionPage />,
        },
        {
          path: "/division/view/:id",
          element: <ViewDivisionPage />,
        },
        {
          path: "/division/edit/:id",
          element: <EditDivisionPage />,
        },
        {
          path: "/division/create",
          element: <CreateDivisionPage />,
        },

        //user_status
        {
          path: "/user_status",
          element: <DataUserStatusPage />,
        },
        {
          path: "/user_status/view/:id",
          element: <ViewUserStatusPage />,
        },
        {
          path: "/user_status/edit/:id",
          element: <EditUserStatusPage />,
        },
        {
          path: "/user_status/create",
          element: <CreateUserStatusPage />,
        },

        //ticket_status
        {
          path: "/ticket_status",
          element: <DataTicketStatusPage />,
        },
        {
          path: "/ticket_status/view/:id",
          element: <ViewTicketStatusPage />,
        },
        {
          path: "/ticket_status/edit/:id",
          element: <EditTicketStatusPage />,
        },
        {
          path: "/ticket_status/create",
          element: <CreateTicketStatusPage />,
        },

        //ticket_category
        {
          path: "/ticket_category",
          element: <DataTicketCategoryPage />,
        },
        {
          path: "/ticket_category/view/:id",
          element: <ViewTicketCategoryPage />,
        },
        {
          path: "/ticket_category/edit/:id",
          element: <EditTicketCategoryPage />,
        },
        {
          path: "/ticket_category/create",
          element: <CreateTicketCategoryPage />,
        },

        //ticket_access
        {
          path: "/ticket_access",
          element: <DataTicketAccessPage />,
        },
        {
          path: "/ticket_access/view/:id",
          element: <ViewTicketAccessPage />,
        },
        {
          path: "/ticket_access/edit/:id",
          element: <EditTicketAccessPage />,
        },
        {
          path: "/ticket_access/create",
          element: <CreateTicketAccessPage />,
        },

        //area
        {
          path: "/area",
          element: <DataAreaPage />,
        },
        {
          path: "/area/view/:id",
          element: <ViewAreaPage />,
        },
        {
          path: "/area/edit/:id",
          element: <EditAreaPage />,
        },
        {
          path: "/area/create",
          element: <CreateAreaPage />,
        },

        //customer
        {
          path: "/customer",
          element: <DataCustomerPage />,
        },
        {
          path: "/customer/view/:id",
          element: <ViewCustomerPage />,
        },
        {
          path: "/customer/edit/:id",
          element: <EditCustomerPage />,
        },
        {
          path: "/customer/create",
          element: <CreateCustomerPage />,
        },
        //ticket_trouble_consequence
        {
          path: "/ticket_trouble_consequence",
          element: <DataTicketTroubleConsequencePage />,
        },
        {
          path: "/ticket_trouble_consequence/view/:id",
          element: <ViewTicketTroubleConsequencePage />,
        },
        {
          path: "/ticket_trouble_consequence/edit/:id",
          element: <EditTicketTroubleConsequencePage />,
        },
        {
          path: "/ticket_trouble_consequence/create",
          element: <CreateTicketTroubleConsequencePage />,
        },
        //ticket_trouble_category
        {
          path: "/ticket_trouble_category",
          element: <DataTicketTroubleCategoryPage />,
        },
        {
          path: "/ticket_trouble_category/view/:id",
          element: <ViewTicketTroubleCategoryPage />,
        },
        {
          path: "/ticket_trouble_category/edit/:id",
          element: <EditTicketTroubleCategoryPage />,
        },
        {
          path: "/ticket_trouble_category/create",
          element: <CreateTicketTroubleCategoryPage />,
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
      path: "/req_reset",
      element: <RequestResetPasswordPage />,
    },
    {
      path: "/reset/:token",
      element: <ResetPasswordPage />,
    },
    {
      path: "/error-page",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
