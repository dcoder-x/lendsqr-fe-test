import { assets } from "../assets";

interface link {
  name: string;
  link?: string;
  icon: string;
}
interface menu {
  title: string;
  sublinks: link[];
}
export const sideBarMenu: menu[] = [
  {
    title: "Customers",
    sublinks: [
      {
        name: "User",
        link: "./",
        icon:  assets.icons.users,
      },
      {
        name: "Guarantors",
        icon: assets.icons.guarantors,
      },
      {
        name: "Loans",
        icon: assets.icons.loans,
      },
      {
        name: "Decision Models",
        icon: assets.icons.handshake,
      },
      {
        name: "Savings",
        icon: assets.icons.savings,
      },
      {
        name: "Loan Requests",
        icon: assets.icons.loans,
      },

      {
        name: "Whitelist",
        icon: assets.icons.whitelist,
      },
      {
        name: "Karma",
        icon: assets.icons.karma,
      },
    ],
  },
  {
    title: "Businesses",
    sublinks: [
      {
        name: "Organization",
        icon: assets.icons.organizations,
      },
      {
        name: "Loan Products",
        icon: assets.icons.loanproducts,
      },
      {
        name: "Savings Products",
        icon: assets.icons.savings,
      },
      {
        name: "Fees and Charges",
        icon: assets.icons.handshake,
      },
      {
        name: "Services",
        icon: assets.icons.services,
      },
      {
        name: "Service Account",
        icon: assets.icons.settlements,
      },

      {
        name: "Settlements",
        icon: assets.icons.settlements,
      },
      {
        name: "Reports",
        icon: assets.icons.reports,
      },
    ],
  },
  {
    title: "Customers",
    sublinks: [
      {
        name: "Preferences",
        icon: assets.icons.preferences,
      },
      {
        name: "Fees and Pricing",
        icon: assets.icons.handshake,
      },
      {
        name: "Audit Logs",
        icon: assets.icons.auditor,
      },
    ],
  },
];
