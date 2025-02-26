import { useEffect, useState } from "react";

type NavigationProps = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };

export default function SideNavbar({ onMouseEnter, onMouseLeave }: NavigationProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`sideNavbarContainer ${show ? "show" : ""}`}>
            <ul className="sideNavbarContent">
                <a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} href="#projects"><li>Projects</li></a>
                <a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} href="#experiences"><li>Experience</li></a>
                <a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} href="#certificates"><li>Certification</li></a>
                <a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} href="#"><li>About Me</li></a>
            </ul>
        </div>
    );
}
