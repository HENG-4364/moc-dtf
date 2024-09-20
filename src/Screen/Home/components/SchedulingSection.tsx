"use client";
import React, { useState } from "react";
import "tiny-slider/dist/tiny-slider.css";

interface Day {
  date: string;
  title: string;
}

interface SchedulingItemProps {
  title?: string;
  time: string;
  description?: string[];
}

const SchedulingItem: React.FC<SchedulingItemProps> = ({
  title,
  time,
  description,
}) => {
  return (
    <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
      <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-sky-300 dark:bg-white/10 group-first:top-3"></div>
      <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-sky-300 bg-zinc-950"></div>
      {title && <h3 className="mt-2 text-sm/6 font-semibold">{title}</h3>}
      <p className="font-display text-2xs/6 order-first font-semibold tracking-[0.2em">
        <time dateTime="2023-06-20T17:30-04:00">{time}</time>
      </p>
      {description &&
        description.map((item, index) => (
          <p key={index} className="mt-0.5 text-sm/6">
            {item}
          </p>
        ))}
    </li>
  );
};

export default function SchedulingSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const days: Day[] = [
    {
      date: "13 December, 2024",
      title: "Digital Trade Landscape and Policy Frameworks",
    },
    { date: "16 December, 2024", title: "MoC Award Night 2024" },
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section
      className="relative md:py-24 py-16 bg-[#e9f2f8] dark:bg-[#151f36]"
      id="schedules"
    >
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="font-semibold text-2xl md:text-3xl leading-normal mb-4">
            <span className="text-[#2980B9]">Event</span> Schedules
          </h3>
        </div>

        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-lg border-2 border-[#2980B9] overflow-hidden">
            {days.map((day, index) => (
              <button
                key={index}
                className={`w-[250px] py-2 px-4 text-center transition-colors ${
                  activeTab === index
                    ? "bg-[#2980B9] text-white"
                    : "bg-white text-gray-800 hover:bg-[#2980B9] hover:bg-opacity-10 dark:hover:bg-[#e9f2f8]"
                }`}
                onClick={() => handleTabClick(index)}
              >
                <div className="font-semibold text-sm md:text-base whitespace-nowrap">
                  <span>
                    Day{" "}
                    <span
                      className={`${
                        activeTab === index ? "text-white" : "text-[#2980B9]"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </span>
                </div>
                <div className="text-xs md:text-sm whitespace-nowrap">
                  {day.date}
                </div>
              </button>
            ))}
          </div>
        </div>

        {activeTab === 0 && (
          <>
            <div className="grid grid-cols-1">
              <h4 className="font-semibold text-lg leading-normal mb-1">
                <b>{days[0].date}</b>
              </h4>
              <h4 className="font-semibold text-lg leading-normal mb-1">
                <b>Morning Session:</b> {days[0].title}
              </h4>
            </div>

            <div className="mt-6">
              <ul role="list" className="m-8 max-w-screen-md">
                <SchedulingItem
                  time="7:00 AM - 7:30 AM"
                  title="Registration and VIP Guest Arrival"
                />
                <SchedulingItem
                  time="8:00 AM - 8:05 AM"
                  title="The arrival of the Samdech Moha Borvor Thipadei Hun Manet, Prime Minister of Cambodia"
                />
                <SchedulingItem
                  time="8:05 AM - 9:40 AM"
                  title="Opening"
                  description={[
                    "- National Anthems and Video Presentation",
                    "- Welcome Speech by Lct. CHAM Nimul, Minister of Commerce",
                    "- Official Opening by Samdech Moha Borvor Thipadei Hun Manet, Prime Minister of Cambodia",
                    "- Honorary group photo with Samdech Moha Borvor Thipadei Hun Manet, Prime Minister of Cambodia",
                    "- Visiting Booths for Samdech Moha Borvor Thipadei Hun Manet, Prime Minister of Cambodia",
                  ]}
                />
                <SchedulingItem time="9:40 AM - 9:50 AM" title="Coffee Break" />
                <SchedulingItem
                  time="9:50 AM - 10:05 AM"
                  title="Digital Trade Quiz and Prize"
                />
                <SchedulingItem
                  time="10:00 AM - 10:15 AM"
                  title="Remark"
                  description={[
                    'Remark on "International Digital Trade Overview" by H.E.Igor Driesmans, Ambassador of the European Union(EU) Delegation to Cambodia',
                    'Remark on "Future Foresight on Digital Trade in Cambodia" by MoC',
                  ]}
                />
                <SchedulingItem
                  time="10:15 AM - 11:15 AM"
                  title="Policy & Governance Guidance for Responsible AI Adoption in Digital Trade"
                  description={[
                    "- Speaker: H.E. Dr. Chea Vandeth, Minister of Post and Telecommunication (TBC)",
                    "- Speaker: H.E. Dr. Chea Serey, Governor of the National Bank of Cambodia",
                    "- Speaker: RGC Representatives (MoC, MPTC)",
                    "- Speaker: Private Sector (Financial Trust and Entrepreneurial)",
                    "- Speaker: Mr. Hadri Sopri, Lead for Trade and Customer Policy for Asia-pacific Region, AWS (TBC)",
                    "- Speaker: Dr. Phinith Chanthalangsy, AI Expert, UNESCO",
                    "- Moderator: H.E. Sven Cellabaut or H.E. PENN Sovicheat",
                  ]}
                />
                <SchedulingItem
                  time="11:15 AM - 12:00 AM"
                  title="Q & A Session"
                />
                <SchedulingItem
                  time="12:00 AM - 1:30 PM"
                  title="Lunch Break (Provided by GIZ)"
                />
              </ul>
            </div>

            <div className="grid grid-cols-1">
              <h4 className="font-semibold text-lg leading-normal mb-1">
                <b>Afternoon Session:</b> Youth Debate on the Future of AI in
                Digital Trade
              </h4>
            </div>

            <div className="mt-6">
              <ul role="list" className="m-8 max-w-screen-md">
                <SchedulingItem
                  time="1:30 PM - 1:45 PM"
                  title="Energizer Game"
                />
                <SchedulingItem
                  time="1:45 PM - 2:00 PM"
                  title="Setting the Debate Scene & Debate Team Selection"
                />
                <SchedulingItem
                  time="2:00 PM - 4:00 PM"
                  title="Debate Session"
                />
                <SchedulingItem
                  time="4:00 PM - 5:00 PM"
                  title="Prize Debate Award & Cocktail Business Networking"
                />
              </ul>
            </div>
          </>
        )}

        {activeTab === 1 && (
          <>
            <div className="grid grid-cols-1">
              <h4 className="font-semibold text-lg leading-normal mb-1">
                <b>{days[1].date}</b>
              </h4>
              <h4 className="font-semibold text-lg leading-normal mb-1">
                <b>{days[1].title}:</b> Afternoon Only
              </h4>
            </div>

            <div className="mt-6">
              <ul role="list" className="m-8 max-w-screen-md">
                <SchedulingItem
                  time="5:00 PM - 6:00 PM"
                  title="Registration and VIP Guest Arrival"
                />
                <SchedulingItem
                  time="6:05 PM - 7:00 PM"
                  description={[
                    "National Anthems and Video Recap of 2024 CIEGE & Digital Trade Forum",
                    "Blessing Dance",
                    "Welcome Speech by H.E. Samheng Bora – Secretary of State",
                    "Opening Speech by Lct. CHAM Nimul, Minister of Commerce",
                  ]}
                />
                <SchedulingItem
                  time="7:00 PM - 7:20 PM"
                  description={[
                    "Announcement of 2024 Awardees",
                    "Awarding Ceremony, an honor awarded by Lct. CHAM Nimul, Minister of Commerce",
                    "- 3 E-Commerce Awards",
                    "- 2 Export Awards",
                    "- 1 Women in Trade Award",
                    "- 1 CSR Award",
                    "Honorary group photo with Lct. CHAM Nimul, Minister of Commerce",
                    "1. Sponsors",
                    "2. Awardees",
                  ]}
                />
                <SchedulingItem
                  time="9:45 PM"
                  title="Conclude closing of 2024 MoC Award Night."
                />
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
