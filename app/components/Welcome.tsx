import Image from "next/image";

const reasons = [
  {
    icon: (
      /* 竹刀アイコン — 剣道に興味がある子 */
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <line x1="10" y1="38" x2="36" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="36" y1="12" x2="40" y2="8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="13" cy="35" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: "剣道に興味がある子",
  },
  {
    icon: (
      /* お辞儀アイコン — 礼儀を身に付けたい子 */
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M24 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 21c0 0-2 8-8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 21c0 0 2 8 8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 26h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 38h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "礼儀を身に付けたい子",
  },
  {
    icon: (
      /* 手をつなぐ仲間アイコン — 友だちを作りたい子 */
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="34" cy="14" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M14 19v6c0 2 1 3 3 3h14c2 0 3-1 3-3v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="18" r="3.5" stroke="currentColor" strokeWidth="2" />
        <path d="M24 22v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 25v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 25v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M19 38h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
      </svg>
    ),
    title: "友だちを作りたい子",
  },
  {
    icon: (
      /* 武将（兜）アイコン — 武将や刀が好きな子 */
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        {/* 兜の前立て */}
        <path d="M24 4v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 6l4 6 4-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* 兜本体 */}
        <path d="M12 18c0-5 5-8 12-8s12 3 12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 20h28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        {/* 吹き返し */}
        <path d="M10 20l-2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 20l2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* 面 */}
        <path d="M14 22v6c0 5 4 8 10 8s10-3 10-8v-6" stroke="currentColor" strokeWidth="2" />
        {/* 目 */}
        <line x1="18" y1="28" x2="22" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="28" x2="30" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "武将や刀が好きな子など",
  },
];

export default function Welcome() {
  return (
    <section id="welcome" className="py-20 md:py-28 bg-ai-light scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-ai text-center mb-4">
          こんな子を歓迎します
        </h2>
        <div className="w-12 h-px bg-shu mx-auto mb-6" />
        <p className="text-center text-base mb-12 max-w-lg mx-auto">
          剣道を始めるきっかけはそれぞれです。
          <br />
          どんな理由でも大歓迎！
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-lg p-6 text-center shadow-sm"
            >
              <div className="text-ai mb-3 flex justify-center">
                {reason.icon}
              </div>
              <h3 className="font-serif text-sm md:text-base font-bold text-ai">
                {reason.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/images/practice1.jpg"
              alt="屋外での稽古風景"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/images/welcome.jpg"
              alt="イベントを楽しむ子どもたち"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p className="text-center text-base mt-6 max-w-lg mx-auto">
          稽古だけじゃない！クリスマス会など楽しいイベントも盛りだくさん！
        </p>
      </div>
    </section>
  );
}
