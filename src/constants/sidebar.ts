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
        link: "user",
        icon: "",
      },
      {
        name: "Guarantors",
        icon: "",
      },
      {
        name: "Loans",
        icon: "",
      },
      {
        name: "Decision Models",
        icon: "",
      },
      {
        name: "Savings",
        icon: "",
      },
      {
        name: "Loan Requests",
        icon: "",
      },

      {
        name: "Whitelist",
        icon: "",
      },
      {
        name: "Karma",
        icon: "",
      },
    ],
  },
];
