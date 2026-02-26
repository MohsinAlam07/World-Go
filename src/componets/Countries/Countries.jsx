import { use } from "react"

export default function Countries( {countriesPromise}){
    const countriesData=use(countriesPromise);
   const countries=countriesData.countries;
    console.log(countries);
    return(
        <div>
            <h3>In the Countries : {countries.length}</h3>

        </div>
    )
}