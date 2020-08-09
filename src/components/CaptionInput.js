import React, { useState } from "react";
import ActionBtn from "./ActionBtn";

import swal from "sweetalert";

const CaptionInput = () => {
  const [caption, setCaption] = useState("");

  const covertAndCopy = async () => {
    if (caption.length === 0) {
      swal("Oh Noo!", "Caption is empty", "error", {
        button: "Trying Again",
      });
    } else {
      let convertedCaption = caption.replace(/\n/g, " \n");
      if (caption.length >= 2200) {
        swal("Wait!", "Instagram Caption Character limit is 2200", "warning", {
          button: "Deleting Some",
        });
      } else {
        try {
          await navigator.clipboard.writeText(convertedCaption);
          swal("GREAT!", "Caption Copied To Clipboard!", "success", {
            button: "Aww yiss!",
          });
        } catch (err) {
          console.error("Async: Could not copy text: ", err);
        }
      }
    }
  };

  const clearCaption = () => {
    swal({
      title: "Do you want to clear Caption?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setCaption("");
      }
    });
  };

  const handleOnChange = (e) => {
    setCaption(e.target.value);
  };

  return (
    <div className="container p-3">
      <ActionBtn covertAndCopy={covertAndCopy} clearCaption={clearCaption} />
      <div className="form-group mt-2">
        <textarea
          className="form-control"
          rows="10"
          value={caption}
          onChange={handleOnChange}
          placeholder="Paste Or Write Your Instagram Caption..."
        ></textarea>
        <h6 className="mt-1">
          <span className="text-danger">{caption.length}</span>/2200(Max
          Characters for Instagram Caption)
        </h6>
      </div>
    </div>
  );
};

export default CaptionInput;
