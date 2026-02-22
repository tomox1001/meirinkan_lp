import Image from "next/image";

const reasons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "剣道に興味がある子",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "礼儀を身に付けたい子",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "友だちを作りたい子",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
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
          稽古だけじゃない！クリスマス会など仲間と一緒に楽しむイベントも盛りだくさん！
        </p>
      </div>
    </section>
  );
}
