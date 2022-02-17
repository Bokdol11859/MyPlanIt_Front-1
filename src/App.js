import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/login.components";
import Onboard1 from "./components/onboard/onboard1.components";
import Onboard2 from "./components/onboard/onboard2.components";
import Onboard3 from "./components/onboard/onboard3.components";
import WishTemplate from "./components/wishtemplate/wishtemplate.components";
import MainTemplateRoutine from "./components/maintemplateroutine/maintemplateroutine.components";
import ViewTemplate from "./components/viewtemplate/viewtemplate.components";
import MainTemplateGrowth from "./components/maintemplategrowth/maintemplategrowth.components";
import SearchTemplate from "./components/searchtemplate/searchtemplate.components";
import TodoPlan from "./components/todoplan/todoplan.components";
import TodoMy from "./components/todomy/todomy.components";

import Detail from "./components/todotest/detail.todotest.components";
import BuyTemplate from "./components/wishtemplate/buytemplate.components";
import UseTemplate from "./components/wishtemplate/usetemplate.components";
import SignUp from "./components/signup/signUp.components";

function App() {

  return (
    <div id="main-container">
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/onboard1" element={<Onboard1 />} />
          <Route path="/onboard2" element={<Onboard2 />} />
          <Route path="/onboard3" element={<Onboard3 />} />
          <Route path="/main/todoplan" element={<TodoPlan />} />
          <Route
            path="/main/maintemplateroutine"
            element={<MainTemplateRoutine />}
          />
          <Route
            path="/main/maintemplategrowth"
            element={<MainTemplateGrowth />}
          />
          <Route path="/main/wishtemplate" element={<WishTemplate />} />
          <Route path="/main/viewtemplate/:id" element={<ViewTemplate />} />
          <Route path="/main/searchtemplate" element={<SearchTemplate />} />
          <Route path="/main/todomy" element={<TodoMy />} />

          <Route path="todo/detail/:id" element={<Detail />} />
          <Route path="/main/buytemplate" element={<BuyTemplate />} />
          <Route path="/main/usetemplate" element={<UseTemplate />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
