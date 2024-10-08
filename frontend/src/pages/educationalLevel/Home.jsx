import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [educationalLevels, setEducationalLevels] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/educationallevel/")
      .then((response) => {
        setEducationalLevels(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Educational Level List</h1>
        <Link to="/educationalLevels/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className=" w-full border-separate border-spacing-2 ">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">
                Educational Level
              </th>
              <th className="border border-slate-600 rounded-md">የትምህርት ደረጃ</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Entered On
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {educationalLevels.map((educationalLevel, index) => (
              <tr key={educationalLevel._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {educationalLevel.eduLevelEng}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {educationalLevel.eduLevelAmh}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {new Date(educationalLevel.createdAt).toLocaleDateString()}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-4">
                    <Link
                      to={`/educationalLevels/details/${educationalLevel._id}`}
                    >
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link
                      to={`/educationalLevels/edit/${educationalLevel._id}`}
                    >
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link
                      to={`/educationalLevels/delete/${educationalLevel._id}`}
                    >
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
