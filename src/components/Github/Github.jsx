
import { useLoaderData } from"react-router-dom"

function Github() {
    const data = useLoaderData()
  //const [data, setData] = useState({}); // Use an object instead of an array

 /* useEffect(() => {
    fetch('https://api.github.com/users/saifalikhan19196')
      .then((response) => response.json()) // Properly invoking .json()
      .then((data) => {
       // console.log(data);
        setData(data); // Set the fetched data to state
      })
      .catch((error) => {
        console.error('Error fetching data:', error); 
      });
  }, []);*/


/*
  useEffect(() => {
    const fetchData= async()=>{
        try {
            const response=await fetch('https://api.github.com/users/hiteshchoudhary')
            const result =await response.json()
            setData(result)

        } catch(error){
            console.log('error fetching:',error)
        }
    } 
    fetchData()
  }, [])*/
  

  return (
      <div className="m-16 mx-auto mt-6 max-w-md gap-11 rounded-lg bg-white p-6 shadow-lg">
         

          {/* Avatar */}
          <div className="flex  mb-4">
              <img
                  src={data.avatar_url}
                  alt="GitHub Avatar"
                  className="rounded-full border-4 border-gray-200 shadow-lg w-40 h-40"/>
              
              {/* Name */}
              <p className="text-2xl font-bold text-gray-900 mt-10 ml-10 text-center">
                  {data.name || 'Loading...'}
              </p>
          </div>
          {/* Followers */}
          <p className="text-gray-600 text-lg mb-2">
              <span className="font-semibold text-gray-800">GitHub Followers:</span>{' '}
              {JSON.stringify(data.followers) || 'loading..'}
          </p>

          {/* Public Repos */}
          <p className="text-gray-600 text-lg">
              <span className="font-semibold text-gray-800">Public Repos:</span>{' '}
              {data.public_repos || 'Loading...'}
          </p>
      </div>


  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/saifalikhan19196')
    return response.json()

}