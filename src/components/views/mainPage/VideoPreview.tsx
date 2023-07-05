import logoMikaTun from "./../../../assets/svg/logo_mika_tun.svg";
import videoMP4 from "./../../../assets/videos/main_preview.mp4";
import videoWEBM from "./../../../assets/videos/main_preview.webm";
import ButtonRoundedBig from "../../ui/ButtonRoundedBig";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const VideoPreview = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black"></div>
            <video
                className="object-cover w-full h-full pointer-events-none"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={videoMP4} type="video/mp4; codecs=mp4a.40.2" />
                <source src={videoWEBM} type="video/webm; codecs=vp8" />
            </video>
            <div className="absolute z-20 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                    className="w-[600px] h-auto mx-auto"
                    src={logoMikaTun}
                    alt="Логотип"
                />
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-light">
                    {t("main_page_title")}
                </h1>
                <ButtonRoundedBig
                    title={t("book_table")}
                    color={"white"}
                    className="mt-14"
                    onClick={() => navigate("booking")}
                />
            </div>
        </section>
    );
};

export default VideoPreview;
