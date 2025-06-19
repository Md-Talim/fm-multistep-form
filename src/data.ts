type PlanIdType = "arcade" | "advanced" | "pro";

type PlanNameType = "Arcade" | "Advanced" | "Pro";

type PriceType = {
  monthly: number;
  yearly: number;
};

interface Plan {
  id: PlanIdType;
  name: PlanNameType;
  price: PriceType;
}

export const planList: Plan[] = [
  {
    id: "arcade",
    name: "Arcade",
    price: { monthly: 9, yearly: 90 },
  },
  {
    id: "advanced",
    name: "Advanced",
    price: { monthly: 12, yearly: 120 },
  },
  {
    id: "pro",
    name: "Pro",
    price: { monthly: 15, yearly: 150 },
  },
];

type addOnId = "onlineService" | "largerStorage" | "customizableProfile";

interface AddOn {
  id: addOnId;
  name: string;
  feature: string;
  price: PriceType;
}

export const addOnList: AddOn[] = [
  {
    id: "onlineService",
    name: "Online Service",
    feature: "Access to multiplayer games",
    price: { monthly: 1, yearly: 10 },
  },
  {
    id: "largerStorage",
    name: "Larger storage",
    feature: "Extra 1TB of cloud save",
    price: { monthly: 2, yearly: 20 },
  },
  {
    id: "customizableProfile",
    name: "Customizable profile",
    feature: "Custom theme on your profile",
    price: { monthly: 2, yearly: 20 },
  },
];
