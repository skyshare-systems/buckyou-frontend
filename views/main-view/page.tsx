import React from "react";
import ReferFriends from "./refer-friends";
import TableView from "./table-view";
import dynamic from "next/dynamic";

const BuyEnvelopes = dynamic(() => import("./buy-envelopes"), {
  loading: () => <p>Loading...</p>,
});

const MainView = () => {
  return (
    <>
      <div className="hidden lg:flex flex-col  lg:flex-row gap-2  items-center lg:items-start justify-center lg:justify-between max-w-[512px] sm:max-w-full w-full px-4">
        <BuyEnvelopes />
        <TableView />
        <ReferFriends />
      </div>
      <div className="lg:hidden flex flex-wrap gap-2  items-center lg:items-start justify-center lg:justify-between max-w-[512px] sm:max-w-full w-full px-4">
        <BuyEnvelopes />
        <ReferFriends />
        <TableView />
      </div>
    </>
  );
};

export default MainView;
