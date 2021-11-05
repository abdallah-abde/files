import Link from "next/link";

const FileCard = () => {
  return (
    <div className="shadow-md flex flex-col p-4 bg-gray-200 rounded-lg w-2/5 h-56">
      <div className="flex justify-evenly">
        <Link href="/files/1">
          <a className="hover:text-blue-500 transition-all duration-300 ease-out">
            Details
          </a>
        </Link>
      </div>
      <div className="w-1/4 m-auto border-b border-blue-500 border-2" />
      <div className="flex items-center justify-around">
        <div className="flex flex-col font-semibold">
          <p>File Number</p>
          <p>Client Name</p>
          <p>Opponent</p>
          <p>Court</p>
          <p>Last Date</p>
          <p>Next Date</p>
        </div>
        <div className="flex flex-col text-gray-600 text-right">
          <p>2558 / 2021</p>
          <p>شركة الليان للتوريدات العامة</p>
          <p>ابراهيم عثمان</p>
          <p>صلح حقوق جنوب عمان</p>
          <p>28-10-2021</p>
          <p>14-11-2021</p>
        </div>
      </div>
    </div>
  );
};

export default FileCard;
