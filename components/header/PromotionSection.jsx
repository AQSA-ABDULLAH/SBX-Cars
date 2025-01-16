import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"; 

const PromotionSection = () => {
  return (
    <div>
      <section className="px-4 py-2 flex items-center bg-[#ad9d6f] text-white font-medium min-h-[36px] tracking-wide">
        <div className="flex flex-1 justify-center align-center">
          <a
            className="promotion-link flex items-center space-x-2"
            href="https://sbxcars.com/sell-your-vehicle"
          >
            <span className="text-[16px]">SELL YOUR SUPERCAR</span>
            <div className="image-wrapper">
            <MdOutlineKeyboardArrowRight />
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
