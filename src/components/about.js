function About() {
  return (
    <div class="p-2">
      <section class="w-full flex flex-col rounded-3xl relative isolate gap-y-8 text-card-foreground overflow-hidden md:p-12 p-6 bg-[#F2E7E7]">
        <div class="inset-0 absolute pointer-events-none select-none cursor-pointer">
          <div class="w-full h-full relative z-[-1] bg-[url('https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/grainy_bff64ec0-188d-4aab-b496-566eb94b2b84.svg')] bg-[size:300px] opacity-20"></div>
        </div>
        <div class="size-64 [filter:blur(100px)] bg-secondary/50 -z-[1] md:size-80 absolute right-0 select-none cursor-pointer"></div>
        <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-card-foreground/50 w-fit font-heading select-none cursor-pointer">
          DEMO
        </div>
        <div class="flex flex-col gap-y-8">
          <h2
            class="outline-none cursor-default select-none font-heading tracking-tight text-balance text-5xl font-light sm:text-7xl"
            disabled=""
            contenteditable="false"
          >
            How Writerly AI works
            <br />
          </h2>
        </div>
        <img
          alt="Image"
          loading="lazy"
          width="800"
          height="500"
          decoding="async"
          data-nimg="1"
          class="mx-auto shadow-md rounded-2xl"
          src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/original-a7d7f8ae075fda01e01f2c1e6e1cc5ff_a982bf38-abde-4f2c-a9fa-5da7a04a57f5.png"
          style={{ color: "transparent" }}
        />
      </section>
    </div>
  );
}

export default About;
