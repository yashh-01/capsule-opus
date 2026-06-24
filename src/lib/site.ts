export const SITE = {
  name: "CapsuleHaus",
  tagline: "Futuristic Capsule Houses for Modern Living",
  description:
    "CapsuleHaus designs and builds futuristic prefab capsule houses — luxury capsule homes, smart pod houses, resort capsule cabins, eco pods and backyard office pods, delivered turnkey.",
  whatsapp: "15551234567", // placeholder
  email: "hello@capsulehaus.example",
  phone: "+1 (555) 123-4567",
  address: "1 Future Way, Capsule District",
};

export const waLink = (msg?: string) =>
  `https://wa.me/${SITE.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
