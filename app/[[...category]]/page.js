import HomeContainer from "@/containers/home";

import Movies from "@/mocks/movies.json";

export default function Home({ params }) {
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
