import { Information } from "../../molecules";
import { spliteSectionData } from "./data";

const SpliteSection = ({ countryName }: { countryName: string }) => {
  return (
    spliteSectionData(countryName).map((item, index) => (
      <section key={item.id} id={item.id} className={`py-12 sm:py-16 lg:py-24 ${index%2 === 0 ? "bg-[#f7f7f6]" : "bg-white"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-16 items-center w-full mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
          <div className={`order-1 ${item.direction === "row-reverse" ? "lg:order-2" : "lg:order-1"}`}>
            <Information {...item.info} />
          </div>
          <div className={`order-2 ${item.direction === "row-reverse" ? "lg:order-1" : "lg:order-2"}`}>
            {item.content}
          </div>
        </div>
      </section>
    ))
  )
}

export default SpliteSection;