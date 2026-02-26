import { use } from "react"
import Country from "../Country/Country";
import './Countries.css'

export default function Countries( {countriesPromise}){
    const countriesData=use(countriesPromise);
   const countries=countriesData.countries;
    // console.log(countries);
    return(
        <div>
            <h3>In the Countries : {countries.length}</h3>
            <div className="countries">
            {
                countries.map(country=><Country country={country } key={country.ccn3.ccn3}></Country>)
            }
            </div>

        </div>
    )
}