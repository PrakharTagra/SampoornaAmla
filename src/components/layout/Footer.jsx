import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import Container from "../primitives/Container";
import Logo from "../primitives/Logo";
import { scrollToSection } from "../../lib/scrollToSection";
import { useToast } from "../../hooks/useToast";
import FadeIn from "../../animations/FadeIn";
import { footerData } from "../../data/sitedata";

const GUARANTEE_ICONS = [ShieldCheck, Truck, RotateCcw];

export default function Footer() {
  const location = useLocation();
  const { addToast } = useToast();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    addToast({
      title: footerData.newsletter.successToastTitle,
      message: footerData.newsletter.successToastMessage,
      type: "success",
    });
    setEmail("");
  };

  return (
    <footer className="bg-ivory-100 text-brown mt-16 border-t border-brown/15 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />

      <Container className="relative z-10 py-16">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-ivory/15">
            {/* Brand column */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Logo />
              <p className="text-sm text-brown/75 leading-relaxed max-w-sm">
                {footerData.aboutText}
              </p>
              <div className="flex flex-col gap-2 pt-2 text-xs text-brown/60">
                {footerData.trustGuarantees.map((guarantee, i) => {
                  const Icon = GUARANTEE_ICONS[i % GUARANTEE_ICONS.length];
                  return (
                    <span key={guarantee} className="flex items-center gap-2">
                      <Icon size={16} className="text-gold-50 shrink-0" /> {guarantee}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Nav Columns */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {footerData.columns.map((col) => (
                <div key={col.title} className="flex flex-col gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amla-200">
                    {col.title}
                  </span>
                  <div className="flex flex-col gap-2.5">
                    {col.links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={(e) => {
                          if (link.scrollTarget && location.pathname === "/") {
                            e.preventDefault();
                            scrollToSection(link.scrollTarget);
                          }
                        }}
                        className="text-sm text-brown/70 hover:text-brown hover:translate-x-0.5 transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Column */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-amla-200">
                {footerData.newsletter.title}
              </span>
              <p className="text-xs text-brown/70 leading-relaxed">
                {footerData.newsletter.description}
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={footerData.newsletter.placeholder}
                    required
                    className="w-full bg-ivory border border-brown/20 rounded px-3.5 py-2.5 text-sm text-brown placeholder-brown/40 focus:outline-none focus:border-amla-200 pr-10"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 p-1.5 rounded bg-gold text-brown hover:bg-gold-50 transition-colors"
                  >
                    {subscribed ? <Check size={16} /> : <ArrowRight size={16} />}
                  </button>
                </div>
                {subscribed ? (
                  <span className="text-xs text-gold-50 animate-fade-in">
                    ✓ Thank you for subscribing!
                  </span>
                ) : null}
              </form>
            </div>
          </div>
        </FadeIn>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brown/50">
          <p>{footerData.copyright}</p>
          <div className="flex items-center gap-6">
            {footerData.bottomBadges.map((badge, i) => (
              <span key={badge} className="flex items-center gap-6">
                <span>{badge}</span>
                {i < footerData.bottomBadges.length - 1 ? <span>·</span> : null}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
