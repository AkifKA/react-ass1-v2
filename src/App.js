import React from "react";
import { data } from "./helper/data";
import Lesson from "./pages/Lesson";
import Header from "./components/Header/Header";
import { useState } from "react";
function App() {
  const [clear, setClear] = useState(true);
  return (
    <div className="app">
      <Header />
      {clear ? (
        <main>
          <div className="container">
            <h4>6 Lessons Today</h4>
            <Lesson lessonData={data} />
          </div>
          <div className="btn">
            <button onClick={() => setClear(!clear)}>CLEAR LIST</button>
          </div>
        </main>
      ) : (
        <>
          <h4>0 Lesson Today</h4>
          <div className="btn">
            <button onClick={() => setClear(!clear)}>ADD LIST</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
