import { assets } from "../assets";

interface card {
  icon: string;
  description: string;
  value: 0 | number | string;
}

export const userCards: card[] = [
  {
    icon: assets.icons.usersvg,
    description: "Users",
    value: "2,400",
  },
  {
    icon: assets.icons.activeusers,
    description: "Active Users",
    value: "2,400",
  },
  {
    icon: assets.icons.userswithloan,
    description: "Users with Loans",
    value: "2,400",
  },
  {
    icon: assets.icons.userswithsavings,
    description: "Users with Savings",
    value: "2,400",
  },
];
