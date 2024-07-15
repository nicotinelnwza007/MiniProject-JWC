import { Icons } from "@/app/components/icons";

export default function Siteheader() {
  return (
    <div className="flex items-center p-4">
      <div className="text-black text-[32px] font-bold px-48">JWC.CO</div>
      <div className="flex items-center gap-[48px] ">
        <div className="flex items-center">
          <a href="#" className="text-[16px]">Shop</a>
          <Icons.ArrowDown className="ml-2" />
        </div>
        <a href="#" className="text-[16px]">On Sale</a>
        <a href="#" className="text-[16px]">New Arrivals</a>
        <a href="#" className="text-[16px]">Brands</a>
        <div className="flex items-center bg-gray-100 rounded-full w-[590px] h-[48px] px-4">
          <Icons.Search className="mr-2" />
          <input type="text" placeholder="Search for products..." className="bg-gray-100 outline-none flex-grow" />
        </div>
        <Icons.Cart />
        <Icons.Profile />
      </div>


    </div>
  );
}
