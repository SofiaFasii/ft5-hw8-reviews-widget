// import { Component } from "react";
import "./App.css";
import { Wrapper, Gap } from "./components/style.styled";
import Section from "./components/Section";
import Statistics from "./components/Staticstics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import { useReducer } from "react";
import { useTotalFeedback, usePositiveFeedback} from "./hooks/useFeedback.js"

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
}
const feedbackReducer = (state, action) => {
    switch(action.type){
      case 'good':
        return {...state, good: state.good + 1}
      case 'neutral':
        return {...state, neutral: state.neutral + 1}
      case 'bad':
        return {...state, bad: state.bad + 1}
      default:
        return state;
    }
  }

function App(){
  const [state, dispatch] = useReducer(feedbackReducer, initialState)
  const plusOne = (type) => {
    dispatch({type})
  }
  const totalFeedback = useTotalFeedback(state)
  const positiveFeedback = usePositiveFeedback(totalFeedback, state)
 return (
      <Wrapper>
        <Section title="Please leave feedback">
          <Gap>
            <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={plusOne} />
          </Gap>
        </Section>
          <Section title="Statistics">
            {totalFeedback
              ? <Statistics good={state.good} neutral={state.neutral} bad={state.bad} total={totalFeedback} positivePercentage={positiveFeedback} /> 
              : <Notification message="There is no feedback" />
            }
          </Section>
      </Wrapper>
    )
}
export default App;

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   plusOne = (type) => {
//     this.setState((prevState) => ({
//       [type]: prevState[type] + 1,
//     }))
//   }
//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad
//   }
//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback()
//     if (total !== 0) {
//       return Math.round((this.state.good / total) * 100)
//     } else {
//       return 0
//     }
//   }
//   render() {
//     const { good, neutral, bad } = this.state
//     return (
//       <Wrapper>
//         <Section title="Please leave feedback">
//           <Gap>
//             <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.plusOne} />
//           </Gap>
//         </Section>
//           <Section title="Statistics">
//             {this.countTotalFeedback()
//               ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> 
//               : <Notification message="There is no feedback" />
//             }
//           </Section>
//       </Wrapper>
//     )
//   }
// }

// export default App;
