import { useState } from "react";

export default function ProductTabs({ product }) {
  const tabs = [
    {
      id: "benefits",
      label: "Benefits",
      content: Array.isArray(product.benefits) && product.benefits.length > 0 ? (
        <ul className="flex flex-col gap-2.5">
          {product.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5 text-sm text-brown/75 leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amla shrink-0" aria-hidden="true" />
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
        <p className="text-sm text-brown/75 leading-relaxed">{product.howToUse}</p>
      ) : null,
    },
    {
      id: "ingredients",
      label: "Ingredients",
      content: product.ingredients ? (
        <p className="text-sm text-brown/75 leading-relaxed">{product.ingredients}</p>
      ) : null,
    },
    {
      id: "storage",
      label: "Storage",
      content: product.storage ? (
        <p className="text-sm text-brown/75 leading-relaxed">{product.storage}</p>
      ) : null,
    },
  ].filter((tab) => tab.content);

  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  if (tabs.length === 0) return null;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Product information"
        className="flex flex-wrap gap-1 border-b border-brown/10"
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
              className={`relative px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                isActive ? "text-forest" : "text-brown/50 hover:text-brown/80"
              }`}
            >
              {tab.label}
              {isActive ? (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-forest" aria-hidden="true" />
              ) : null}
            </button>
          );
        })}
      </div>

      <div
        key={activeTab.id}
        id={`panel-${activeTab.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab.id}`}
        className="py-6 max-w-2xl"
      >
        {activeTab.content}
      </div>
    </div>
  );
}
