import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import videoMP4 from "./../../../assets/videos/main_preview.mp4";
import videoWEBM from "./../../../assets/videos/main_preview.webm";
import ButtonRoundedBig from "../../ui/ButtonRoundedBig";
import IconLogoMikaTun from "../../icons/IconLogoMikaTun";

const VideoPreview = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const video = useRef<HTMLVideoElement | null>(null);

    return (
        <section className="relative h-screen w-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black"></div>
            <video
                className="pointer-events-none h-full w-full object-cover opacity-70"
                autoPlay
                muted
                loop
                playsInline
                ref={video}
            >
                <source src={videoMP4} type="video/mp4; codecs=mp4a.40.2" />
                <source src={videoWEBM} type="video/webm; codecs=vp8" />
            </video>
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform text-center">
                <div className="mx-auto flex h-auto w-full max-w-[350px] justify-center md:max-w-[600px]">
                    <IconLogoMikaTun />
                </div>
                <h1 className="text-2xl text-light md:text-3xl lg:text-4xl xl:text-5xl">{t("main_page_title")}</h1>
                <div className="mt-14 flex flex-col items-center">
                    <ButtonRoundedBig
                        title={t("reserve_table")}
                        color={"white"}
                        className=""
                        onClick={() => navigate("booking")}
                    />
                    <ButtonRoundedBig
                        title={t("how_to_get_to_us")}
                        color={"transparent"}
                        className="mt-5"
                        onClick={() => window.open(`${process.env.REACT_APP_YANDEX_MAPS_LINK}`)}
                    />
                </div>
            </div>
        </section>
    );
};

export default VideoPreview;
