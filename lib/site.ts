// Single source of truth for business details.
// Update phone numbers, email, or Facebook here and it changes everywhere.

export const site = {
  name: "Chester Electrical, Plumbing, and Heating",
  shortName: "Chester EPH",
  since: "1988",
  area: "Chester and surrounding areas",
  phone: {
    general: { label: "902-275-3737", tel: "9022753737" },
    electrical: { name: "Kevin", label: "902-237-4839", tel: "9022374839" },
    plumbing: { name: "Kendall", label: "902-299-0130", tel: "9022990130" },
  },
  email: "service@ceph.ca",
  facebook: "https://www.facebook.com/ChesterEPH",
};

export type ServiceKey = "electrical" | "plumbing" | "heating";
