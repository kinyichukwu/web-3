import "./addProduct.styles.scss";
import Addfile from "./addFile.js";
import DeleteFile from "./deleteFile";

export const Admin = () => {
  return (
    <div className="admin">
      <DeleteFile />
      <Addfile />
    </div>
  );
};
