import { use, useState } from "react"
import Country from "../Country/Country";
import './Countries.css'

export default function Countries( {countriesPromise}){
    const countriesData=use(countriesPromise);
   const countries=countriesData.countries;
   const [visitedContries,setVisitedCountries]=useState([])
   const handleVisitedCountries=(country)=>{

   const newVisitedCountries=[...visitedContries,country];
   setVisitedCountries(newVisitedCountries)
   }
const [visitedFlag,setVisitedFlag]=useState([]);
const handleVisitedFlag=(flag)=>{
    // console.log('visited flaga should be napa',flag);
    const newVisitedFlag=[...visitedFlag,flag];
    setVisitedFlag(newVisitedFlag);
}


    // console.log(countries);
    return(
        <div>
            <h3>In the Countries : {countries.length}</h3>
            <h3>Total Country Visited : {visitedContries.length}</h3>
            <h3>Total Flags Visited : {visitedFlag.length}</h3>
           <div className="visited-class-container">
                {
                    visitedFlag.map(flag=><img src={flag} alt="" />)
                }
           </div>
           <ol>
            {
                visitedContries.map(country=><li key={country.ccn3.ccn3}>{country.name.common}</li>)
            }
           </ol>
            <div className="countries">
            {
                countries.map(country=><Country country={country }
                    handleVisitedCountries={handleVisitedCountries
                        
                    }
                    handleVisitedFlag={handleVisitedFlag}
                    key={country.ccn3.ccn3}></Country>)
            }
            </div>

        </div>
    )
}