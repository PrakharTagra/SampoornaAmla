import { useState } from "react";

export default function ProductTabs({ product }) {
  const tabs = [
    {
      id: "benefits",
      label: "Health Benefits",
      content: Array.isArray(product.benefits) && product.benefits.length > 0 ? (
        <ul className="flex flex-col gap-3">
          {product.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 text-sm text-brown/80 leading-relaxed">
              <span className="mt-1 h-2 w-2 rounded-full bg-amla shrink-0 ring-4 ring-amla/20" aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>
      ) : null,
    },
    {
      id: "how-to-use",
      label: "How to Use",
      content: product.howToUse ? (
        <div className="bg-ivory-100 p-4 rounded-md border border-brown/10">
          <p className="text-sm text-brown/80 leading-relaxed">{product.howToUse}</p>
        </div>
      ) : null,
    },
    {
      id: "ingredients",
      label: "Ingredients & Purity",
      content: product.ingredients ? (
        <p className="text-sm text-brown/80 leading-relaxed">{product.ingredients}</p>
      ) : null,
    },
    {
      id: "storage",
      label: "Storage Guidelines",
      content: product.storage ? (
        <p className="text-sm text-brown/80 leading-relaxed">{product.storage}</p>
      ) : null,
    },
  ].filter((tab) => tab.content);

  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  if (tabs.length === 0) return null;

  return (
    <div className="border border-brown/10 rounded-lg p-6 bg-ivory-50/60">
      <div
        role="tablist"
        aria-label="Product information"
        className="flex flex-wrap gap-2 border-b border-brown/10 pb-2"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveId(tab.id)}
              className={`relative px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-forest text-ivory shadow-sm"
                  : "text-brown/60 hover:text-brown hover:bg-brown/5"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        key={activeTab.id}
        id={`panel-${activeTab.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab.id}`}
        className="pt-6 max-w-2xl animate-fade-in"
      >
        {activeTab.content}
      </div>
    </div>
  );
}
