import { useState } from "react";
import Layout from "./../../components/Layout";

const FilePage = () => {
  const [active, setActive] = useState("");

  const changeStyle = (id) => {
    const style = `text-center border-t bg-gray-200 overflow-hidden transition-all duration-500 ease-in-out`;
    if (id !== active) {
      return `${style} max-h-0`;
    } else {
      return `${style} max-h-32 overflow-y-auto`;
    }
  };

  const data = [
    {
      id: "1",
      date: "1/1/2021",
      judge: "name",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident explicabo. Accusamus dicta numquam eaque accusantium? Illo velit laboriosam eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita suscipit adipisci numquam est illo voluptas magni recusandae voluptatem ex omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident explicabo. Accusamus dicta numquam eaque accusantium? Illo velit laboriosam eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita suscipit adipisci numquam est illo voluptas magni recusandae voluptatem ex omnis.",
    },
    {
      id: "2",
      date: "14/1/2021",
      judge: "name",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident explicabo. Accusamus dicta numquam eaque accusantium? Illo velit laboriosam eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita suscipit adipisci numquam est illo voluptas magni recusandae voluptatem ex omnis.",
    },
    {
      id: "3",
      date: "28/1/2021",
      judge: "name",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident explicabo. Accusamus dicta numquam eaque accusantium? Illo velit laboriosam eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita suscipit adipisci numquam est illo voluptas magni recusandae voluptatem ex omnis.",
    },
    {
      id: "4",
      date: "6/2/2021",
      judge: "name",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, provident explicabo. Accusamus dicta numquam eaque accusantium? Illo velit laboriosam eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita suscipit adipisci numquam est illo voluptas magni recusandae voluptatem ex omnis.",
    },
  ];

  return (
    <Layout>
      <div className="w-full p-2 px-4">
        <div className="flex">
          <p className="flex-grow text-2xl text-blue-500 font-semibold">
            File Number: 2558 / 2021
          </p>
          <div className="flex items-center space-x-5">
            <p className="text-lg bg-green-600 p-2 px-4 text-gray-100 rounded">
              منظورة
            </p>
            <p className="text-xl font-semibold bg-yellow-500 rounded p-2 px-4 text-gray-100">
              2021
            </p>
          </div>
        </div>
        <div className="w-1/6 m-auto border-b border-2 mb-4"></div>
        <div className="w-3/4 flex m-auto justify-between">
          <div>
            <p className="font-semibold text-xl">Court</p>
            <p>Court Name</p>
          </div>
          <div>
            <p className="font-semibold text-xl">Judge</p>
            <p>Judge Name</p>
          </div>
          <div>
            <p className="font-semibold text-xl">Category</p>
            <p>Category</p>
          </div>
          <div>
            <p className="font-semibold text-xl">Registry Date</p>
            <p>Registry Date</p>
          </div>
        </div>
        <div className="w-full my-10">
          <h3 className="text-2xl font-bold mb-2">Parties</h3>
          <div className="flex justify-evenly">
            <div className="shadow w-1/3 text-center p-2">
              <p className="bg-gray-500 text-gray-100 p-3 shadow-lg">مدعي</p>
              <p className="font-semibold p-3 text-gray-500">Second</p>
            </div>
            <div className="shadow w-1/3 text-center p-2">
              <p className="bg-blue-500 text-gray-100 p-3 shadow-lg">
                مدعى عليها
              </p>
              <p className="font-semibold p-3 text-blue-500">Second</p>
            </div>
          </div>
        </div>
        <div>
          <p>Judgment Date</p>
          <p>Judgment Summary</p>
        </div>
        <div className="w-full my-10 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-2 self-start">Sessions</h3>
          <div className="flex flex-col shadow w-3/4">
            <div className="flex p-2 px-4 border-b bg-gray-500 text-gray-100 ">
              <p className="flex-1">Date</p>
              <p>Judge</p>
            </div>
            {data.map((d) => (
              <>
                <div
                  onClick={() => setActive(active !== d.id ? d.id : "")}
                  className="flex hover:bg-gray-500 p-2 px-4 cursor-pointer transition duration-1000 ease-out"
                >
                  <p className="flex-1">{d.date}</p>
                  <p>{d.judge}</p>
                </div>
                <div className={changeStyle(d.id)}>
                  <p className="p-2">{d.details}</p>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="h-40">
          <h3>Tasks</h3>
        </div>
      </div>
    </Layout>
  );
};

export default FilePage;
