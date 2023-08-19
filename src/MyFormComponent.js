import React, { useState } from "react";
import { Form, Input, Radio, Upload, Button, Checkbox } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import "./styles.css";
const MyFormComponent = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleNext = () => {
    form.validateFields().then(() => {
      setCurrentStep(currentStep + 1);
    });
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const onFinish = (values) => {
    setFormData(values);
    // You can add any additional logic here upon form submission
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-container">
      <div className="log">
        <img
          src="https://eazytaxes.com/assets/logo-white.svg"
          alt="Company Logo"
          className="company-logo"
        />

        <h3 className="form-name">Easy Submit Tax Below</h3>
      </div>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          lastYearFiled: "no",
          incorporatedIn2022: "no",
          ownershipChange: "no",
          transactions2022: [],
          requiredDocuments: []
        }}
      >
        {currentStep === 1 && (
          <div>
            <Form.Item
              label="Email *"
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Invalid email format" }
              ]}
            >
              <Input className="input-box-email" />
            </Form.Item>
            <Form.Item
              label="Did you file the return last year?"
              name="lastYearFiled"
            ></Form.Item>
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>

            <Form.Item
              label="Upload file "
              name="taxReturnFile"
              rules={[{ required: true, message: "File upload is required" }]}
            ></Form.Item>
            <div>
              <div className="upload">
                <Upload.Dragger>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Browse Files</p>
                  <p className="ant-upload-hint">Drag and Drop Files Here</p>
                </Upload.Dragger>
              </div>
            </div>
            <Form.Item
              label="Was the S-corp incorporated in 2022?"
              name="incorporatedIn2022"
            ></Form.Item>
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>

            <Form.Item
              label="Upload file "
              name="s-corp"
              rules={[{ required: true, message: "File upload is required" }]}
            ></Form.Item>
            <div>
              <div className="upload">
                <Upload.Dragger>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Browse Files</p>
                  <p className="ant-upload-hint">Drag and Drop Files Here</p>
                </Upload.Dragger>
              </div>
            </div>
            <Form.Item
              label="Was there any change in ownership structure in 2022?"
              name="ownershipChange"
            ></Form.Item>

            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>

            <Form.Item
              label="Upload file "
              name="ownership"
              rules={[{ required: true, message: "File upload is required" }]}
            ></Form.Item>
            <div>
              <div className="upload">
                <Upload.Dragger>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Browse Files</p>
                  <p className="ant-upload-hint">Drag and Drop Files Here</p>
                </Upload.Dragger>
              </div>
            </div>
          </div>
        )}
        <Form.Item
          label="Was there any following transaction in 2022?"
          name="transactions2022"
        ></Form.Item>
        <div className="checkbox-group">
          <Checkbox.Group
            options={[
              "Capital infusion",
              "Capital withdrawal",
              "Related party transaction"
            ]}
          />
        </div>
        <Form.Item
          label="Upload file "
          name="taxReturnFile"
          rules={[{ required: true, message: "File upload is required" }]}
        ></Form.Item>
        <div>
          <div className="upload">
            <Upload.Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Browse Files</p>
              <p className="ant-upload-hint">Drag and Drop Files Here</p>
            </Upload.Dragger>
          </div>
        </div>
        <Form.Item
          label="Please upload the following documents"
          name="requiredDocuments"
        ></Form.Item>
        <div className="checkbox-group">
          <Checkbox>Bank statements</Checkbox>
          <Checkbox>Credit Card Statements</Checkbox>
          <Checkbox>Form 10991</Checkbox>
          <Checkbox>Form 940/941</Checkbox>
          <Checkbox>EIN Certificate</Checkbox>
          <Checkbox>IRS Acceptance Letter of S-Corp</Checkbox>
          <Checkbox>Financials (if prepared)</Checkbox>
        </div>
        <div>
          <Form.Item
            label="Upload file "
            name="taxReturnFile"
            rules={[{ required: true, message: "File upload is required" }]}
          >
            {" "}
          </Form.Item>
          <div className="upload">
            <Upload.Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Browse Files</p>
              <p className="ant-upload-hint">Drag and Drop Files Here</p>
            </Upload.Dragger>
          </div>
        </div>
        <Form.Item
          label="Please Complete the payment.We will prepare draft tax return with in 48 hours!"
          name="requiredDocuments"
        ></Form.Item>
        <div className="company-info-container">
          <div className="check">
            <Checkbox checked={isChecked} onChange={handleCheckboxChange}>
              <img
                src="https://eazytaxes.com/assets/logo-white.svg"
                alt="Company Logo"
                className="company-logo"
              />
            </Checkbox>
          </div>
          <p className="company-details">Easy Taxes</p>
          <p className="prize">Prize: 300$</p>
        </div>

        <hr />

        <div className="coupon-items">
          <Form.Item label="Enter Coupon" name="coupon">
            <Input className="input-box" />
            <Button type="primary" className="apply-button">
              Apply
            </Button>
            <p className="price">
              Total: <span className="total">0</span>
            </p>
          </Form.Item>
        </div>
        <hr />

        <div>
          <Button className="back-button" type="default" onClick={handleBack}>
            Back
          </Button>
          <Button className="save-button" type="primary" htmlType="save">
            Save
          </Button>
          <Button className="submit-button" type="primary" htmlType="submit">
            Submit
          </Button>

          {formData && (
            <div>
              <h2>Submitted Form Data:</h2>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
          )}
        </div>
      </Form>
    </div>
  );
};

export default MyFormComponent;
