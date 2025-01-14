import React from "react";
import BuyEnvelopes from "./buy-envelopes";

const MainView = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 items-start w-full">
      <BuyEnvelopes />
    </div>
  );
};

export default MainView;
