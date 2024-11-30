import Image from "next/image";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import contact1 from '../../public/img/contact-1.webp'
import contact2 from '../../public/img/contact-2.webp'
import swordmanPart from '../../public/img/swordman-partial.webp'
import swordman from '../../public/img/swordman.webp'
import { StaticImageData } from 'next/image'; // Import the type for StaticImageData

interface ImageClipBoxProps {
  src: string | StaticImageData; // Allow both string URLs and StaticImageData
  clipClass: string;
}

const ImageClipBox: React.FC<ImageClipBoxProps> = ({ src, clipClass }) => (
  <div className={clipClass}>
    <Image alt="" width={0} height={0} src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src={contact1}
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src={contact2}
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src={swordmanPart}
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src={swordman}
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Zentry
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            containerClass="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button id={''} title="contact us" containerClass="mt-10 cursor-pointer" leftIcon={<div></div>} rightIcon={<div></div>}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
