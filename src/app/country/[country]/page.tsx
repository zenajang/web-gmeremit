const CountryPage = async ({params,}: {params: Promise<{ country: string }>;}) => {
  const { country } = await params;
  return <div>{country}</div>;
};

export default CountryPage;