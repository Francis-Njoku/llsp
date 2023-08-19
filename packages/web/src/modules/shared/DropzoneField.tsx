import * as React from "react";
import { FieldProps } from "formik";
import Dropzone, { useDropzone } from "react-dropzone";
import { Button } from "antd";

export const DropzoneField: React.FC<FieldProps<any>> = ({
  field: { name, value },
  form: { setFieldValue, values, setValues }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const pUrl = (value ? value.preview : null) || values.pictureUrl;

  const onDrop = (
    ([file]: any) => {
      console.log([file]);
      setFieldValue(name, file);
    }
  );
  
  const { isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <Dropzone 
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
      </Button>
    </div>
  );
};