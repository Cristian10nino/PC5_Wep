
  const routes = [
    {
      path: "/dashboard",
      component: () => import("layouts/MainLayout.vue"),
      children: [
        { path: "", component: () => import("pages/IndexPage.vue") }, // Página de inicio

        { path: "Pelicula", component: () => import("pages/PeliculaPage.vue") }, // Página de Película

        { path: "cart", component: () => import("pages/ListaAgrPage.vue") }, // Página de Carrito
      ],
    },
  ];

  export default routes;

