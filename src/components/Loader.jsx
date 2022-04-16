import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";


export default function Loader() {
    const [color,setColor] = useState("#3B82F6")
  return (
    <div className="min-h-screen min-w-full flex flex-col justify-center items-center">
      <HashLoader color={color} size={40} />
      <h1 className="p-4 font-semibold text-sm">Loading...</h1>
    </div>
  );
}
