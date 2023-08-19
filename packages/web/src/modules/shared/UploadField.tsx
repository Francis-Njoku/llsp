import * as React from "react";
import { FieldProps } from "formik";
import Dropzone, { useDropzone } from "react-dropzone";
import { 
  // Upload, message, 
  Button
  // , Avatar 
} from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

// import avatar from "../../assets/svg/profile-picture.svg";

export const UploadField: React.FC<FieldProps<any>> = ({
  field: { name, value },
  form: { setFieldValue, values, setValues }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  // const aUrl = (value ? value.preview : null) || values.avatarUrl;

  const onDrop = (
    ([file]: any) => {
      console.log([file]);
      setFieldValue(name, file);
    }
  );

  // const onChange = (
  //   // if (file.status !== 'uploading') {
  //   //   console.log(info.file, info.fileList);
  //   // }
  //   // if (info.file.status === 'done') {
  //   //   message.success(`${info.file.name} file uploaded successfully`);
  //   // } else if (info.file.status === 'error') {
  //   //   message.error(`${info.file.name} file upload failed.`);
  //   // }

  //   ([file]: any) => {
  //     console.log([file]);

  //     setFieldValue(name, file);
  //     // message.success(`${file.name} file uploaded successfully`);
  //   }
  // );
  
  const { isDragActive } = useDropzone({ onDrop });

  return (
    <div style={{width: "70%"}}>
      {/* {aUrl && ( 
        <Avatar size={130} src={aUrl} alt='profile' className="mr-10" />
      )} */}

      {/* <Upload 
      accept="image/jpeg, image/png"
      multiple={false}
      onChange={onChange}
      {...props}
      >
        <Button 
        icon={<UploadOutlined/>}
        type='primary'>Change Photo</Button>
      </Upload> */}

      <Dropzone 
        accept="image/jpeg, image/png, image/svg"
        multiple={false}
        onDrop={onDrop}
        {...props}
      >
        {({getRootProps, getInputProps}) => (
          <section style={{cursor: "pointer"}}>
            <div style={{border: "none", outline: "none"}} {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drop an image here, or click to select file to upload.</p>
              )}
            </div>
          </section>
        )}
      </Dropzone>

      <Button
      type="primary"
      className="mt-10 secondary"
      onClick={() =>
        setValues({
          ...values,
          avatarUrl: null,
          picture: null
        })
      }
      >
        Remove
      </Button>
      {/* <Dropzone 
        accept="image/jpeg, image/png, image/svg"
        multiple={false}
        onDrop={onDrop}
        {...props}
      >
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p style={{"color":"#000"}}>Drop the files here ...</p>
              ) : (
                <p style={{"color":"#000"}}>Try dropping some files here, or click to select files to upload.</p>
              )}
            </div>
          </section>
        )}
      </Dropzone>

      {pUrl && (
        <img src={pUrl} style={{ maxHeight: 200 }} alt="" />
      )}

      <Button
        onClick={() =>
          setValues({
            ...values,
            pictureUrl: null,
            picture: null
          })
        }
      >
        Remove
      </Button> */}
    </div>
  );
};