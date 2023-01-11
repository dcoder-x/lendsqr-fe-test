import { assets } from "../assets";

interface card {
  icon: string;
  description: string;
  value:string;
}

export const userCards: card[] = [
  {
    icon: assets.icons.usersvg,
    description: "Users",
    value: "2400",
  },
  {
    icon: assets.icons.activeusers,
    description: "Active Users",
    value: "25400",
  },
  {
    icon: assets.icons.userswithloan,
    description: "Users with Loans",
    value: "28400",
  },
  {
    icon: assets.icons.userswithsavings,
    description: "Users with Savings",
    value: "27400",
  },
];
