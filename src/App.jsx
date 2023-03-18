import Spline from "@splinetool/react-spline";
import bgSound from "./assets/bg-sound-fire.mp3";

export default function App() {
    return (
        <>
            <section className="h-screen w-screen relative bg-[#13042A]">
                <article className="absolute top-10 left-24 text-4xl">
                    <h1 className="text-white">
                        Mira mama hice una Pagina con un diseño 3D
                    </h1>
                </article>
                <Spline scene="https://prod.spline.design/oVIp866wZdeJPZER/scene.splinecode" />
                <div className="absolute top-28 left-8">
                    <audio src={bgSound} controls autoplay />
                </div>
            </section>
        </>
    );
}
