import React, { Component } from "react";
import Employees from "./Employees";
import ProjName from "./ProjName";
import SignUp from "./Signup";
import Space from "./Space";
import Task from "./Task";
import Team from "./Team";
import Teammembers from "./Teammembers";

export default class Sign extends Component {
  state = {
    step: 1,
    email: "",
    password: "",
    fullName: "",
    country: "",
    company: "",
    number: "",
    employees: "", 
    dept: "",
    proj:"",
    role: "",
    space: "",
    task1: "",
    task2: "",
    task3: "",
    email1: "",
    email2: "",
    email3: "",
    isActive:true,
    isAdmin:false
  };


  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      email,
      password,
      fullName,
      country,
      company,
      number,
      employees,
      dept,
      role,
      space,
      proj,
      task1,
      task2,
      task3,
      email1,
      email2,
      email3,
      isActive,
      isAdmin
    } = this.state;

    const d = new Date();
    let date= d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear();

    const projectData={
        "email":email,
        "project": [
          {
            "id": 1,
            "title": proj,
            "data": [
              {
                "name": task1,
                "status": "new",
                "risk": "low",
                "date": date,
                "assigne": "abc@xyz.com"
              },
              {
                "name": task2,
                "status": "new",
                "risk": "low",
                "date": date,
                "assigne": "abc@xyz.com"
              },
              {
                "name": task3,
                "status": "new",
                "risk": "low",
                "date": date,
                "assigne": "abc@xyz.com"
              }
            ]
          }
        ]
      }
    const values = {
      email,
      password,
      fullName,
      country,
      company,
      number,
      employees,
      dept,
      role,
      space,
      proj,
      task1,
      task2,
      task3,
      email1,
      email2,
      email3,
      isActive,
      isAdmin
    };
   
    switch (step) {
      case 1:
        return (
          <SignUp
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Employees
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Team
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Space
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <ProjName
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <Task
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            cred={values.email}
            cred1={values.password}
          />
        );
      case 7:
        return (
          <Teammembers
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            pojectdat={projectData}
          />
        );
      default:
      // do nothing
    }
  }
}
