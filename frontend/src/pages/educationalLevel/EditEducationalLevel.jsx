import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";
import { useNavigate } from "react-router-dom";

const EditEducationalLevel = () => {
  const [eduLevelEng, setEduLevelEng] = useState("");
  const [eduLevelAmh, setEduLevelAmh] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/educationallevel/${id}`)
      .then((response) => {
        setEduLevelEng(response.data.eduLevelEng);
        setEduLevelAmh(response.data.eduLevelAmh);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("An Error happened. please check console");
      });
  }, []);

  const handleEditEduLevel = () => {
    const data = {
      eduLevelEng,
      eduLevelAmh,
    };
    setLoading(true);
    axios
      .put(`http://localhost:3000/educationallevel/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An Error happened. please check console");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl">Edit Educational Level</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Educational Level
          </label>
          <input
            type="text"
            value={eduLevelEng}
            onChange={(e) => setEduLevelEng(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">የትምህርት ደረጃ</label>
          <input
            type="text"
            value={eduLevelAmh}
            onChange={(e) => setEduLevelAmh(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditEduLevel}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditEducationalLevel;
