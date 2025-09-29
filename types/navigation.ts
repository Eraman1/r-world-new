export interface NavItem {
    name: string;
    href?: string;
    hasDropdown?: boolean;
    hasMegaMenu?: boolean;
    children?: NavItem[];
}

export interface MegaMenuSection {
    title: string;
    items: string[];
}

export interface MegaMenuData {
    [key: string]: MegaMenuSection;
}