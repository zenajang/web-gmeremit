/**
 * 고객지원 레이아웃과 같은 배경 패턴.
 * 블러 원이 음수 오프셋을 써서 밖으로 넘치므로 overflow-hidden 으로 가둔다.
 */
const Backdrop = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: "radial-gradient(var(--color-primary) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
    <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/[0.07] blur-3xl" />
    <div className="absolute top-20 -right-32 h-[400px] w-[400px] rounded-full bg-primary/[0.07] blur-3xl" />
    <div className="absolute -bottom-20 right-20 h-[300px] w-[300px] rounded-full bg-primary/[0.07] blur-3xl" />
  </div>
);

export default Backdrop;
