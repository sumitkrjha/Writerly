import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function Testimony() {
  return (
    <div class="p-2">
      <section class="flex flex-col w-full rounded-3xl relative isolate text-card-foreground gap-y-8 overflow-hidden md:p-12 p-6 bg-[#F1E6E6]">
        <div class="inset-0 absolute pointer-events-none select-none cursor-pointer">
          <div class="w-full h-full relative z-[-1] bg-[url('https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/grainy_bff64ec0-188d-4aab-b496-566eb94b2b84.svg')] bg-[size:300px] opacity-20"></div>
        </div>
        <div class="size-64 [backdrop-filter:blur(100px)] bg-secondary/50 -z-[1] md:size-80 absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 select-none cursor-pointer"></div>

        <div class="bg-[length:12px_12px] opacity-70 absolute inset-0 -z-[1] translate-x-1/2 -translate-y-1/2 [clip-path:ellipse(50%_50%_at_50%_50%)] bg-[repeating-linear-gradient(-45deg,_hsl(var(--muted)),_hsl(var(--muted))_6px,_rgba(255,255,255,0)_6px,_rgba(255,255,255,0)_30px)]"></div>
        <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-card-foreground/50 w-fit font-heading select-none cursor-pointer">
          TESTIMONIALS
        </div>
        <div class="flex flex-col gap-y-8" data-block-id="p02cO2tACAA">
          <h2
            data-block-id="fjUgD9CUr6s"
            class="outline-none cursor-default select-none font-heading tracking-tight text-balance text-5xl font-light sm:text-7xl"
            disabled=""
            contenteditable="false"
          >
            What our users say
          </h2>
          <p
            data-block-id="SQrZwB6MiCk"
            class="outline-none cursor-default select-none text-lg text-gray-500 text-balance max-w-lg text-left"
            disabled=""
            contenteditable="false"
          >
            Join hundreds of marketers, founders, and writers who transformed
            their conversions with Writerly AI.
          </p>
        </div>
        <div className="relative mt-6 w-full px-4 xl:px-0">
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {/* Slide 1 */}
              <CarouselItem className="p-1 lg:lg:basis-1/3">
                <div className="rounded-lg border bg-white text-foreground shadow-md size-full ">
                  <div className="flex flex-col gap-5 p-7 items-start ">
                    <div className="flex items-center gap-4">
                      <img
                        alt="Image"
                        width="48"
                        height="48"
                        loading="lazy"
                        decoding="async"
                        className="rounded-full"
                        src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/155_c69bfa3e-6dc1-4a69-9589-d37118861280.jpeg"
                      />
                      <div>
                        <p className="font-semibold leading-none">John</p>
                        <p className="mt-1 leading-none text-gray-500">
                          @johndoe
                        </p>
                      </div>
                    </div>
                    <p>
                      Writerly AI helped us cut our editing time in half. Our
                      landing pages are more convincing, and sales have spiked
                      by 30%.
                    </p>
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 2 */}
              <CarouselItem className="p-1 lg:basis-1/3">
                <div className="rounded-lg border bg-white text-foreground shadow-md size-full ">
                  <div className="flex flex-col gap-5 p-7 items-start ">
                    <div className="flex items-center gap-4">
                      <img
                        alt="Image"
                        width="48"
                        height="48"
                        loading="lazy"
                        decoding="async"
                        className="rounded-full"
                        src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/154_9544e4dd-33c2-49fa-9bd1-4874cae0338d.jpeg"
                      />
                      <div>
                        <p className="font-semibold leading-none">Serena</p>
                        <p className="mt-1 leading-none text-gray-500">
                          @serrylena
                        </p>
                      </div>
                    </div>
                    <p>
                      I love that I can see exactly where my copy can improve.
                      Writerly AI made my blog posts flow effortlessly!
                    </p>
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 3 */}
              <CarouselItem className="p-1 lg:basis-1/3">
                <div className="rounded-lg border bg-white text-foreground shadow-md size-full ">
                  <div className="flex flex-col gap-5 p-7 items-start ">
                    <div className="flex items-center gap-4">
                      <img
                        alt="Image"
                        width="48"
                        height="48"
                        loading="lazy"
                        decoding="async"
                        className="rounded-full"
                        src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/152_0ff311c2-7785-466c-ad0e-32ed06934a7d.jpeg"
                      />
                      <div>
                        <p className="font-semibold leading-none">Marcus</p>
                        <p className="mt-1 leading-none text-gray-500">
                          @itsmemarkus
                        </p>
                      </div>
                    </div>
                    <p>
                      It’s like having a professional copywriter on speed dial.
                      We boosted our email click-through rates by 20% in just
                      one week.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="p-1 lg:basis-1/3">
                <div
                  class="rounded-lg border bg-white text-foreground shadow-md size-full "
                  data-block-id="MX8dkME8P3X"
                >
                  <div
                    class="flex flex-col gap-5 p-7 items-start "
                    data-block-id="LhgAcmoOtLy"
                  >
                    <div
                      class="flex items-center gap-4"
                      data-block-id="o8GIsw74fVt"
                    >
                      <img
                        alt="Image"
                        data-block-id="YyMSqHo5bVA"
                        loading="lazy"
                        width="48"
                        height="48"
                        decoding="async"
                        data-nimg="1"
                        class="rounded-full"
                        src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/153_68a1bdce-d66c-4a05-9751-2be1c99a8f35.jpeg"
                        style={{ color: "transparent" }}
                      />
                      <div class="" data-block-id="uuNnnAiSGJ5">
                        <p
                          class="font-semibold leading-none"
                          data-block-id="ZXPvrsGWz6H"
                        >
                          Victoria
                        </p>
                        <p
                          class="mt-1 leading-none text-gray-500"
                          data-block-id="n5XaJ5qmE4H"
                        >
                          @vic
                        </p>
                      </div>
                    </div>
                    <p class="" data-block-id="LdXbU5yyyie">
                      We tested multiple AI tools, but none came close to the
                      impact Writerly AI has on our conversions. Highly
                      recommended!
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="p-1 lg:basis-1/3">
                <div
                  class="rounded-lg border bg-white text-foreground shadow-md size-full "
                  data-block-id="MX8dkME8P3X"
                >
                  <div
                    class="flex flex-col gap-5 p-7 items-start "
                    data-block-id="LhgAcmoOtLy"
                  >
                    <div
                      class="flex items-center gap-4"
                      data-block-id="o8GIsw74fVt"
                    >
                      <img
                        alt="Image"
                        data-block-id="YyMSqHo5bVA"
                        loading="lazy"
                        width="48"
                        height="48"
                        decoding="async"
                        data-nimg="1"
                        class="rounded-full"
                        src="https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/151_254299d1-7ae3-45c5-a749-becc49066572.jpeg"
                        style={{ color: "transparent" }}
                      />
                      <div class="" data-block-id="uuNnnAiSGJ5">
                        <p
                          class="font-semibold leading-none"
                          data-block-id="ZXPvrsGWz6H"
                        >
                          Giusepi
                        </p>
                        <p
                          class="mt-1 leading-none text-gray-500"
                          data-block-id="n5XaJ5qmE4H"
                        >
                          @thegreatgiusepi
                        </p>
                      </div>
                    </div>
                    <p class="" data-block-id="LdXbU5yyyie">
                      No more second-guessing. Writerly AI’s suggestions are
                      always on point, especially for my social media ad
                      campaigns.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default Testimony;
