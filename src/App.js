// import { Component } from "react";
import "./App.css";
import { Wrapper, Gap } from "./components/style.styled";
import Section from "./components/Section";
import Statistics from "./components/Staticstics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import { useState } from "react";

function App(){
  const [statee, setStatee] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })
  const plusOne = (type) => {
    setStatee(prevStatee => ({
      ...prevStatee,
      [type]: prevStatee[type] + 1,
    }))
  }
  const countTotalFeedback = () => {
    return statee.good + statee.neutral + statee.bad
  }
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback()
    return total !== 0 ? Math.round((statee.good / total) * 100) : 0
  }
 return (
      <Wrapper>
        <Section title="Please leave feedback">
          <Gap>
            <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={plusOne} />
          </Gap>
        </Section>
          <Section title="Statistics">
            {countTotalFeedback()
              ? <Statistics good={statee.good} neutral={statee.neutral} bad={statee.bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} /> 
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
