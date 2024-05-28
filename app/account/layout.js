import SideNavigation from "@/app/_components/SideNavigation";

const layout = ({ children }) => {
  return (
    <div className="grid sm:grid-cols-[16rem_1fr] h-full gap-4 lg:gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
};

export default layout;
