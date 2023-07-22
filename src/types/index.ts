export type MainNavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  description?: string;
  hide?: boolean;
  content?: string;
  label?: string;
  external?: boolean;
  items?: MainNavItem[];
};

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}
export interface NavItemWithChildren extends MainNavItem {
  icon: string;
  items: NavItemWithChildren[];
}
export type SidebarNavItem = NavItemWithChildren;
