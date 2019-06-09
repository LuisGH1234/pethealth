import React, { useState } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './header.scss';

interface Item {
    label: string;
    path?: string;
}

interface IProps {
    items: Item[];
    logoPath?: string;
    children?: React.ReactNode;
}

export default function Header(props: IProps) {
    const [isOpen, setOpen] = useState(false);
    const [active, setActive] = useState(0);

    function renderNavItem({ label, path }: Item, index: number) {
        return (
            <NavItem key={index}>
                <NavLink href={path || '#'} active={active === index} onClick={() => setActive(index)}>
                    {label}
                </NavLink>
            </NavItem>
        );
    }

    return (
        <header id="header">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={() => setOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {
                            props.items.map(renderNavItem)
                        }
                    </Nav>
                </Collapse>
            </Navbar>
                {/* <div className="header-overlay"> */}
                    {props.children}
                {/* </div> */}
        </header>
    );
}