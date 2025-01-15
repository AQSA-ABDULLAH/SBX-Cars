import { RxCross2 } from "react-icons/rx";

const PromotionSection = () => {
  return (
    <div>
      <section className="px-4 py-2 flex items-center bg-[#ad9d6f] min-h-[36px]">
        <div className=" flex-1 justify-center">
          <a
            className="promotion-link flex items-center space-x-2"
            href="https://sbxcars.com/sell-your-vehicle"
          >
            <span className="text-lg font-semibold">SELL YOUR SUPERCAR</span>
            <div className="image-wrapper">
            
              {/* <Image
                src="/Assets/Icons/arrow-right-strong.svg"
                alt="Arrow Right"
                width={24}
                height={24}
              /> */}
            </div>
          </a>
        </div>

        <button type="button" className="base-button p-0 no-border">
          <div className="image-wrapper">
          <RxCross2 />
          </div>
        </button>
      </section>
    </div>
  );
};

export default PromotionSection;
