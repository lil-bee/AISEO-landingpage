import { Button } from "@/components/Button";
import ChecklistIcon from "@/assets/checklist.svg";
import gridLines from "@/assets/grid-lines.png";

export const Pricing = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-center">
          Pricing.
        </h2>
        <p className="md:text-xl md:max-w-96 text-lg mx-auto text-center text-white/70 tracking-tight mt-5">
          Choose the right plan to meet your SEO needs and start optimizing
          today.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 mt-10">
          <div className="rounded-[10px] border border-white/15 h-[500px] p-5 flex-1 flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h3 className="font-medium text-2xl  ">Pricing</h3>
                <p className="text-base text-white/70">$29/mo</p>
              </div>
              <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-95 dark:via-neutral-400" />
              <div className="flex flex-col gap-[10px] mt-[10px]">
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Keyword optimization</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Automated meta tags</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">SEO monitoring</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Monthly reports</p>
                </div>
              </div>
            </div>
            <Button className="w-full">Join waitlist</Button>
          </div>
          <div className="relative bg-[linear-gradient(to_bottom,black,rgb(54,23,100))] shadow-[0px_10px_74px_10px_rgba(78,0,191,0.41)] rounded-[10px] border border-white/15 h-[500px] p-5 flex-1 flex flex-col justify-between">
            <div
              className="absolute rounded-[10px]  inset-0  bg-blend-overlay [mask-image:radial-gradient(90%_70%_at_50%_100%,white,transparent)] group-hover:opacity-0 transition duration-1000"
              style={{
                backgroundImage: `url(${gridLines.src})`,
              }}
            ></div>
            <div className="absolute  rounded-[10px]  inset-0 bg-blend-overlay bg-gradient-to-b from-[rgba(0,0,0,1)_19%] to-[rgba(0,0,0,0)_100%]"></div>

            <div className="flex flex-col">
              <div className="flex flex-col">
                <h3 className="font-medium text-2xl ">Pro</h3>
                <p className="text-base text-white/70">$79/mo</p>
              </div>
              <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-95 dark:via-neutral-400" />
              <div className="flex flex-col gap-[10px] mt-[10px]">
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Keyword optimization</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Automated meta tags</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">SEO monitoring</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Monthly reports</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Content suggestions</p>
                </div>
                <div className="flex items-center gap-1">
                  <ChecklistIcon className="w-4 h-4" />
                  <p className="text-sm">Link optimization</p>
                </div>
              </div>
            </div>
            <Button className="w-full">Join waitlist</Button>
          </div>
          <div className="rounded-[10px] border border-white/15 h-[500px] p-5 flex-1 flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h3 className="font-medium text-2xl ">Business</h3>
                <p className="text-base text-white/70">$149/mo</p>
              </div>
              <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-95 dark:via-neutral-400" />
              <div>
                <div className="flex flex-col gap-[10px] mt-[10px]">
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">Keyword optimization</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">Automated meta tags</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">SEO monitoring</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">Monthly reports</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">Content suggestions</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">Link optimization</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">Multi-user access</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChecklistIcon className="w-4 h-4" />
                    <p className="text-sm">API integration</p>
                  </div>
                </div>
              </div>
            </div>
            <Button className="w-full">Join waitlist</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
