import React from 'react';
import {H1, H2, Wrapper, FormWrapper, A} from '../../constants/utils/Styling.jsx'

import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    // backgroundColor: 'rgba(0, 0, 0, .03)',
    backgroundColor: '#93A3B1',
    opacity: .7,
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&:hover': {
      opacity: 1,
    },
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('panel1');
  var register = <A href='/register'>here</A>;
  var contact = <A href='/contact'>here</A>;

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
      <Wrapper>
        <FormWrapper>
          <H1>Frequently Asked Questions</H1> <br/>
          <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header">
              <H2>What do I need in order to fill out a teacher application?</H2>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <H2>
                <p>The same application is used for primary, secondary, and vocational schools.</p>
                <p>Here's a list of everything you need:</p>
                <div style={{textAlign: 'left', margin:'0 0 0 2%'}}>
                <li>Employing authority and school for which you're applying for</li>
                <li>Pin code and NASSIT number, if available</li>
                <li>Qualifications and applicable cretificate numbers</li>
                <li>Special skills such as special skills, music</li>
                <li>Previous appointment and employing authority if available</li>
                </div>
              </H2>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
              <H2>Do I need to register in order to start a teacher application?</H2>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <H2>
              <p>Yes! With your registration on this portal, you will be able to get real-time updates about your applications. You can register {register}.</p>
              </H2>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
              <H2>When will I know if I was approved or rejected?</H2>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <H2>
                <p>Before this digital platform existed, the teacher application was a paper-based system that traveled all across Sierra Leone to be hand-signed by five different agencies.
                This often took as long as 3 months. <br/>
                With this system, you will be able to track your application in real-time and receive approval notices in real time as the approving agencies review your application. 
                </p>     
              </H2>
            </ExpansionPanelDetails>
          </ExpansionPanel>    
          <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
              <H2>Can I update my application after submission?</H2>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <H2>
              <p>Once an application has been submitted, it cannot be modified or updated. You can, however, delete your application if you so choose, and restart from the beginning. </p>
              </H2>
            </ExpansionPanelDetails>
          </ExpansionPanel>    
          <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
              <H2>I have another question. Who can I ask?</H2>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <H2>
                <p>Let us help. Please email us with your question {contact}.</p>
              </H2>
            </ExpansionPanelDetails>
          </ExpansionPanel>          
        </FormWrapper>
      </Wrapper>

    );
  }

