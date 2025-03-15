export default function Footer() {
  return (
    <div className="p-2">
      <section class="w-full flex flex-col rounded-3xl bg-[#6C64FC] text-accent-foreground relative isolate overflow-hidden gap-y-8 md:p-12 p-6 ">
        <div class="inset-0 absolute pointer-events-none opacity-25 select-none cursor-pointer">
          <div class="w-full h-full relative z-[-1] bg-[url('https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/grainy_bff64ec0-188d-4aab-b496-566eb94b2b84.svg')] bg-[size:300px] opacity-20"></div>
        </div>
        <div class=" bg-[linear-gradient(#eaeaea_1.2px,_transparent_1.2px),_linear-gradient(to_right,_#eaeaea_1.2px,_rgba(255,255,255,0)_1.2px)] bg-[length:24px_24px] absolute inset-0 rounded-3xl -z-[1] opacity-10 [clip-path:circle(40%)]"></div>
        <img
          alt="Image"
          loading="lazy"
          width="400"
          height="400"
          decoding="async"
          data-nimg="1"
          class="absolute -z-[1] left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"
          src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/SphereRingStandingL_92dbfe45-eaa0-492c-a4bd-0bf778d1a843.png"
          style={{ color: "transparent" }}
        />
        <div class="inline-flex items-center rounded-full  px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  border-card-foreground/50 w-fit font-heading bg-white mx-auto select-none cursor-pointer">
          Get started
        </div>
        <div class="flex flex-col items-center gap-y-8">
          <h2 class="outline-none cursor-default select-none font-heading tracking-tight text-balance text-center text-5xl sm:text-7xl">
            Unlock your highest conversions yet
          </h2>
        </div>
        <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-full mx-auto bg-[#2A1752] cursor-pointer">
          <span class="outline-none cursor-pointer select-none text-white">
            Start converting today
          </span>
        </button>
      </section>
    </div>
  );
}
