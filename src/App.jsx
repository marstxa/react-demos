import React from "react";
import Counter from "./components/Counter";
import TodoApp from "./components/todoApp";
import FetchingData from "./components/FetchingData";
import Calculator from "./components/calculator-app/Calculator";
import ChangeBackgroundColors from "./components/ChangeBackgroundColors";
import SearchBar from "./components/SearchBar";
import Testimonials from "./components/Testimonials";
import { accordionData } from "./components/accordion/accordion-data";
import Accordion from "./components/accordion/Accordion";
import FormValidation from "./components/FormValidation";

function App() {
  return (
    // <div className="w-full h-screen flex items-center justify-center flex-col gap-5">
      //   {accordionData.map((data) => {
      //     return <Accordion title={data.title} info={data.info} />;
    //   })}
    // </div>

    <FormValidation />
  );
}

export default App;
