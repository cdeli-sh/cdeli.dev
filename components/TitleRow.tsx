type props = {
  id: string;
  children: string;
};

export default function TitleRow({ id, children }: props) {
  return (
    <div
      className="w-[calc(100%-2rem)] text-center p-8 bg-slate-800/75 m-4 rounded-lg text-2xl text-white"
      id={id}
    >
      {children}
    </div>
  );
}
