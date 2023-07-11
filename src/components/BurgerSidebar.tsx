import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import IconCross from "./icons/IconCross";
import IconBurgerMenu from "./icons/IconBurgerMenu";
import { useTranslation } from "react-i18next";
import ButtonRoundedSmall from "./ui/ButtonRoundedSmall";

interface IProps {
    className?: string;
}

const BurgerSidebar = ({ className }: IProps) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const { pathname } = useLocation();
    const sidebar = useRef<HTMLElement>(null);
    const instagramLink = process.env.REACT_APP_INSTAGRAM_LINK;
    const yandexMapsLink = process.env.REACT_APP_YANDEX_MAPS_LINK;
    const { t } = useTranslation();

    const navLinks = [
        {
            title: `${pathname === "/" ? t("restaurant_menu") : t("main_page")}`,
            path: `${pathname === "/" ? "/menu" : "/"}`,
        },
        { title: t("reserve_table"), path: "/booking" },
        { title: t("how_to_get_to_us"), path: yandexMapsLink ? yandexMapsLink : "#" },
        { title: "О нас", path: "/about" },
    ];

    const hideSidebar = useCallback((evt: PointerEvent): void => {
        evt.stopPropagation();
        if (!evt.target || !sidebar.current) return;
        const sidebarRef = sidebar.current as HTMLElement;
        const target = evt.target as HTMLElement;
        if (!sidebarRef.contains(target)) setShowSidebar(false);
    }, []);

    useEffect(() => {
        showSidebar
            ? document.addEventListener("pointerdown", hideSidebar)
            : document.removeEventListener("pointerdown", hideSidebar);
    }, [showSidebar, hideSidebar]);

    useEffect(() => {
        setShowSidebar(false);
    }, [pathname]);

    return (
        <div className={`${className}`}>
            <button className="p-4 text-white" onClick={() => setShowSidebar(true)}>
                <IconBurgerMenu className="w-[45px] md:w-[75px]" />
            </button>
            <CSSTransition in={showSidebar} timeout={300} mountOnEnter unmountOnExit classNames="sidebar-appear">
                <nav
                    ref={sidebar}
                    className="fixed right-0 top-0 z-30 flex h-[100%] max-w-[75%] flex-col overflow-hidden bg-white px-8 pb-14 pt-24 md:px-16"
                >
                    <ButtonRoundedSmall
                        className="absolute right-0 top-0 mr-4 mt-4 p-3"
                        onClick={() => setShowSidebar(false)}
                        color="transparent"
                    >
                        <IconCross className="text-black" />
                    </ButtonRoundedSmall>

                    <div className="flex flex-1 flex-col flex-wrap items-start gap-6 md:flex-row md:flex-nowrap md:gap-10">
                        <div className="flex flex-col">
                            <h3 className="mb-4 select-none text-lg text-gray68 md:mb-9 xl:text-xl">{t("site_navigation")}</h3>
                            <ul className="grow">
                                {navLinks.map((link) => (
                                    <li
                                        key={link.title}
                                        className="mb-2 text-xl text-black underline-offset-8 hover:underline md:mb-5 xl:text-3xl"
                                    >
                                        {typeof link.path === "string" && link.path.includes("yandex") ? (
                                            <a href={link.path} target="_blank" className="block w-fit sm:w-max ">
                                                {link.title}
                                            </a>
                                        ) : (
                                            <Link to={link.path} className="block w-fit sm:w-max ">
                                                {link.title}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="mb-4 text-lg text-gray68 md:mb-9 xl:text-xl">{t("social_networks")}</h3>
                            <a
                                className="mb-2 block text-xl md:mb-4 xl:text-2xl"
                                href={instagramLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>

                    <footer>
                        <h4 className="select-none text-lg text-gray68 xl:text-xl">{t("contact_us")}</h4>
                        <a className="mt-2 block text-xl xl:text-2xl" href="/">
                            mika-tun@gmail.com
                        </a>
                        <a className="mt-2 block text-xl xl:text-2xl" href="tel:+37493129492" target="_blank">
                            +374 93129492
                        </a>
                    </footer>
                </nav>
            </CSSTransition>
        </div>
    );
};

export default BurgerSidebar;
