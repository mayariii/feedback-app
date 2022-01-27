import FeedbackItem from "./FeedbackItem.tsx"

interface FeedbackListProps {
  feedback: [{ id: number; rating: number; text: string }]
}

function FeedbackList({ feedback }: FeedbackListProps) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet!</p>
  }
  return (
    <section className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </section>
  )
}

export default FeedbackList
