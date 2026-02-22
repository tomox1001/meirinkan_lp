type Props = {
  alt: string;
  className?: string;
};

export default function PhotoPlaceholder({ alt, className = "" }: Props) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-ai-light rounded-lg overflow-hidden ${className}`}
      role="img"
      aria-label={alt}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-ai/30 mb-2"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className="text-sm text-ai/40 font-sans">写真準備中</span>
    </div>
  );
}
