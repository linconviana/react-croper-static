import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

/// :: https://www.npmjs.com/package/react-cropper
/// :: yarn add react-cropper



const Croppie = () => {

    let imagem = '';
    const [imgCroppie, setImgCroppie] = useState('https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg');
    //const [imgCroppie, setImgCroppie] = useState('');

  const cropperRef = useRef<HTMLImageElement>(null);

  const onCrop = () => {
      debugger
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    console.log(cropper.getCroppedCanvas().toDataURL());

    setFileBase64String(cropper.getCroppedCanvas().toDataURL())
    
  };

  const [fileBase64string, setFileBase64String] = useState('');

    const handleUploadFile = async (event: any) => {

        if(event.target.files.length > 0){
            
            //imagem = event.target.files[0].name;
            imagem = event.target.files[0]
            setImgCroppie(imagem);
            onCrop ();
            
            //const types = ['jpeg','jpg', 'png',];
            //const extension = (((event.target.files[0].type).split('/'))[1]).toLowerCase();
            debugger
            
            
        }
    }

  return (
      <>
      {imgCroppie && 
      
      
            <Cropper src={imgCroppie} style={{ height: 400, width: "100%" }}
            // Cropper.js options 
            initialAspectRatio={16 / 9} guides={false} crop={onCrop} ref={cropperRef} />
        }

            <div>
                <span className="btn-upload-file">                   
                    <input type="file" name="uploadFile" id="uploadFile" accept=".jpg, .jpeg, .png" onChange={handleUploadFile} />
                </span>
                <br />

                <h1>Imagem</h1>
                {fileBase64string &&
                    <img src={fileBase64string} alt="imagem decode" style={{width: "200px;"}} />
                }
            </div>

        </>
  );
};

export default Croppie;