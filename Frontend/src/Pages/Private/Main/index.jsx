import React, { useState } from "react";
import "./Styles.scss";
import { DashboardLayout, Modal, Spinner, Table } from "../../../components";
import { FiPlus } from "react-icons/fi";
import { getClient } from "../../../utils";
import axios from "axios";
import userOBJ from "../../../Classes";
import { toast } from "react-toastify";
import { useEffect } from "react";
const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState(null);
  const [quantity, setquantity] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [data, setData] = useState([]);
  const { role, _id, email } = getClient();

  const handleShow = () => {
    setShow(!show);
  };
  useEffect(() => {
    const getData = async () => {
      await userOBJ.get_product(1, _id).then((res) => {
        setData(res.payload);
      });
    };
    getData();
  }, [_id]);
  const handleImageUpload = async (file) => {
    setImageLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "zoahguuq");
    await axios
      .post(
        "https://api.cloudinary.com/v1_1/folajimidev/image/upload",
        formData
      )
      .then((res) => {
        setimage(res.data["secure_url"]);
        setImageLoading(false);
      });
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    let payload = {
      category,
      title,
      price,
      image,
      quantity,
      farmerEmail: email,
    };
    await userOBJ.user_add_product(payload).then((res) => {
      if (res.status) {
        toast.success(res.message);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error(res.message);
      }
    });
  };
  return (
    <DashboardLayout>
      {role === "farmer" ? (
        <>
          <div className="main">
            <div className="button" onClick={handleShow}>
              <FiPlus fontWeight={800} />
              Add Product
            </div>
            <Table
              headData={[
                "Title",
                "Category",
                "Price",
                "Quantity",
                "Status",
                "Action",
              ]}
              bodyData={data}
              width={"100%"}
              isEmpty={!data.length}
            />
          </div>
          <Modal
            isOpen={show}
            close={handleShow}
            trigger={handleShow}
            title={"Add Product"}
          >
            <form onSubmit={handleSubmit}>
              <div className="form_control">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Water yam"
                  value={title}
                  onChange={(event) => settitle(event.target.value)}
                />
              </div>
              <div className="form_control">
                <label htmlFor="title">Category</label>
                <select
                  type="text"
                  id="title"
                  onChange={(event) => setcategory(event.target.value)}
                >
                  <option value="" selected disabled>
                    Select Product Category
                  </option>
                  <option value="yam">Yam</option>
                  <option value="maize">Maize</option>
                </select>
              </div>
              <div className="form_control">
                <label htmlFor="title">Price</label>
                <input
                  type="text"
                  id="title"
                  placeholder="2000"
                  value={price}
                  onChange={(event) => setprice(event.target.value)}
                />
              </div>
              <div className="form_control">
                <label htmlFor="title">Quantity</label>
                <input
                  type="number"
                  id="title"
                  placeholder="10"
                  value={quantity}
                  onChange={(event) => setquantity(event.target.value)}
                />
              </div>
              <div className="form_control">
                <label htmlFor="title">Upload an image</label>
                <input
                  type="file"
                  id="title"
                  onChange={(event) => handleImageUpload(event.target.files[0])}
                />
              </div>
              <div className="form_control">
                <button type="submit" disabled={loading || imageLoading}>
                  {imageLoading ? (
                    "Uploading..."
                  ) : loading ? (
                    <Spinner loading={loading} />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </Modal>
        </>
      ) : (
        <>Customer Product page</>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
