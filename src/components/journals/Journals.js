import React, {useState, useEffect} from 'react'
import { instance, APP_URL } from '../../utils/baseapi.instance'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";


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
        <>
        <Navbar />
        <div>
            {
                journals.slice(0, 50).map((article, i) => {
                    return (
                        <div key={i}>
                            <p >{article.title}</p>
                            </div>
                )
                })
            }
            <div className="w-full mt-32">
             <Footer />
            </div>
        </div>
        </>
    )
}
export default Journals
