import Image from "next/image";
import ImageComponent from "./components/image-component";
export default function Home() {
  return (
    <div className="w-full bg-slate-600 md:w-vw sm:w-96vw flex justify-center items-center">
      <div className="flex flex-wrap justify-center items-center gap-5 p-5 rounded-2xl">
        <ImageComponent imageName="1.png" />
        <ImageComponent imageName="2.png" />
        <ImageComponent imageName="3.png" />
        <ImageComponent imageName="6.png" />
        <ImageComponent imageName="5.png" />
        <ImageComponent imageName="7.png" />
        <ImageComponent imageName="8.png" />
        <ImageComponent imageName="9.png" />
      </div>
    </div>
  );
}
