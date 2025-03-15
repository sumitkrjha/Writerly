export default function Hero() {
  return (
    <div class="p-2">
      <section className="w-full flex flex-col rounded-3xl  relative isolate overflow-hidden sm:gap-y-16 md:p-12 p-6 gap-8  bg-[#6C64FC] text-white ">
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
            src="/assets/globe.png"
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
            src="/assets/logo.png"
            style={{ color: "transparent" }}
          />
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-full bg-[#2A1752]"
            type="button"
          >
            <span className="outline-none cursor-default select-none">
              Start now
              <br />
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h2 className="outline-none cursor-default select-none font-heading font-semibold tracking-tight text-balance sm:text-8xl text-center text-5xl text-white">
            Supercharge <br />
            your copy
          </h2>
          <h1 className="outline-none cursor-default select-none text-center text-pretty text-lg max-w-md text-white">
            Turn every sentence into a conversion magnet. Writerly AI refines
            and optimizes your text so you can capture your audience’s
            attention, drive engagement, and boost sales—without breaking a
            sweat.
          </h1>
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-full mx-auto bg-[#2A1752]"
          type="button"
        >
          <span className="outline-none cursor-pointer select-none">
            Start converting today
            <br />
          </span>
        </button>
      </section>
    </div>
  );
}
