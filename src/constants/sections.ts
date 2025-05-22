export const SECTIONS = {
  HOME: {
    title: "Inicio",
    path: "#",
    hidden: true,
  },
  IDENTITY: {
    title: "Identidad",
    path: "#identidad",
  },
  PURPOSE: {
    title: "Propósito",
    path: "#proposito",
  },
  CREED: {
    title: "Creencias",
    path: "#creencias",
  },
  CONTACT: {
    title: "Contáctanos",
    path: "#contactanos",
  },
};

export const PAGE_SECTIONS = Object.entries(SECTIONS).map(([key, value]) => ({
  name: key.toLowerCase(),
  hidden: false,
  ...value,
}));
