import MailtoButton from "./MailtoButton";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[50vh] flex items-center justify-center pt-14 overflow-hidden">
      {/* 背景ビジュアル */}
      <div className="absolute inset-0 bg-gradient-to-br from-ai via-[#1a3050] to-[#0f2035]">
        {/* 和柄パターン（麻の葉風） */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="asanoha" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="white" strokeWidth="0.8" />
              <path d="M30 0 L30 60 M0 30 L60 30" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M0 0 L60 60 M60 0 L0 60" fill="none" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#asanoha)" />
        </svg>

        {/* 上部の光彩 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 py-12 max-w-2xl mx-auto">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-wider mb-6">
          <ruby>
            礼<rp>(</rp><rt>れい</rt><rp>)</rp>
          </ruby>
          にはじまり
          <br />
          <ruby>
            礼<rp>(</rp><rt>れい</rt><rp>)</rp>
          </ruby>
          におわる
        </h1>
        <div className="w-16 h-px bg-white/60 mx-auto mb-6" />
        <p className="text-base sm:text-lg text-white/90 font-sans leading-relaxed mb-10">
          <br className="hidden sm:block" />
          礼とは「礼儀」つまり「相手を大事にする心」のことです。
          <br className="hidden sm:block" />
          明倫館は、みんなで励まし合い、心と体を鍛えています。
        </p>
        <MailtoButton className="inline-block font-bold text-white bg-shu hover:bg-shu-dark px-8 py-4 rounded-lg text-base sm:text-lg transition-colors shadow-md cursor-pointer">
          体験のお申し込み
        </MailtoButton>
      </div>
    </section>
  );
}
