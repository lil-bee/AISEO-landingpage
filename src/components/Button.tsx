export const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative rounded-lg py-2 px-3 bg-gradient-to-b from-[#190D2E] to-[#4A208A]  text-sm font-medium shadow-[0px_0px_12px_#8C45FF] hover:shadow-[0px_0px_22px_#8C45FF] transition-all ease-in-out duration-300  group">
      <div className="absolute inset-0">
        <div className="absolute inset-0 inse rounded-lg border border-white/10 [mask-image:linear-gradient(to_bottom,black,transparent)] group-hover:border-white/25 transition-colors duration-300"></div>
        <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,.1)_inset] group-hover:shadow-[0_0_20px_rgb(140,69,255,.2)_inset] transition-shadow duration-300"></div>
      </div>
      <span>{props.children}</span>
    </button>
  );
};
