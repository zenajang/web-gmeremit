import { Information } from "../../molecules";
import { spliteSectionData } from "./data";

const SpliteSection = () => {
  return (
    spliteSectionData.map((item) => (
      <section key={item.id} id={item.id} className={`bg-white py-12 sm:py-16 lg:py-24`}>
        <div className="flex flex-col lg:flex-row gap-16 w-full mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
          <Information {...item.info} />
          <div>{item.content}</div>
        </div>
      </section>
    ))
  )
}

export default SpliteSection;