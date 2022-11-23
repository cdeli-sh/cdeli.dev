import TitleRow from "./TitleRow";

type props = {
  data: { date: string; company: string; role: string; description: string }[];
  title: { id: string; text: string };
};

export default function DateRows({ data, title }: props) {
  return (
    <>
      <TitleRow id={title.id}>{title.text}</TitleRow>

      {data.map((d, i) => (
        <div className="text-white" key={i}>
          <div className="flex m-4  rounded-lg">
            <div className="bg-blue-600/50 rounded-lg p-4 font-monobold text-lg w-40 flex-shrink-0 text-center flex items-center justify-center whitespace-pre-line">
              <span>{d.date}</span>
            </div>
            <div className="p-4">
              <h4 className="text-2xl">{d.company}</h4>
              <span>{d.role}</span>
              <p dangerouslySetInnerHTML={{ __html: d.description }}></p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
