

const info = [
  {
    label: "日時",
    value: (
      <>
        日曜日 16:00〜18:00
        <br />
        <span className="text-sm font-normal text-darkgray/60">
          ※ 夏時期は16:30開始
        </span>
      </>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "場所",
    value: "南百合丘小学校体育館",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "対象",
    value: "小学生がメインですが、中学生・一般の方も歓迎です",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function Practice() {
  return (
    <section id="practice" className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-ai text-center mb-4">
          稽古案内
        </h2>
        <div className="w-12 h-px bg-shu mx-auto mb-12" />

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <iframe
              src="https://maps.google.com/maps?q=%E5%B7%9D%E5%B4%8E%E5%B8%82%E7%AB%8B%E5%8D%97%E7%99%BE%E5%90%88%E4%B8%98%E5%B0%8F%E5%AD%A6%E6%A0%A1&t=m&z=15&output=embed&hl=ja"
              className="aspect-video w-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="南百合丘小学校の地図"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="text-ai mt-0.5 shrink-0">{item.icon}</div>
                <div>
                  <dt className="text-sm text-darkgray/60 mb-1">
                    {item.label}
                  </dt>
                  <dd className="text-base font-bold">{item.value}</dd>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
