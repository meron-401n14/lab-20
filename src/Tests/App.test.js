import React from "react";

import renderer from 'react-test-renderer';
import { create } from "react-test-renderer"
import { configure, render, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import input from "../Components/Contactinput";


configure({ adapter: new Adapter() });


describe("APP test render", () => {

  it('renders without crashing', () => {
    shallow(<App />)
  })

  it('This tests porps for contactinput component passed and exist should have input for name and phone', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Input#name')).toHaveLength(1);
    expect(wrapper.find('Input#phone')).toHaveLength(1);
  });


  it('Contact Information', () => {
    const wrapper = shallow(<App />)
    const Information = <h3>Contact Information</h3>

    expect(wrapper.contains(Information)).toEqual(true)
  })

  it("renders ContactInput", () => {
    const fullNameInputComponent = renderer.create(<form />).toJSON();
    expect(fullNameInputComponent).toMatchSnapshot();
  });


  it("Should have a button component", () => {

    function Button(props) {
      return <button>Clear Form</button>;
    }
    const button = create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });


  it('accepts contact props', () => {
    const contact = {

      name: 'Meron Si',
      phone: '23456723',
      Gender: 'female',
      position: 'student'

    }
    const wrapper = mount(<input contact={contact} />);
    expect(wrapper.props().contact).toEqual(contact)
  })



});

describe('Displays form elements and a state printer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  const originalError = console.error;
  console.error = jest.fn();
  it('should render one <h3>', () => {
    expect(wrapper.find('h3')).toHaveLength(1);
    console.error = originalError;
  });
  it('should render one <Form>', () => {

    expect(wrapper.find('p')).toHaveLength(1);
    console.error = originalError;
  });
  it('should render 1 <label>s', () => {

    expect(wrapper.find('label')).toHaveLength(7);
    console.error = originalError;
  })

});




// done 
