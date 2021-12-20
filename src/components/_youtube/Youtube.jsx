import React, { useState } from "react";
import ChipList from "./ChipList";
import ModalSidebar from "./ModalSidebar";
import Topbar from "./Topbar";
import VideoList from "./VideoList";

const Youtube = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const openSidebar = () => setShowSidebar(true);
  const hideSidebar = () => setShowSidebar(false);

  return (
    <div>
      <Topbar onOpenSidebar={openSidebar} />
      {showSidebar && <ModalSidebar onClose={hideSidebar} />}
      <ChipList />
      <VideoList />
    </div>
  );
};

export default Youtube;
