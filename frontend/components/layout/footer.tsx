import { FooterList } from "@/app/types/footer";

const FOOTER_LIST: FooterList[] = [
  {
    id: "shop",
    title: "Shop",
    links: [
      { name: "All Boards" },
      { name: "New Arrivals" },
      { name: "Best Sellers" },
      { name: "Sale" },
    ],
  },
  {
    id: "support",
    title: "Support",
    links: [
      { name: "Contact Us" },
      { name: "Shipping Info" },
      { name: "Returns" },
      { name: "FAQ" },
    ],
  },
  {
    id: "connect",
    title: "Connect",
    links: [
      { name: "Instagram" },
      { name: "YouTube" },
      { name: "Facebook" },
      { name: "Twitter" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mb-20 max-w-360 w-full mx-auto">
      <div className="grid grid-cols-4 gap-12 mb-12">
        <div className="col-span-1">
          <div className="">
            <div className="flex gap-2 items-center mb-4">
              <div className="w-8 h-8 bg-logo-grad rounded-sm"></div>
              <span className="text-3xl">Snow Shop</span>
            </div>
            <p className="text-xl text-white/70">
              Premium snowboards for riders who demand excellence.
            </p>
          </div>
        </div>
        <div className="col-span-3 flex justify-evenly gap-12">
          {FOOTER_LIST.map((list_item) => {
            return (
              <div className="">
                <p className="text-2xl font-bold mb-6">{list_item.title}</p>

                <div className="flex flex-col gap-2 transition-all ease-in-out">
                  {list_item.links.map((links) => {
                    return (
                      <p className="text-xl text-white/70 hover:text-main-clr duration-500 cursor-pointer">{links.name}</p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="text-white/20 " />
      <div className="font-light flex justify-between items-center text-white/50 mt-12 text-lg">
        <p>© 2026 SnowShop. All rights reserved.</p>
        <div className="flex gap-8 transition-all ease-in-out">
          <p className=" hover:text-main-clr duration-500">Privacy Policy</p>
          <p className="hover:text-main-clr duration-500">Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
