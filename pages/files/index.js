import Layout from "../../components/Layout";
import FileCard from "../../components/FileCard";

const FilesPage = () => {
  return (
    <Layout>
      <div className="flex gap-5 flex-wrap justify-around">
        <FileCard />
        <FileCard />
        <FileCard />
      </div>
    </Layout>
  );
};

export default FilesPage;
