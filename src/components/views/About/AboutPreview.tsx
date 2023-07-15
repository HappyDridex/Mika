import ButtonRoundedBig from "../../ui/ButtonRoundedBig";

interface IProps {
    onPreviewButtonClick(): void;
}

const AboutPreview = ({ onPreviewButtonClick }: IProps) => {
    return (
        <section className="relative flex h-screen flex-col items-center">
            <div className="absolute left-0 top-0 -z-[1] h-full w-full">
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent via-transparent to-black"></div>
                <img className="h-full w-full object-cover" src="/images/about/about-preview.png" alt="Ущелье" />
            </div>
            <h1 className="mt-[30vh] text-center text-3xl text-white md:text-[40px]">Немного о нашем ресторане</h1>
            <ButtonRoundedBig onClick={onPreviewButtonClick} className="mt-9" color="white" title="Читать" />
        </section>
    );
};

export default AboutPreview;
