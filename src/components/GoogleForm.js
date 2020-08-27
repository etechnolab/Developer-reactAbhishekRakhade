import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { UserValidationSchema } from "./UserValidationSchema";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";

class GoogleForm extends React.Component {
  validateEmail(value) {
    let error;

    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }

    return error;
  }

  render() {
    const txtAlign = {
      textAlign: "left",
    };

    const colStyle = {
      width: "500px",
      marginTop: "50px",
      borderRadius: "10px",
    };
    return (
      <Formik
        validationSchema={UserValidationSchema}
        initialValues={{
          name: "",
          email: "",
          message: "",

          mobile: "",
          gender: "",
          address: "",
        }}
        render={({ errors, touched }) => (
          <Container
            style={{
              marginTop: 100,
              marginLeft: 350,
            }}
          >
            <br />
            <br />
            <Form>
              <Card style={colStyle}>
                <CardContent>
                  <Row>
                    <Col
                      className="form-group"
                      md={10}
                      sm={4}
                      xs={4}
                      style={txtAlign}
                    >
                      <label htmlFor="name">Name &lowast;</label>
                      <Field
                        name="name"
                        type="text"
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
                        }
                      />

                      <ErrorMessage
                        name="name"
                        component="div"
                        className="invalid-feedback"
                      />
                    </Col>
                  </Row>
                </CardContent>
              </Card>
              <Card style={colStyle}>
                <CardContent>
                  <Row>
                    <Col
                      className="form-group"
                      md={16}
                      sm={4}
                      xs={4}
                      style={txtAlign}
                    >
                      <label htmlFor="email">Email &lowast; </label>
                      <Field
                        name="email"
                        validate={this.validateEmail}
                        style={{
                          width: 387,
                          height: 36,
                        }}
                      />
                      {errors.email && touched.email && (
                        <div style={{ color: "#ff0000" }}>{errors.email}</div>
                      )}
                    </Col>
                  </Row>
                </CardContent>
              </Card>
              <Card style={colStyle}>
                <CardContent>
                  <Row>
                    <Col
                      className="form-group"
                      md={10}
                      sm={4}
                      xs={4}
                      style={txtAlign}
                    >
                      <label htmlFor="mobile">Mobile &lowast;</label>
                      <Field
                        name="mobile"
                        type="text"
                        className={
                          "form-control" +
                          (errors.mobile && touched.mobile ? " is-invalid" : "")
                        }
                      />
                      <ErrorMessage
                        name="mobile"
                        component="div"
                        className="invalid-feedback"
                      />
                    </Col>
                  </Row>
                </CardContent>
              </Card>
              <Card style={colStyle}>
                <CardContent>
                  <Row>
                    <Col
                      className="form-group"
                      md={10}
                      sm={4}
                      xs={4}
                      style={txtAlign}
                    >
                      <label htmlFor="address">Address &lowast;</label>
                      <Field
                        name="address"
                        type="text"
                        className={
                          "form-control" +
                          (errors.address && touched.address
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="invalid-feedback"
                      />
                    </Col>
                  </Row>
                </CardContent>
              </Card>
              <Card style={colStyle}>
                <CardContent>
                  <Row>
                    <Col
                      className="form-group"
                      md={10}
                      sm={4}
                      xs={4}
                      style={txtAlign}
                    >
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Gender &lowast;
                        </FormLabel>
                        <RadioGroup
                          aria-label="gender"
                          name="gender1"
                          // value={value}
                          // onChange={handleChange}
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Col>
                  </Row>
                </CardContent>
              </Card>
              <Card style={colStyle}>
                <CardContent>
                  <Row>
                    <Col
                      className="form-group"
                      md={10}
                      sm={4}
                      xs={4}
                      style={txtAlign}
                    >
                      <label htmlFor="status">Message &lowast;</label>
                      <Field
                        style={{ width: 387, height: 150 }}
                        name="message"
                        as="textarea"
                        rows="3"
                        className={
                          "form-control" +
                          (errors.message && touched.message
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="invalid-feedback"
                      />
                    </Col>
                  </Row>
                </CardContent>
              </Card>

              <br />
              <Row>
                <Col>
                  <button type="submit" className="btn btn-primary mr-2">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Reset
                  </button>
                  <br />
                  <br />
                  <span>Never submit passwords through Google Forms.</span>
                </Col>
              </Row>
            </Form>
          </Container>
        )}
      />
    );
  }
}

export default GoogleForm;
