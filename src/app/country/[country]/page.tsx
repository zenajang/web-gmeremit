import CountryTemplate from "@/components/country/templates";
import Header from "@/components/Header";

const CountryPage = async ({params,}: {params: Promise<{ country: string }>;}) => {
  const { country } = await params;
  return <>
  <Header />
  <CountryTemplate countryName={country} />
  </>;
};

export default CountryPage;