import React from "react";
import Image from "next/image";
import MailtoButton from "./MailtoButton";

const steps = [
  { step: "1", label: "メールでご連絡" },
  { step: "2", label: "日程の調整" },
  { step: "3", label: "体験稽古に参加" },
];

export default function Trial() {
  return (
    <section id="trial" className="py-20 md:py-28 bg-ai-light scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-ai text-center mb-4">
          体験のご案内
        </h2>
        <div className="w-12 h-px bg-shu mx-auto mb-6" />
        <p className="text-center text-base mb-8 max-w-lg mx-auto">
          まずは、体験で剣道を身近に感じてください。
          <br />
          ご連絡お待ちしております。
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <span className="flex items-center gap-1.5 text-sm md:text-base font-bold text-ai">
            <span className="text-shu">✓</span> 体験無料
          </span>
          <span className="flex items-center gap-1.5 text-sm md:text-base font-bold text-ai">
            <span className="text-shu">✓</span> 手ぶらでOK!
          </span>
          <span className="flex items-center gap-1.5 text-sm md:text-base font-bold text-ai">
            <span className="text-shu">✓</span> 動きやすい服装だけ
          </span>
        </div>

        <div className="relative aspect-video max-w-2xl mx-auto mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="体験稽古の様子"
            fill
            className="object-cover"
          />
        </div>

        {/* 体験の流れ */}
        <h3 className="font-serif text-lg md:text-xl font-bold text-ai text-center mb-8">
          体験の流れ
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-14">
          {steps.map((s, i) => (
            <React.Fragment key={s.step}>
              <div className="flex flex-col items-center">
                <span className="w-12 h-12 rounded-full bg-ai text-white font-serif font-bold text-lg flex items-center justify-center mb-2">
                  {s.step}
                </span>
                <span className="text-sm font-bold">{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-ai/40 rotate-90 sm:rotate-0 shrink-0"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-lg p-8 md:p-12 shadow-sm max-w-xl mx-auto">
          <p className="text-base mb-2">お気軽にお問合せください</p>
          <a
            href="mailto:meirinkan2021@gmail.com"
            className="inline-block font-bold text-ai text-lg md:text-xl hover:underline mb-6"
          >
            meirinkan2021@gmail.com
          </a>
          <div>
            <MailtoButton className="inline-block font-bold text-white bg-shu hover:bg-shu-dark px-8 py-4 rounded-lg text-base sm:text-lg transition-colors shadow-md cursor-pointer">
              体験のお申し込み
            </MailtoButton>
          </div>
        </div>
      </div>
    </section>
  );
}
