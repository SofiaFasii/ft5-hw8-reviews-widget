
export const useTotalFeedback = (statee) => {
    return statee.good + statee.neutral + statee.bad
}
export const usePositiveFeedback = (totalFeedback, statee) => {
    return totalFeedback !== 0 ? Math.round((statee.good / totalFeedback) * 100) : 0
}