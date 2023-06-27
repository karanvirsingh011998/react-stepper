import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup } from "reactstrap";
import "./reactStepper.css";

const ActionButtons = (props) => {
  const handleBack = () => {
    props.previousStep();
  };

  const handleNext = () => {
    props.nextStep();
  };

  const handleFinish = async () => {
    console.log("props.user", props.user);
    const obj = {
      method: "Post",
      body: JSON.stringify(props.user),
    };

    return await fetch(
      "https://long-plum-rabbit-suit.cyclic.app/api/v1/user/registerUser",
      obj
    ).then((res) => console.log("res", res));
  };

  return (
    <div>
      <Row>
        {props.currentStep > 1 && (
          <Col>
            <Button onClick={handleBack}>Back</Button>
          </Col>
        )}
        <Col>
          {props.currentStep < props.totalSteps && (
            <Button onClick={handleNext}>Next</Button>
          )}
          {props.currentStep === props.totalSteps && (
            <Button onClick={handleFinish}>Finish</Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

const One = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [info1, setInfo1] = useState({});
  const [error, setError] = useState("");

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInfo1((info1) => ({
      ...info1,
      [targetName]: targetValue,
    }));
  };

  const validate = () => {
    setError("");
    props.nextStep();
    props.userCallback(info1);
  };

  return (
    <div className="mainContainer">
      <span style={{ color: "red" }}>{error}</span>
      <h1>Basic Details </h1>
      <form onSubmit={handleSubmit(validate)}>
        <label>First Name: </label>
        <input name="firstName" onChange={onInputChanged} />
        <br />
        <label>Middle Name: </label>
        <input
          type="text"
          name="middleName"
          placeholder="Enter your middlename"
          {...register("middleName", { required: true, maxLength: 15 })}
          onChange={onInputChanged}
        />
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter your Last name"
          {...register("lastName", { required: true, maxLength: 15 })}
          onChange={onInputChanged}
        />
        <br />
        Gender :
        <input
          type="radio"
          id="Male"
          name="gender"
          onChange={onInputChanged}
          value="Male"
        />
         Male
        <input
          type="radio"
          id="Female"
          name="gender"
          onChange={onInputChanged}
          value="Female"
        />
         Female
        <br></br>
        <label>DOB: </label>
        <input type="date" name="dob" onChange={onInputChanged} />
        <br />
        Martial Status :
        <input
          type="radio"
          id="Yes"
          name="maritalStatus"
          onChange={onInputChanged}
          value="Yes"
        />
        Yes
        <input
          type="radio"
          id="No"
          name="martial"
          onChange={onInputChanged}
          value="No"
        />
        No
        <br></br>
        <label>BloodGroup: </label>
        <select name="bloodGroup" id="bloodGroup" onChange={onInputChanged}>
          <option value="a+">a+</option>
          <option value="a-">a-</option>
          <option value="b+">b+</option>
          <option value="b-">b-</option>
        </select>
        <br />
        <label>Manager: </label>
        <input
          type="text"
          name="manager"
          placeholder="Enter manager name"
          onChange={onInputChanged}
        />
        <br />
        <label>Work Email: </label>
        <input
          type="email"
          name="workEmail"
          placeholder="Enter your workemail"
          onChange={onInputChanged}
        />
        <br />
        <label>Personal Email: </label>
        <input
          type="email"
          name="personalEmail"
          placeholder="Enter personal email"
          onChange={onInputChanged}
        />
        <br />
        <input type="submit" value="Next" />
      </form>
      <br />
    </div>
  );
};

const Two = (props) => {
  const [info2, setInfo2] = useState({});
  const [error, setError] = useState("");

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInfo2((info2) => ({
      ...info2,
      [targetName]: targetValue,
    }));
  };

  const validate2 = () => {
    if (!info2.mobile) setError("Mandatory fields");
    else {
      setError("");
      props.nextStep();
      props.userCallback(info2);
    }
  };

  return (
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <h1>Personal Details </h1>
      <FormGroup>
        <label>
          Welcome <b>{props.user.firstName || ""}</b>
        </label>
      </FormGroup>
      <FormGroup>
        <label>Mobile Num: </label>
        <input
          type="text"
          name="mobile"
          placeholder="Enter your mobile No"
          onChange={onInputChanged}
        />
        <br />
        <label>ResidencePhone Num: </label>
        <input
          type="text"
          name="residencePhone"
          placeholder="Enter your mobile No"
          onChange={onInputChanged}
        />
        <br />
        <label>workPhone Num: </label>
        <input
          type="text"
          name="workPhone"
          placeholder="Enter your mobile No"
          onChange={onInputChanged}
        />
        <br />
        <label>Skype Id: </label>
        <input
          type="text"
          name="Skype"
          placeholder="Enter your Skype id"
          onChange={onInputChanged}
        />
        <br />
        <label>degree: </label>
        <input
          type="text"
          name="degree"
          placeholder="Enter your degree"
          onChange={onInputChanged}
        />
        <br />
        <label>Branch: </label>
        <input
          type="text"
          name="branch"
          placeholder="Enter your branch"
          onChange={onInputChanged}
        />
        <br />
        <label>start Date: </label>
        <input
          type="date"
          name="start"
          placeholder="Enter your degree start date"
          onChange={onInputChanged}
        />
        <br />
        <label>end Date: </label>
        <input
          type="date"
          name="end"
          placeholder="Enter your degree end date"
          onChange={onInputChanged}
        />
        <br />
        <label>percentage: </label>
        <input
          type="number"
          name="percentage"
          placeholder="Enter your percentage"
          onChange={onInputChanged}
        />
        <br />
        <label>school: </label>
        <input
          type="text"
          name="school"
          placeholder="Enter your school name"
          onChange={onInputChanged}
        />
        <br />
        <label>organization: </label>
        <input
          type="text"
          name="organization"
          placeholder="Enter your organization"
          onChange={onInputChanged}
        />
        <br /> <label>designation: </label>
        <input
          type="text"
          name="designation"
          placeholder="Enter your designation"
          onChange={onInputChanged}
        />
        <br />
        <label>org_start: </label>
        <input
          type="text"
          name="org_start"
          placeholder="Enter your org_start"
          onChange={onInputChanged}
        />
        <br />
        <label>org_end: </label>
        <input
          type="text"
          name="org_end"
          placeholder="Enter your org_end"
          onChange={onInputChanged}
        />
        <br />
        <label>location: </label>
        <input
          type="text"
          name="location"
          placeholder="Enter your location"
          onChange={onInputChanged}
        />
        <br />
        <label>password: </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your location"
          onChange={onInputChanged}
        />
        <br />
      </FormGroup>
      <br />
      <ActionButtons {...props} nextStep={validate2} />
    </div>
  );
};

const Three = (props) => {
  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  return (
    <div>
      <h2>Summary user detail</h2>
      <p>
        Name: {props.user.firstName} {props.user.lastName}
      </p>

      <br />
      <ActionButtons {...props} lastStep={handleLastStep} />
    </div>
  );
};

const Sample = () => {
  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
    console.log("stepWizard", stepWizard);
  };

  const assignUser = (val) => {
    setUser((user) => ({
      ...user,
      ...val,
    }));
  };

  const handleStepChange = (e) => {
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("You are done.");
  };
  const [value, setValue] = useState("");

  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];

  return (
    <div>
      <Stepper activeStep={activeStep}>
        <Step label="Basic Details" />
        <Step label="Personal Details" />
        <Step label="Confirmation" />
      </Stepper>
      <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
        <One userCallback={assignUser} />
        <Two user={user} userCallback={assignUser} />
        <Three user={user} completeCallback={handleComplete} />
      </StepWizard>
    </div>
  );
};

export default Sample;
