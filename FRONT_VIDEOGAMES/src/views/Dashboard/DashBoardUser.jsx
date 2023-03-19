import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBarDashBoard from "./sideBarDashboard";
import CardUserDashBoard from "./CardUserDashBoard";
import { GetUsers } from "../../redux/actions/actions";

export default function DashBoardUser() {
  const allUsers = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUsers());
  }, [dispatch]);

  <div class="grid grid-cols-6 min-h-screen ">
    <div class="col-span-1 bg-slate-400 text-center w-full">
      <SideBarDashBoard />
    </div>

    <div class="col-span-5 bg-gray-200 items-center relative"></div>
  </div>;
}
