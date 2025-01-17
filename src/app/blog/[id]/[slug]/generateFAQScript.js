
const generateFAQScript = (faq) => {
    const script ={
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": []
    }
    faq.forEach(({ answer, question }) => {
        script.mainEntity.push({
            "@type": "Question",
            "name": question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": answer
        }
        })
    })
    return script
}

export default generateFAQScript;