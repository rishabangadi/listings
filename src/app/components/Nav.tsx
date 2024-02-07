import React from "react";
import { Palmtree } from "lucide-react";

function Nav() {
  return (
    <nav className="bg-blue-800 h-16 flex items-center justify-center">
      <h1 className="text-4xl tracking-tight font-bold text-slate-50 flex items-center gap-2">
        <Palmtree size={36} />
        VRBO
      </h1>
    </nav>
  );
}

export default Nav;
