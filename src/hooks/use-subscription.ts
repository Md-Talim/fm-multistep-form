import { SubscriptionContext } from "@/providers/subscription-provider";
import { useContext } from "react";

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error("useSubscription must be used within SubscriptionProvider");
  }
  return context;
};
