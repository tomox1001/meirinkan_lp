"use client";

const MAILTO_URL =
  "mailto:meirinkan2021@gmail.com?subject=%E4%BD%93%E9%A8%93%E7%A8%BD%E5%8F%A4%E3%81%AE%E3%81%8A%E7%94%B3%E3%81%97%E8%BE%BC%E3%81%BF&body=%E6%98%8E%E5%80%AB%E9%A4%A8%20%E3%81%94%E6%8B%85%E5%BD%93%E8%80%85%E3%81%95%E3%81%BE%0A%0A%E4%BD%93%E9%A8%93%E7%A8%BD%E5%8F%A4%E3%82%92%E5%B8%8C%E6%9C%9B%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%0A%0A%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%0A%E3%81%8A%E5%AD%90%E3%81%95%E3%81%BE%E3%81%AE%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%0A%E3%81%8A%E5%AD%90%E3%81%95%E3%81%BE%E3%81%AE%E5%AD%A6%E5%B9%B4%EF%BC%9A%0A%E3%81%94%E5%B8%8C%E6%9C%9B%E3%81%AE%E6%97%A5%E7%A8%8B%EF%BC%9A%0A%0A%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F%E3%81%8A%E9%A1%98%E3%81%84%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82";

const GMAIL_URL =
  "https://mail.google.com/mail/?view=cm&to=meirinkan2021@gmail.com&su=%E4%BD%93%E9%A8%93%E7%A8%BD%E5%8F%A4%E3%81%AE%E3%81%8A%E7%94%B3%E3%81%97%E8%BE%BC%E3%81%BF&body=%E6%98%8E%E5%80%AB%E9%A4%A8%20%E3%81%94%E6%8B%85%E5%BD%93%E8%80%85%E3%81%95%E3%81%BE%0A%0A%E4%BD%93%E9%A8%93%E7%A8%BD%E5%8F%A4%E3%82%92%E5%B8%8C%E6%9C%9B%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%0A%0A%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%0A%E3%81%8A%E5%AD%90%E3%81%95%E3%81%BE%E3%81%AE%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%0A%E3%81%8A%E5%AD%90%E3%81%95%E3%81%BE%E3%81%AE%E5%AD%A6%E5%B9%B4%EF%BC%9A%0A%E3%81%94%E5%B8%8C%E6%9C%9B%E3%81%AE%E6%97%A5%E7%A8%8B%EF%BC%9A%0A%0A%E3%82%88%E3%82%8D%E3%81%97%E3%81%8F%E3%81%8A%E9%A1%98%E3%81%84%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82";

function isMobile() {
  return /iPhone|iPad|Android/i.test(navigator.userAgent);
}

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function MailtoButton({ className, children }: Props) {
  const handleClick = () => {
    if (isMobile()) {
      window.location.href = MAILTO_URL;
    } else {
      window.open(GMAIL_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
