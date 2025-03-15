export default function Hero() {
  return (
    <div className="text-white p-2">
      <section className="w-full flex flex-col rounded-3xl bg-accent relative isolate overflow-hidden sm:gap-y-16 md:p-12 p-6 gap-8 text-accent-foreground bg-[#6C64FC] ">
        <div className="inset-0 absolute pointer-events-none opacity-25 select-none cursor-pointer">
          <div className="w-full h-full relative z-[-1] bg-[url('https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/grainy_bff64ec0-188d-4aab-b496-566eb94b2b84.svg')] bg-[size:300px] opacity-20"></div>
        </div>
        <div className="bg-[linear-gradient(#eaeaea_1.2px,_transparent_1.2px),_linear-gradient(to_right,_#eaeaea_1.2px,_rgba(255,255,255,0)_1.2px)] bg-[length:24px_24px] absolute inset-0 rounded-3xl z-[-1] opacity-10 [clip-path:circle(40%)]"></div>
        <div
          className="absolute z-[-1]"
          style={{ transform: "none", willChange: "auto" }}
        >
          <img
            alt="Image"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className=""
            src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/SphereExtruded1R_406f4d83-58d7-4e61-868a-3d016337fd99.png"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="flex justify-between items-center">
          <img
            alt="Image"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="size-12 rounded-full"
            src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/reweb-logo_d559f9a8-703b-4be3-a8d4-c14bda7c4b83.png"
            style={{ color: "transparent" }}
          />
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-full bg-[#2A1752]"
            type="button"
          >
            <span
              className="outline-none cursor-default select-none"
              disabled=""
              contenteditable="false"
            >
              Start now
              <br />
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h2
            className="outline-none cursor-default select-none font-heading font-semibold tracking-tight text-balance sm:text-8xl text-center text-5xl text-white"
            contenteditable="false"
            disabled=""
          >
            Supercharge <br />
            your copy
          </h2>
          <h1
            className="outline-none cursor-default select-none text-center text-pretty text-lg max-w-md text-white"
            disabled=""
            contenteditable="false"
          >
            Turn every sentence into a conversion magnet. Writerly AI refines
            and optimizes your text so you can capture your audience’s
            attention, drive engagement, and boost sales—without breaking a
            sweat.
          </h1>
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-full mx-auto bg-[#2A1752]"
          type="button"
        >
          <span
            className="outline-none cursor-pointer select-none"
            disabled=""
            contenteditable="false"
          >
            Start converting today
            <br />
          </span>
        </button>
      </section>
    </div>
  );
}
