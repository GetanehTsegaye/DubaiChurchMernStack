import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";

function ShowEducationalLevel() {
  const [educationalLevel, setEducationalLevel] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/educationallevel/${id}`)
      .then((response) => {
        setEducationalLevel(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Educational Level</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500"> Id</span>
            <span>{educationalLevel._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">
              Educational Level
            </span>
            <span>{educationalLevel.eduLevelEng}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500"> የትምህርት ደረጃ</span>
            <span>{educationalLevel.eduLevelAmh}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500"> Created Date</span>
            <span>
              {new Date(educationalLevel.createdAt).toLocaleDateString()}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">
              Last Updated Date
            </span>
            <span>
              {new Date(educationalLevel.updatedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowEducationalLevel;
