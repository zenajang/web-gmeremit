"use client";

import * as S from "@/components/support/social-channels/styles";
import type { Contact } from "@/data/socialChannels";

interface ContactPanelProps {
  contacts: Contact[];
  isOpen: boolean;
}

const ContactPanel = ({ contacts, isOpen }: ContactPanelProps) => {
  return (
    <div className={isOpen ? S.SocialChannelsPanelOpen : S.SocialChannelsPanelClosed}>
      <div className="overflow-hidden">
        <div className={S.SocialChannelsPanelInner}>
          {contacts.map((contact) => (
            <a
              key={`${contact.label}-${contact.phone}`}
              href={`tel:${contact.phone.replace(/-/g, "")}`}
              onClick={(event) => event.stopPropagation()}
              className="flex items-center justify-between text-sm rounded-xl px-3 py-2.5 hover:bg-primary/[0.04] transition-colors group"
            >
              <span className={S.SocialChannelsPanelLabel}>{contact.label}</span>
              <span className="font-semibold text-dark group-hover:text-primary">
                {contact.phone}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPanel;
