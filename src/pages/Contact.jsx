import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, ChevronDown, CheckCircle2, MessageSquare } from "lucide-react";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import Breadcrumb from "../components/primitives/Breadcrumb";
import Button from "../components/primitives/Button";
import Input from "../components/primitives/Input";
import Card from "../components/primitives/Card";
import StaggerContainer from "../animations/StaggerContainer";
import PageTransition from "../animations/PageTransition";
import { useToast } from "../hooks/useToast";
import { contactPageData } from "../data/sitedata";

const ICON_MAP = { Phone, Mail, MapPin, Clock };

export default function Contact() {
  const channels = contactPageData.channels.map((channel) => ({
    ...channel,
    icon: ICON_MAP[channel.iconName] || Mail,
  }));
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: contactPageData.inquirySubjects[0].value,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      addToast({
        title: "Message Sent Successfully",
        message: "Thank you! Our Pratapgarh support team will contact you shortly.",
        type: "success",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: contactPageData.inquirySubjects[0].value,
        message: "",
      });
    }, 600);
  };

  return (
    <PageTransition>
      <Container className="pt-6 sm:pt-8">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </Container>

      {/* Header section */}
      <section className="py-8 sm:py-12">
        <Container className="flex flex-col gap-4">
          <SectionHeading
            eyebrow={contactPageData.eyebrow}
            title={contactPageData.title}
            description={contactPageData.description}
          />
        </Container>
      </section>

      {/* Contact Cards */}
      <section className="pb-12">
        <Container>
          <StaggerContainer
            staggerDelay={90}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
          >
            {channels.map((channel) => (
              <Card
                key={channel.title}
                className="flex h-full min-h-[15rem] flex-col gap-3 p-6 rounded-lg !bg-forest border border-forest shadow-soft hover:bg-forest-50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-md bg-gold/20 text-gold-50 flex items-center justify-center">
                  <channel.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-ivory">{channel.title}</h3>
                <a
                  href={channel.action}
                  className="font-sans text-sm font-semibold text-gold-50 hover:text-gold hover:underline"
                >
                  {channel.detail}
                </a>
                <p className="text-xs text-ivory/70 leading-relaxed">{channel.description}</p>
              </Card>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Form and FAQ Split Section */}
      <section className="py-12 sm:py-16 bg-ivory-100 border-t border-brown/10">
        <Container className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 h-full bg-white p-8 sm:p-10 rounded-xl border border-forest/15 shadow-soft">
            <div className="flex flex-col gap-2 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-amla-200">
                Direct Message
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-brown font-bold">
                Send us an inquiry
              </h2>
              <p className="text-xs sm:text-sm text-brown/70 leading-relaxed">
                Fill out the details below and a dedicated member of our customer team will respond.
              </p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center animate-fade-in">
                <div className="p-3 rounded-full bg-forest text-ivory shadow-sm">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-serif text-2xl text-brown font-semibold">
                  Thank you for reaching out!
                </h3>
                <p className="text-sm text-brown/70 max-w-sm">
                  Your message has been received. We review every note personally and will get back to you shortly.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                  className="mt-2"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Sharma"
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="anand@example.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Phone / WhatsApp Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 00000"
                  />
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-sm font-medium text-brown/80">
                      Topic / Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="rounded border border-brown/20 bg-ivory-50 px-3.5 py-2.5 text-sm text-brown focus:border-forest focus:outline-none transition-colors"
                    >
                      {contactPageData.inquirySubjects.map((subject) => (
                        <option key={subject.value} value={subject.value}>{subject.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-brown/80">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist you today?"
                    className="w-full rounded border border-brown/20 bg-ivory-50 p-3.5 text-sm text-brown focus:border-forest focus:outline-none transition-colors resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={loading}
                  className="w-full sm:w-fit mt-2 gap-2"
                >
                  {loading ? "Sending..." : "Submit Inquiry"} <Send size={16} />
                </Button>
              </form>
            )}
          </div>

          {/* FAQs Accordion */}
          <div className="lg:col-span-5 h-full flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amla-200">
                Common Questions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-brown font-bold mt-1">
                Frequently Asked
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {contactPageData.faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className="min-h-[4.75rem] rounded-lg border border-forest/15 bg-ivory-50 overflow-hidden shadow-sm transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="min-h-[4.75rem] w-full flex items-center justify-between p-4 sm:p-5 text-left font-serif text-base sm:text-lg font-semibold text-brown hover:text-forest transition-colors gap-3"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 transition-transform duration-300 text-forest ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen ? (
                      <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-brown/75 leading-relaxed border-t border-brown/5 pt-3 animate-fade-in">
                        {faq.a}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="p-5 rounded-lg bg-forest border border-forest flex items-center gap-3 mt-2 shadow-sm">
              <MessageSquare className="text-gold-50 shrink-0" size={20} />
              <p className="text-xs text-ivory/85 leading-relaxed">
                Need immediate bulk assistance? You can also message our dispatch line directly via WhatsApp at <strong>+91 98765 43210</strong>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
