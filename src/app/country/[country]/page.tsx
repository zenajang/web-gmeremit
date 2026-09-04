import CountryTemplate from "@/components/country/templates";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CountryPage = async ({params,}: {params: Promise<{ country: string }>;}) => {
  const { country } = await params;
  return <>
  <Header />
  <CountryTemplate countryName={country} />
  <Footer variant="minimal" />
  </>;
};

export default CountryPage;