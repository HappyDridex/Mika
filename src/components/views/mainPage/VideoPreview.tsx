import logoMikaTun from "./../../../assets/svg/logo_mika_tun.svg";
import video from "./../../../assets/videos/main_preview.mp4";
import ButtonRoundedBig from "../../ui/ButtonRoundedBig";

const VideoPreview = () => {
    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black"></div>
            <video className="object-cover w-full h-full" src={video} autoPlay muted loop />
            <div className="absolute z-20 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img className="w-[600px] h-auto" src={logoMikaTun} alt="Логотип" />
                <h1 className="text-5xl text-light">Вид. Еда. Профессионализм</h1>
                <ButtonRoundedBig title={"Заказать стол"} color={"white"} />
            </div>
        </section>
    );
};

export default VideoPreview;
