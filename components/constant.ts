const getRoutes = (userId: number) => {
  return [
    {
      path: "/",
      pathName: "Home",
      display: true,
    },
    {
      path: "/movies",
      pathName: "Movies",
      display: true,
    },
    {
      path: "/genres",
      pathName: "Genres",
      display: true,
    },
    {
      path: "/admin/movie/:id",
      pathName: "Add Movie",
      display: userId ? true : false,
    },
    {
      path: "/manage-catalogue",
      pathName: "Manage Catalogue",
      display: userId ? true : false,
    },
    {
      path: "/graphql",
      pathName: "GraphQL",
      display: userId ? true : false,
    },
  ];
};

export default getRoutes;
