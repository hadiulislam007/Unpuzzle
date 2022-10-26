import Image from "next/image";

function BannerOne() {
  return (
    <div className="container lg:max-w-full justify-between mt-24 mb-36 flex items-center">
      <div className="left lg:max-w-[800px] sm:w-full sm:order-last">
        <h1 className="font-patuaOne text-lg mb-7 text-black-100">
          Figma in 40 Minutes
        </h1>
        <div className="font-poppins">
          <p className="flex items-center gap-2 font-poppins font-regular">
            <Image src="/youtube.png" width={48} height={20} alt="icon" />
            Puzzle Journey
          </p>
          <p className="font-poppins font-regular text-grey">
            Last Activity on july 07, 2021
          </p>
          <p className="font-poppins font-regular text-black-80 w-2/3">
            Entertaining video showing you how to create a simple and clean
            design in Figma
          </p>
          <p className="flex items-center gap-x-5">
            <span className="font-poppins font-bold text-green text-[34px]">
              $49.99
            </span>
            <span className="font-poppins font-regular text-black-60 text-[24px] line-through">
              $89.99
            </span>
          </p>
          <div className="flex items-center gap-x-2 font-poppins">
            <span className="text-[16px] font-bold text-yellow">4.6</span>
            <span>
              <Image src="/star.png" width={21} height={20} alt="icon" />
              <Image src="/star.png" width={21} height={20} alt="icon" />
              <Image src="/star.png" width={21} height={20} alt="icon" />
              <Image src="/star.png" width={21} height={20} alt="icon" />
              <Image src="/star.png" width={21} height={20} alt="icon" />
            </span>
            <span className="text-[14px] text-black-50">(135)</span>
          </div>
          <p className="text-black-80">
            Unpuzzled by: <span className="font-bold">Mahtab Alam</span>
          </p>
          <button className="bg-blue px-8 py-2 rounded text-white font-bold">
            Buy Now
          </button>
        </div>
      </div>
      <div className="right lg:max-w-[700px] relative sm:w-full sm:order-last">
        <div className="max-w-[700px] max-h-[380px]">
          <Image
            className="absolute top-0"
            style={{ zIndex: -1 }}
            src="/maxresdefault1.png"
            width={700}
            height={380}
            alt="image"
          />
        </div>
        <div className="w-full items-stretch flex justify-center gap-4 absolute bottom-4">
          <div className="grid gap-2 justify-center bg-white rounded-lg py-2 px-3">
            <Image
              className="pb-2"
              src="/pdf.svg"
              width={24}
              height={30}
              alt="pdf"
            />
            <span>00:45</span>
          </div>
          <div className="grid gap-2 justify-center bg-white rounded-lg py-2 px-3">
            <Image
              className="pb-2"
              src="/microphone.svg"
              width={22}
              height={30}
              alt="pdf"
            />
            <span>03:10</span>
          </div>
          <div className="grid gap-2 justify-center bg-white rounded-lg py-2 px-3">
            <Image
              className="pb-2"
              src="/notes.svg"
              width={30}
              height={30}
              alt="pdf"
            />
            <span>05:33</span>
          </div>
          <div className="grid gap-2 justify-center bg-white rounded-lg py-2 px-3">
            <Image
              className="pb-2"
              src="/docs.svg"
              width={22.5}
              height={30}
              alt="pdf"
            />
            <span>07:33</span>
          </div>
          <div className="grid gap-2 justify-center bg-white rounded-lg py-2 px-3">
            <Image
              className="pb-2"
              src="/v-camera.svg"
              width={35}
              height={25}
              alt="pdf"
            />
            <span>22:33</span>
          </div>
          <div className="grid gap-2 justify-center bg-white rounded-lg py-2 px-3">
            <Image
              className="pb-2"
              src="/media.svg"
              width={31}
              height={25}
              alt="pdf"
            />
            <span>26:33</span>
          </div>
          <div className="grid gap-2 justify-center bg-white rounded-lg py-2 px-3">
            <Image
              className="pb-2"
              src="/pdf.svg"
              width={30}
              height={30}
              alt="pdf"
            />
            <span>32.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerOne;
