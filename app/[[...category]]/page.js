import HomeContainer from "@/containers/home";

import Movies from "@/mocks/movies.json";

// async function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default async function Home({ params }) {
  // await delay(2000);

  let selectedCagetory;

  if (params.category?.length > 0) {
    selectedCagetory = true;
  }

  return (
    <HomeContainer
      selectedCagetory={{
        id: params.category?.[0] ?? "",
        movies: selectedCagetory ? Movies.results.slice(0, 6) : [],
      }}
    />
  );
}
