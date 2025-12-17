import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div
      onClick={() => playWithId(id)}
      className="min-width-180px p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <img className="font-bold mt-2 mb-1" src={name} alt="" />
      <img className="text-slate-200 text-sm" src={desc} alt="" />
    </div>
  );
};

export default SongItem;
