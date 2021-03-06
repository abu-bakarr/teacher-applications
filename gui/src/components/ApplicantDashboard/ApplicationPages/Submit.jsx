import React, { Component } from "react";
import {H1, H2, It, Div, Category, Wrapper, Buttons, Left, FormWrapper, Input,  New, ErrorMessage, CreateButton} from '../../../constants/utils/Styling.jsx'
import { CircularProgress } from '@material-ui/core';

export default class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missingString: '',
      errors: '', 
      formDisabled:true
    }
  }
  async componentDidMount() {
    let disabled = false;
    let errors = ''
    let missingString = ''
    const app = this.props.values
    const req = [ app.national_id, app.nationality, app.school_name]
    const list = [{val:app.other_names, name:'any other names'}, {val:app.pin_code, name:'a pin code'}, {val:app.nassit, name:'a NASSIT number'}, {val:app.qualifications, name:'any qualifications'}, {val:app.special_skills, name:'any special skills'}]
    const emptyFields = []
    list.forEach(
      (i) => {
      if (i['val']===null || i['val']==='') {emptyFields.push(i['name'])}
      })
    if (emptyFields.length!==0) 
      {missingString = emptyFields.join(', ')}
    Object.values(req).forEach((val) => {
      if (val===null || val==='') {
        disabled = true
        errors ='National Identification Number and Nationality are both required.'
      }});
      this.setState({
        errors: errors, 
        missingString: missingString, 
        formDisabled: disabled
      })
  }

  render() {
    const { values, checkmarked, step, submit, handleCheckboxChange } = this.props;

    
    return (
          <Wrapper>
            <FormWrapper>
              <H1>Application</H1>
              <H2>{values.job_title} at {values.school_name} <br/>
              Application #{values.application_id}<br/><br/>
               5/5: Confirm Application Details</H2>
           <H2>
            <Div>
              <Category> First Name: </Category> <It> {values.first_name} </It>
            </Div>
            <Div>
            <Category> Last Name: </Category><It> {values.last_name} </It>
            </Div>
            <Div>
            <Category> Other Names: </Category><It> {values.other_names} </It>
            </Div>
            <Div>
            <Category> Mobile Number: </Category><It> {values.mobile_number} </It>
            </Div>
            <Div>
            <Category> Gender: </Category><It> {values.sex} </It>
            </Div>

            <Div>
            <Category> Nationality: </Category><It> {values.nationality} </It>
            </Div>
            <Div>
            <Category> National Identification Number: </Category><It> {values.national_id} </It>
            </Div>
            <Div>
            <Category> School Name: </Category><It> {values.school_name} </It>
            </Div>
            <Div>
            <Category> Pin Code: </Category><It> {values.pin_code} </It>
            </Div>
            <Div>
            <Category> Nassit Number: </Category><It> {values.nassit} </It>
            </Div>
            <Div>
            <Category> Qualifications: </Category><It> {values.qualifications} </It>
            </Div>
            <Div>
            <Category> Certificate Number(s) and Associated School(s): </Category><It> {values.qualifications} </It>
            </Div>
            <Div>
            <Category> Special Skills: </Category><It> {values.special_skills} </It>
            </Div>
          <br />
          <Input
          defaultValue = {`${values.first_name} ${values.last_name}`}
          disabled={true}
          style={{
            width: '40%',
            minWidth: '270px',
            fontFamily: "'Alex Brush', cursive",
            textAlign: 'center',
            margin: 'auto',
            fontSize: '20pt',
            display: 'block',
            height: '38px'
          }}
          /> <br/> <br/>
        {this.state.missingString!='' &&
          <Buttons>
            <Left style={{minWidth: '2%', width: '4%', marginRight:'-1%'}}>
              <Input 
              type="checkbox"
              checked={checkmarked}
              id='checked'
              onChange={handleCheckboxChange()}
              />
            </Left>
            <New >
          I verify that I purposefully did not provide the following: {this.state.missingString}.
          </New></Buttons>
          }
          </H2> 
          {this.state.missingString.length> 0 && !checkmarked && <ErrorMessage>Please check the above box in order to submit.</ErrorMessage>}
          {this.state.errors!=='' && <ErrorMessage>{this.state.errors}</ErrorMessage>}
          {(!(this.state.missingString.length> 0 && !checkmarked) && this.state.errors==='')
          &&
          <ErrorMessage>By clicking submit, I confirm that all of the submitted fields are accurate, all of my uploaded certificates are authentic, and I agree to using the above electronic signature to sign your application. I also give my consent to have all of my given information digitally and physicaly verified against government databases.</ErrorMessage>}          <br/>
          {values.loading==='loading' && <div style={{display:'flex', justifyContent:'center'}}><CircularProgress /></div> }
          <br/>



        <Buttons>
          <Left> 
          <CreateButton
            color="primary"
            variant="contained"
            onClick={step('prev')}
          >Go Back to Edit</CreateButton> 
          </Left>
          <CreateButton
            color="primary"
            variant="contained"
            disabled = {this.state.formDisabled}
            onClick={submit}
          >Submit</CreateButton>
          </Buttons>
          <CreateButton
            color="primary"
            variant="contained"
            onClick={step('exit')}
          >Exit</CreateButton>
          
          </FormWrapper>
          </Wrapper>
    );
  }
};