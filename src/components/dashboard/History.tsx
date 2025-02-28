import { useState } from "react";
import type { Session, Exercise } from "./types";

const History = ({ sessions }: { sessions: Session[] }) => {
  return (
    <div className="flex flex-col items-center gap-4 w-4/5">
      <h2 className="font-bold text-4xl text-center">History</h2>
      {sessions.length === 0 ? (
        <div className=" w-4/5">
          <p className="text-center">No data</p>
        </div>
      ) : (
        <Sessions sessions={sessions} />
      )}
    </div>
  );
};

const Sessions = ({ sessions }: { sessions: Session[] }) => {
  return (
    <ul className=" w-4/5">
      {sessions.map((session, idx) => {
        return <Session date={session.date} data={session.data} key={idx} />;
      })}
    </ul>
  );
};

const Session = ({ date, data }: Session) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li className="cursor-pointer" onClick={onClick}>
      <p className="font-semibold border">{date}</p>
      <div className="ml-4">
        {isOpen &&
          data.map((exercise, idx) => (
            <Exercise name={exercise.name} sets={exercise.sets} key={idx} />
          ))}
      </div>
    </li>
  );
};

const Exercise = ({ name, sets }: Exercise) => {
  return (
    <li>
      <p className="underline">{name}</p>
      <ul className="ml-4">
        {sets.map((set, idx) => {
          const setCount = idx + 1;

          return (
            <li className="flex gap-2" key={idx}>
              <p>{setCount}</p>
              <p>
                {set.weight}kg x {set.reps}
              </p>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default History;
