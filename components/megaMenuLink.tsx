interface MegaMenuLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export const MegaMenuLink: React.FC<MegaMenuLinkProps> = ({
    href,
    children,
    onClick
}) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm block py-1"
        >
            {children}
        </a>
    );
};