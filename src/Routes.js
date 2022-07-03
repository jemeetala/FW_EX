import React from "react";
import Tasks from "pages/Tasks";
import Addnotes from "pages/Addnotes";
import Account from "pages/Account";
import AddContacts from "pages/AddContacts";
import Contacts from "pages/Contacts";
import Products1 from "pages/Products1";
import AddAccount from "pages/AddAccount";
import Dashboard from "pages/Dashboard";
import Products from "pages/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addaccount" element={<AddAccount />} />
        <Route path="/products1" element={<Products1 />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/addcontacts" element={<AddContacts />} />
        <Route path="/account" element={<Account />} />
        <Route path="/addnotes" element={<Addnotes />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
