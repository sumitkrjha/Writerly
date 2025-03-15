function Features() {
  return (
    <div className="p-2">
      <section class="w-full flex flex-col rounded-3xl relative isolate gap-y-8 text-card-foreground overflow-hidden md:p-12 p-6 bg-[#F0F0FC]">
        <div class="inset-0 absolute pointer-events-none select-none cursor-pointer">
          <div class="w-full h-full relative z-[-1] bg-[url('https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/grainy_bff64ec0-188d-4aab-b496-566eb94b2b84.svg')] bg-[size:300px] opacity-20"></div>
        </div>
        <div class="size-64 [filter:blur(100px)] bg-secondary/50 -z-[1] md:size-80 absolute bottom-0 translate-y-1/2 select-none cursor-pointer"></div>
        <div class="bg-[length:12px_12px] opacity-70 absolute inset-0 -z-[1] translate-x-1/2 -translate-y-1/2 [clip-path:ellipse(50%_50%_at_50%_50%)] bg-[linear-gradient(0deg,_rgba(255,255,255,0)_50%,_hsl(var(--muted))_50%)]"></div>
        <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-card-foreground/50 w-fit font-heading select-none cursor-pointer">
          FEATURES
        </div>
        <div class="flex flex-col gap-y-8">
          <h2 class="outline-none cursor-default select-none font-heading tracking-tight text-balance text-5xl font-light sm:text-7xl">
            For Content Creators
          </h2>
        </div>
        <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          <div class="space-y-8">
            <div class="p-8 rounded-2xl bg-white shadow-md">
              <h3 class="outline-none cursor-default select-none font-heading text-2xl font-bold mb-4">
                Fast, Effective Workflow
              </h3>
              <p class="outline-none cursor-default select-none text-muted-foreground">
                Save hours of back-and-forth editing. Our AI highlights exactly
                where you can improve sentence structure, clarity, and
                persuasive impact.
              </p>
            </div>
            <div class="p-8 rounded-2xl bg-white shadow-md">
              <h3 class="outline-none cursor-default select-none font-heading text-2xl font-bold mb-4">
                Real-Time Performance Insights
              </h3>
              <p class="outline-none cursor-default select-none text-muted-foreground">
                Track how your AI-optimized copy is performing across multiple
                channels. Adjust instantly to maximize reach and revenue.
              </p>
            </div>
          </div>
          <div class="p-8 rounded-2xl flex flex-col justify-between bg-white shadow-md">
            <div class="flex flex-col">
              <h3 class="outline-none cursor-default select-none font-heading text-2xl font-bold mb-4">
                Consistent Brand Voice
              </h3>
              <p class="outline-none cursor-default select-none text-muted-foreground mb-6">
                Writerly AI ensures every word you publish aligns with your
                brand identity. From blogs to ads, we keep your tone and style
                consistent—automatically.
              </p>
            </div>
            <button className="bg-[#281551] inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50  text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-full">
              <span class="outline-none cursor-default select-none text-white">
                Optimize my copy
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right ml-2 h-4 w-4"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
