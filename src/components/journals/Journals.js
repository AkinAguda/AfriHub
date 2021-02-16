import React, {useState, useEffect} from 'react'
import { instance, APP_URL } from '../../utils/baseapi.instance'

const Journals = () => {
    const [journals, setJournals] = useState([])
    // const j = []
    instance.get(`${APP_URL}/api/v1/journals`) 
  .then(res => {
      if (res.status >= 200) {
          setJournals(res.data.data)

          console.log(journals)
          
    }
  })
  .catch(e => {
  return e
})
    useEffect(() => {
    })
    return (
        <div>
            {
                journals.slice(0, 4).map((article, i) => {
                    return (
                        <div key={i}>
                            <p >{article.title}</p>
                            </div>
                )
                })
            }
        </div>
    )
}
export default Journals
