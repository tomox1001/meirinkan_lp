import Image from "next/image";
import { Heart, Users } from "lucide-react";
import FadeInSection from "./FadeInSection";

const ShinaiIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* 竹刀の柄 */}
    <line x1="6" y1="20" x2="10" y2="14" />
    {/* 鍔（つば） */}
    <ellipse cx="10.5" cy="13.5" rx="1.8" ry="0.8" transform="rotate(-50 10.5 13.5)" />
    {/* 竹刀の刀身（4本竹） */}
    <line x1="11" y1="13" x2="19" y2="3" strokeWidth="2.5" />
    {/* 先革 */}
    <circle cx="19.3" cy="2.7" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const MakimonoIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* 巻物本体 */}
    <path d="M5 6h14c0 0 1 0 1 1v10c0 1-1 1-1 1H5" />
    {/* 左の軸 */}
    <line x1="5" y1="4" x2="5" y2="20" strokeWidth="2" />
    <circle cx="5" cy="4" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="5" cy="20" r="1.2" fill="currentColor" stroke="none" />
    {/* 巻物の文字ライン */}
    <line x1="9" y1="10" x2="16" y2="10" strokeWidth="1" />
    <line x1="9" y1="13" x2="14" y2="13" strokeWidth="1" />
  </svg>
);

const reasons = [
  {
    icon: <ShinaiIcon className="w-9 h-9" />,
    title: "剣道に興味がある子",
  },
  {
    icon: <Heart className="w-9 h-9" />,
    title: "礼儀を身に付けたい子",
  },
  {
    icon: <Users className="w-9 h-9" />,
    title: "友だちを作りたい子",
  },
  {
    icon: <MakimonoIcon className="w-9 h-9" />,
    title: "武将や刀が好きな子など",
  },
];

export default function Welcome() {
  return (
    <section id="welcome" className="py-20 md:py-28 bg-ai-light scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <FadeInSection>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ai text-center mb-4">
            こんな子を歓迎します
          </h2>
          <div className="w-12 h-px bg-shu mx-auto mb-6" />
          <p className="text-center text-base mb-12 max-w-lg mx-auto">
            剣道を始めるきっかけはそれぞれです。
            <br />
            どんな理由でも大歓迎！
          </p>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {reasons.map((reason, i) => (
            <FadeInSection key={reason.title} delay={0.1 * i}>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-ai mb-3 flex justify-center">
                  {reason.icon}
                </div>
                <h3 className="font-serif text-sm md:text-base font-bold text-ai">
                  {reason.title}
                </h3>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection>
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
            稽古だけじゃない！
            <br />
            クリスマス会など楽しいイベントも盛りだくさん！
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
