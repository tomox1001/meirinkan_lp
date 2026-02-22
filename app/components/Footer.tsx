export default function Footer() {
  return (
    <footer className="bg-ai text-white py-10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="font-serif text-lg font-bold mb-3">明倫館剣道クラブ</p>
        <a
          href="mailto:meirinkan2021@gmail.com"
          className="text-sm text-white/70 hover:text-white transition-colors"
        >
          meirinkan2021@gmail.com
        </a>
        <div className="w-12 h-px bg-white/20 mx-auto my-6" />
        <p className="text-xs text-white/50">
          &copy; {new Date().getFullYear()} 明倫館 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
