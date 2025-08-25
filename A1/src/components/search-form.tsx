import arrowDownIcon from "../assets/arrow-down.svg";
import locationPrimaryIcon from "../assets/location-primary.svg";
import timePrimaryIcon from "../assets/time-primary.svg";
import motobikeIcon from "../assets/motobike-primary.svg";
import dollarIcon from "../assets/dollar.svg";

export default function SearchForm() {
  return (
    <div className="absolute z-1 left-0 w-[calc(100%-600px)] bottom-0 bg-white flex items-center gap-[52px] translate-y-1/2 rounded-2xl border-[2px] border-primary px-[34px] py-[27px] mx-[300px] h-[110px]">
      <div className="relative w-[222px] px-2.5 pl-[10.5] flex items-center justify-between before:content-[''] before:absolute before:-right-[26px] before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-full before:bg-[#E1E4E5]">
        <div className="flex items-center gap-2">
          <img src={locationPrimaryIcon} alt="Location primary" />
          <span className="text-[#6E7070]">Destination</span>
        </div>
        <img src={arrowDownIcon} alt="Arrow down icon" />
      </div>
      <div className="relative w-[222px] px-2.5 pl-[10.5] flex items-center justify-between before:content-[''] before:absolute before:-right-[26px] before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-full before:bg-[#E1E4E5]">
        <div className="flex items-center gap-2">
          <img src={motobikeIcon} alt="Motobike primary" />
          <span className="text-[#6E7070]">Activity</span>
        </div>
        <img src={arrowDownIcon} alt="Arrow down icon" />
      </div>
      <div className="relative w-[222px] px-2.5 pl-[10.5] flex items-center justify-between before:content-[''] before:absolute before:-right-[26px] before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-full before:bg-[#E1E4E5]">
        <div className="flex items-center gap-2">
          <img src={timePrimaryIcon} alt="Time primary" />
          <span className="text-[#6E7070]">0 Days - 6 Days</span>
        </div>
        <img src={arrowDownIcon} alt="Arrow down icon" />
      </div>
      <div className="relative w-[222px] px-2.5 pl-[10.5] flex items-center justify-between before:content-[''] before:absolute before:-right-[26px] before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-full before:bg-[#E1E4E5]">
        <div className="flex items-center gap-2">
          <img src={dollarIcon} alt="Dollar primary" />
          <span className="text-[#6E7070]">$200 - $580</span>
        </div>
        <img src={arrowDownIcon} alt="Arrow down icon" width={12} height={12} />
      </div>
      <button className="h-14 bg-primary rounded-full text-white min-w-[156px]">
        Search
      </button>
    </div>
  );
}
