"use client";

import React, { createContext, useState } from "react";

type Subscription = {
  plan: "arcade" | "advanced" | "pro";
  type: "monthly" | "yearly";
  addOns: {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  };
};

const defaultSubscription: Subscription = {
  plan: "arcade",
  type: "monthly",
  addOns: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
};

export type SubscriptionContextType = {
  subscription: Subscription;
  setSubscription: (updatedSubscriptionDetails: Subscription) => void;
};

export const SubscriptionContext = createContext<SubscriptionContextType>(
  {} as SubscriptionContextType
);

export const SubscriptionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [subscription, setSubscription] =
    useState<Subscription>(defaultSubscription);

  return (
    <SubscriptionContext.Provider value={{ subscription, setSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  );
};
