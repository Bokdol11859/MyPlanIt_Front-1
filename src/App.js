import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/login.components";
import Onboard1 from "./components/onboard/onboard1.components";
import Onboard2 from "./components/onboard/onboard2.components";
import Onboard3 from "./components/onboard/onboard3.components";
import WishTemplate from "./components/wishtemplate/wishtemplate.components";
import ViewTemplate from "./components/viewtemplate/viewtemplate.components";
import SearchTemplate from "./components/searchtemplate/searchtemplate.components";
import Todo from "./components/todo/Todo.components";

import SocialLogin from "./components/login/SocialLogin.components";
import MyPlan from "./components/myplan/MyPlan.components";
import TodoDetail from "./components/todo/TodoDetail.components";
import PlanMarket from "./components/planmarket/PlanMarket.components";
import Social from "./components/social/social.components";
import Admin from "./components/admin/admin.components";

function App() {
  return (
    <div id="main-container">
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<SocialLogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login/kakao/:code" element={<Social />} />

          <Route path="/onboard1" element={<Onboard1 />} />
          <Route path="/onboard2" element={<Onboard2 />} />
          <Route path="/onboard3" element={<Onboard3 />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/myplan" element={<MyPlan />} />
          <Route path="/planmarket" element={<PlanMarket />} />

          <Route path="/main/wishtemplate" element={<WishTemplate />} />
          <Route path="/main/viewtemplate/:id" element={<ViewTemplate />} />
          <Route path="/main/searchtemplate" element={<SearchTemplate />} />

          <Route path="todo/detail/:id" element={<TodoDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
