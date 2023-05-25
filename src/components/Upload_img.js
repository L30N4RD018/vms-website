import React from "react";
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { useState } from 'react'
import  '../stylesheets/Upload_img.css'


function Upload_img() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  return (
    <main className="upload-main">
      <form
        action=""
        className="form"
        onClick={() => document.querySelector(".input-field").click()}
      >
        <input
          type="file"
          accept="image/*"
          className="input-field"
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />

        {image ? (
          <img src={image} width={150} height={150} alt={fileName} />
        ) : (
          <>
            <MdCloudUpload color="#1475cf" size={60} />
            <h4>Upload here the image of the vehicle</h4>
          </>
        )}
      </form>

      <section className="uploaded-row">
        <AiFillFileImage color="#1475cf" />
        <span className="upload-content">
          {fileName} -{" "}
          <MdDelete
            onClick={() => {
              setFileName("No selected File");
              setImage(null);
            }}
          />
        </span>
      </section>
    </main>
  );
}

export default Upload_img;
