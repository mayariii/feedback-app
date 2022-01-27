interface FeedbackItemProps {
  item: [{ id: number; rating: number; text: string }]
}

function FeedbackItem({ item }) {
  return (
    <article className='card'>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </article>
  )
}

export default FeedbackItem
