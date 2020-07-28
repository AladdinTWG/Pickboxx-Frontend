import React from "react";
import TopPicker from "./TopPicker";
import Header from "./header";
function TopPickerPage() {
  return (
    <div>
      <Header />

      <div className="toppickercontainer">
        <TopPicker name="User 1" score="100" position="1" />
        <TopPicker />
        <TopPicker />
        <TopPicker />
        <TopPicker />
        <TopPicker />
        <TopPicker />
        <TopPicker />
        <TopPicker />
        <TopPicker />
      </div>
    </div>
  );
}

export default TopPickerPage;
