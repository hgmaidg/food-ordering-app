import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

export default function HomeMenu({ children }) {
  return (
    <section>
      <div className="absolute left-0 right-0 w-full">
        <div className="absolute -top-[100px] left-0 -z-10">
          <Image
            src="/sallad1.png"
            alt="sallad"
            width={109}
            height={189}
            objectFit="contain"
          />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10 transform -scale-x-100">
          <Image
            src="/sallad1.png"
            alt="sallad"
            width={109}
            height={189}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="text-center mb-8">
        <SectionHeader subHeader={"Check Out Our"} mainHeder={"Menu"} />
      </div>
      <div className="grid grid-cols-3 gap-12">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
