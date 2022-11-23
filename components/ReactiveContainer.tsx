import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

type props = {
  children: React.ReactNode;
};

export default function ReactiveContainer({ children }: props) {
  const [offset, setOffset] = useState(0);

  return (
    <main className="font-mono h-screen bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1597226290016-764e1f4767dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] ">
      <div
        className={
          "transition-all duration-200 flex flex-col overflow-hidden " +
          (offset > 40 ? "rounded-lg p-4" : "")
        }
      >
        <Navbar offset={offset} />

        <div
          className={
            "h-full w-full bg-slate-800/80 mt-[40px] overflow-y-scroll transition-all duration-200 backdrop-blur " +
            (offset > 40
              ? "max-h-[calc(100vh-2rem-40px)] rounded-b-lg"
              : "max-h-[calc(100vh-40px)]")
          }
          onScroll={(e) => {
            // @ts-ignore
            setOffset(e.target.scrollTop);
          }}
        >
          <div className="">{children}</div>
        </div>
      </div>
    </main>
  );
}
