import SupportHeroTemplate from "@/components/support/common/template";

export default function SupportLayout({children}: {children: React.ReactNode;}) {
  return (
    <SupportHeroTemplate>{children}</SupportHeroTemplate>
  );
}
