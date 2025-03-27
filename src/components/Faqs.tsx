/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InteractiveHoverButton } from "@/components/ui/InteractiveHoverButton";


function Component() {
  return (
    <div className="overflow-hidden inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 items-center justify-center flex py-10 ">
      <Dialog>
        <DialogTrigger asChild>
        <InteractiveHoverButton />
          
          {/* <Button variant="outline" size="custom" className="items-center">
            FAQ's
          </Button> */}
        </DialogTrigger>
        <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:hidden">
          <div className="overflow-y-auto">
            <DialogHeader className="contents space-y-0 text-left">
              <DialogTitle className="px-6 pt-6 text-base">
                Frequently Asked Questions (FAQ)
              </DialogTitle>
              <DialogDescription asChild>
                <div className="p-6">
                  <div className="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground">
                    <div className="space-y-1">
                      <p>
                        <strong>What is SanketikaFest?</strong>
                      </p>
                      <p>
                        SanketikaFest is an annual event at Lords Institute of Engineering and
                        Technology, featuring technical and non-technical competitions,
                        workshops, speaker sessions, and fun activities.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <strong>When and where does the event take place?</strong>
                      </p>
                      <p>
                        The event is a two-day fest held at Lords Institute of Engineering and
                        Technology. The exact dates and schedule will be announced on the
                        official website and social media pages.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <strong>Who can participate?</strong>
                      </p>
                      <p>
                        Students, tech enthusiasts, and innovators from all backgrounds are
                        welcome to participate. Some competitions may have eligibility
                        requirements, which will be mentioned in the event details.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <strong>How can I register for the event?</strong>
                      </p>
                      <p>
                        Registration details will be available on the official website. You can
                        sign up for competitions, workshops, and sessions through the provided
                        registration links.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <strong>Is there a registration fee?</strong>
                      </p>
                      <p>
                        Some events may have a registration fee, while others are free. Check
                        the event details for specific information.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <strong>What kind of competitions are there?</strong>
                      </p>
                      <p>
                        The fest includes coding competitions, hackathons, robotics contests,
                        gaming tournaments, project exhibitions, and more.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <strong>Are there any prizes for winners?</strong>
                      </p>
                      <p>
                        Yes, winners of various competitions will receive exciting prizes,
                        certificates, and recognition.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <strong>Will there be workshops and speaker sessions?</strong>
                      </p>
                      <p>
                        Yes, interactive workshops and inspiring speaker sessions will be
                        conducted by industry experts and professionals.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <strong>Is there accommodation for participants from other cities?</strong>
                      </p>
                      <p>
                        Accommodation details will be provided for participants traveling from
                        other cities. Stay tuned for announcements on lodging and facilities.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <strong>How can I stay updated about the event?</strong>
                      </p>
                      <p>
                        Follow SanketikaFest on social media and check the official website for
                        the latest updates, schedules, and announcements.
                      </p>
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </div>
          <DialogFooter className="border-t border-border px-6 py-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button">Okay</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { Component as Faqs };
