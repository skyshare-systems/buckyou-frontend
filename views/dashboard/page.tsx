import React from "react";
import MainView from "@/views/main-view/page";
import DashboardLeft from "@/views/dashboard/dashboard-left";
import DashboardRight from "@/views/dashboard/dashboard-right";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-start min-h-[100dvh] body-background pt-[6.5rem] pb-[6rem] overflow-hidden">
      <div className="flex flex-col gap-[7px] justify-center items-center max-w-[1440px] 2xl:px-0 px-4 grow">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:w-full px-4">
          <DashboardLeft />
          <DashboardRight />
        </div>
        <MainView />
      </div>
    </div>
  );
};

export default Dashboard;
