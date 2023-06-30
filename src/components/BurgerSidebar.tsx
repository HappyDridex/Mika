import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import IconCross from "./icons/IconCross";
import IconBurgerMenu from "./icons/IconBurgerMenu";

const navLinks = [
    { title: "Меню ресторана", path: "/menu" },
    { title: "Забронировать стол", path: "/" },
    { title: "Как доехать?", path: "/" },
];

const BurgerSidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const { pathname } = useLocation();
    const sidebar = useRef<HTMLElement>(null);

    const hideSidebar = useCallback((evt: PointerEvent): void => {
        evt.stopPropagation();
        if (!evt.target || !sidebar.current) return;
        const sidebarRef = sidebar.current as HTMLElement;
        const target = evt.target as HTMLElement;
        if (!sidebarRef.contains(target)) setShowSidebar(false);
    }, []);

    useEffect(() => {
        showSidebar ? document.addEventListener("pointerdown", hideSidebar) : document.removeEventListener("pointerdown", hideSidebar);
    }, [showSidebar]);

    useEffect(() => {
        setShowSidebar(false);
    }, [pathname]);

    return (
        <div>
            <button className="text-white p-4 absolute z-20 right-[3%] top-[7%]" onClick={() => setShowSidebar(true)}>
                <IconBurgerMenu />
            </button>
            <CSSTransition in={showSidebar} timeout={200} mountOnEnter unmountOnExit classNames="sidebar-appear">
                <nav
                    ref={sidebar}
                    className="fixed top-0 right-0 z-30 max-w-[45%] w-fit h-[100%] bg-white px-16 pt-24 pb-14 grid grid-cols-2 gap-3 overflow-hidden"
                >
                    <button className="absolute right-0 top-0 mt-2 mr-4 p-3" onClick={() => setShowSidebar(false)}>
                        <IconCross className="text-black" />
                    </button>
                    <div className="flex flex-col justify-self-start">
                        <h3 className="mb-9 text-darkGray text-xl select-none">Навигация по сайту</h3>
                        <ul className="grow">
                            {navLinks.map((link) => {
                                return (
                                    <li key={link.title} className="text-black text-3xl mb-5">
                                        <Link to={link.path}>{link.title}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <footer>
                            <h4 className="text-xl select-none">Связь с нами</h4>
                            <a className="text-2xl block mt-2" href="#">
                                mika-tun@gmail.com
                            </a>
                        </footer>
                    </div>
                    <div className="flex flex-col justify-self-end">
                        <h3 className="mb-9 text-darkGray text-xl">Навигация по сайту</h3>
                        <a className="text-2xl" href="#">
                            Instagram
                        </a>
                    </div>
                </nav>
            </CSSTransition>
        </div>
    );
};

export default BurgerSidebar;
