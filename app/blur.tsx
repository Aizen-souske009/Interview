import React from "react";

type BlurTextLinkProps = {
    href?: string;
    children: React.ReactNode;
    active?: boolean;
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
};

export const BlurTextLink: React.FC<BlurTextLinkProps> = ({
    href = "#",
    children,
    active = false,
    className = "",
    onClick
}) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`blur-text-link ${active ? 'active' : ''} ${className}`}
            aria-expanded={active}
        >
            <span className="blur-text-content">
                {children}
            </span>
        </a>
    );
};

export default BlurTextLink;