import {useEffect, useState, React} from 'react'




const JobPage = () => {
    const [job,setJob] = useState(null);

    useEffect(()=>{
        const fetchJob = async() => {
            try {
                const res = await fetch('/api/job')
                console.log(res);
                const data = await res.json();
                setJobs(data);
              } catch (error) {
                console.log('Error fetching data', error)
              }finally{
                setLoading(false);
              }
        }
    },[])

  return (
    <div>
      
    </div>
  )
}

export default JobPage
