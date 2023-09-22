/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message, Upload, Select } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Option } from "antd/es/mentions";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const CreateOrEditProduct = ({ closeDrawer }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const onFinish = (values) => {
    setLoading(true);
    console.log("Formulario enviado:", values);
    setLoading(false);
    form.resetFields();
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Form
      form={form}
      name="addProductForm"
      onFinish={onFinish}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
    >
      <Form.Item
        label="Nombre"
        name="name"
        rules={[
          {
            required: true,
            message: "Por favor ingresa el nombre del producto",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Categoría"
        name="category"
        rules={[
          {
            required: true,
            message: "Por favor ingresa la categoría del producto",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Precio"
        name="price"
        rules={[
          {
            required: true,
            message: "Por favor ingresa el precio del producto",
          },
        ]}
      >
        <Input type="number" step="0.01" />
      </Form.Item>

      <Form.Item label="Cantidad" name="quantity">
        <Input type="number" step="1" />
      </Form.Item>

      <Form.Item label="Descripción" name="description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item label="Estado" name="state">
        <Select>
          <Option>Activo</Option>
          <Option>Inactivo</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Imagen" name="image">
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="avatar"
              style={{
                width: "100%",
              }}
            />
          ) : (
            uploadButton
          )}
        </Upload>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Agregar Producto
        </Button>
        <Button onClick={closeDrawer} style={{ marginLeft: 8 }}>
          Cancelar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateOrEditProduct;
