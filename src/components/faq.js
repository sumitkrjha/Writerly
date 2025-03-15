import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Adjust the import path based on your project structure

export default function FAQ() {
  return (
    <div className="p-2">
      <section className="w-full flex flex-col rounded-3xl relative isolate gap-y-8 text-card-foreground overflow-hidden md:p-12 p-6 bg-[#F0F0FC]">
        <div className="inset-0 absolute pointer-events-none select-none cursor-pointer">
          <div className="w-full h-full relative z-[-1] bg-[url('https://wqnmyfkavrotpmupbtou.supabase.co/storage/v1/object/public/assets/grainy_bff64ec0-188d-4aab-b496-566eb94b2b84.svg')] bg-[size:300px] opacity-20"></div>
        </div>
        <div className="size-64 [filter:blur(100px)] bg-secondary/50 -z-[1] md:size-80 absolute -translate-x-1/2 top-0 -translate-y-1/2 left-1/2 select-none cursor-pointer"></div>
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-card-foreground/50 w-fit font-heading select-none cursor-pointer">
          FAQ
        </div>
        <div className="flex flex-col gap-y-8">
          <h2 className="outline-none cursor-default select-none font-heading tracking-tight text-balance text-5xl font-light sm:text-7xl">
            Frequently Asked Questions
          </h2>
          <p className="outline-none cursor-default select-none text-lg text-muted-foreground text-balance max-w-lg text-left">
            For any other questions, feel free to contact us.
          </p>
          <div className="mt-6 w-full divide-y">
            <Accordion type="single" collapsible>
              {/* FAQ Item 1 */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg hover:no-underline cursor-pointer">
                  How is Writerly AI different from other copy tools?
                </AccordionTrigger>
                <AccordionContent className="text-lg ml-2">
                  Writerly AI uses advanced algorithms to provide unique and
                  tailored copywriting solutions, ensuring high-quality results
                  that stand out from generic tools.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 2 */}
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg hover:no-underline cursor-pointer">
                  How does Writerly AI generate unique copy without plagiarizing
                  existing content?
                </AccordionTrigger>
                <AccordionContent className="text-lg ml-2">
                  Writerly AI leverages a vast dataset and proprietary
                  algorithms to create original content, ensuring no duplication
                  of existing material.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 3 */}
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg hover:no-underline cursor-pointer">
                  Will Writerly AI work with my existing CMS or marketing tools?
                </AccordionTrigger>
                <AccordionContent className="text-lg ml-2">
                  Yes, Writerly AI integrates seamlessly with most CMS and
                  marketing tools, making it easy to incorporate into your
                  existing workflow.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 4 */}
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg hover:no-underline cursor-pointer">
                  Is all my data safe and confidential when I upload content?
                </AccordionTrigger>
                <AccordionContent className="text-lg ml-2">
                  Absolutely. Writerly AI prioritizes data security and
                  confidentiality, ensuring your content is protected at all
                  times.
                </AccordionContent>
              </AccordionItem>

              {/* FAQ Item 5 */}
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg hover:no-underline cursor-pointer">
                  Do I need any prior marketing or technical knowledge to use
                  Writerly AI?
                </AccordionTrigger>
                <AccordionContent className="text-lg ml-2">
                  No, Writerly AI is designed to be user-friendly and accessible
                  to everyone, regardless of their technical or marketing
                  background.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
