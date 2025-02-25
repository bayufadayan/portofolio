type NavigationProps = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };

export default function Navigation({ onMouseEnter, onMouseLeave }: NavigationProps) {
    return (
        <nav>
            <ul>
                <a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} href="#projects"><li>Projects</li></a>
                <a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} href="#experiences"><li>Experience</li></a>
                <a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} href="#certificates"><li>Certification</li></a>
                <a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} href="#"><li>About Me</li></a>
            </ul>
        </nav>
    )
}
