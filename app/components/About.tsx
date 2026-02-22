import Image from "next/image";

const pillars = [
  {
    title: "強く",
    description: "心と体を鍛え、何事にも負けない強さを身につけます。",
  },
  {
    title: "正しく",
    description: "正しい姿勢、正しい礼法、正しい剣道を学びます。",
  },
  {
    title: "美しく",
    description: "所作の美しさを通じて、品格のある人間を目指します。",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-ai text-center mb-4">
          明倫館について
        </h2>
        <div className="w-12 h-px bg-shu mx-auto mb-12" />

        <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
          <div className="w-full md:w-1/2 space-y-4">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="明倫館の集合写真"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden">
              <Image
                src="/images/practice2.jpg"
                alt="体育館での稽古風景"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base leading-relaxed mb-6">
              私たちは「礼」を大切に、相手を思いやる心を育み、「強く・正しく・美しい」剣道を目指して、日々稽古に励んでいます。
            </p>
            <p className="text-base leading-relaxed text-darkgray/80">
              男女年齢関係なく、いつもお互いを励まし合える関係性が、明倫館の良さです。
            </p>
          </div>
        </div>

        {/* 3つの柱 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="text-center bg-ai-light rounded-lg p-8"
            >
              <h3 className="font-serif text-xl font-bold text-ai mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
