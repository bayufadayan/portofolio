import { useEffect, useState } from "react";

type NavigationProps = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};

export default function ToTheTop({ onMouseEnter, onMouseLeave }: NavigationProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`toTheTop ${show ? "show" : ""}`}>
            <a href="#">
                <ul className="toTheTopContainer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                    <li>
                        <i className="fa-solid fa-arrow-up"></i>
                    </li>
                </ul>
            </a>
        </div>
    );
}
