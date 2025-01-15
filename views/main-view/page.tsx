import React from "react";
import BuyEnvelopes from "./buy-envelopes";
import ReferFriends from "./refer-friends";

const MainView = () => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row gap-2  items-center lg:items-start justify-center lg:justify-between max-w-[512px] sm:max-w-full w-full">
      <BuyEnvelopes />
      <ReferFriends />
    </div>
  );
};

export default MainView;
