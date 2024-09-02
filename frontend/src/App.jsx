import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/educationalLevel/Home";
import CreateEducationalLevel from "./pages/educationalLevel/CreateEducationalLevel";
import DeleteEducationalLevel from "./pages/educationalLevel/DeleteEducationalLevel";
import EditEducationalLevel from "./pages/educationalLevel/EditEducationalLevel";
import ShowEducationalLevel from "./pages/educationalLevel/ShowEducationalLevel";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/educationalLevels/create"
        element={<CreateEducationalLevel />}
      />
      <Route
        path="/educationalLevels/details/:id"
        element={<ShowEducationalLevel />}
      />
      <Route
        path="/educationalLevels/edit/:id"
        element={<EditEducationalLevel />}
      />
      <Route
        path="/educationalLevels/delete/:id"
        element={<DeleteEducationalLevel />}
      />
    </Routes>
  );
};

export default App;
