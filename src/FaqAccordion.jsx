import React, { useState } from 'react'
import FaqItem from './FaqItem'

const FaqAccordion = ({data}) => {
  const [totData] = useState(data.data)
  console.log(totData)
  return (
    <>
    <div className="faq-accordion">
        <h2>Frequently Asked Questions</h2>
       {totData.map((item,index)=>(
        <FaqItem key={index} question={item.question} answer={item.answer}/>
       ))}
    </div>
    </>
  )
}

export default FaqAccordion