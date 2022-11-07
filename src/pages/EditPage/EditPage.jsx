import EditForm from "../../components/EditForm/EditForm";
import Navbar from "../../components/Navbar/Navbar";
import "./EditPage.scss";

const EditPage = () => {
  return (
    <>
      <main className="edit">
        <h1 className="edit__title">Edit Fighter</h1>
        <EditForm />
      </main>
      <Navbar />
    </>
  );
};

export default EditPage;
