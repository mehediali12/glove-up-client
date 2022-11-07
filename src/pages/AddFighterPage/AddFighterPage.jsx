import Navbar from "../../components/Navbar/Navbar";
import "./AddFighterPage.scss";
import AddFighterForm from "../../components/AddFighterForm/AddFighterForm";

const AddFighterPage = () => {
  return (
    <>
      <main className="edit">
        <h1 className="edit__title">Add New Fighter</h1>
        <AddFighterForm />
      </main>
      <Navbar />
    </>
  );
};

export default AddFighterPage;
