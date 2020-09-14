export const productDetails = [{ "id": 1, "company": "Blogtags" },
{ "id": 2, "company": "Skimia" },
{ "id": 3, "company": "Eayo" },
{ "id": 4, "company": "Mybuzz" },
{ "id": 5, "company": "Twinte" },
{ "id": 6, "company": "Tazzy" },
{ "id": 7, "company": "Zoomzone" },
{ "id": 8, "company": "Mudo" },
{ "id": 9, "company": "Abatz" },
{ "id": 10, "company": "Babblestorm" },
{ "id": 11, "company": "Skippad" },
{ "id": 12, "company": "Topicstorm" },
{ "id": 13, "company": "Youtags" },
{ "id": 14, "company": "Jabberstorm" },
{ "id": 15, "company": "Youspan" },
{ "id": 16, "company": "Thoughtbridge" },
{ "id": 17, "company": "Trilia" },
{ "id": 18, "company": "Mymm" },
{ "id": 19, "company": "Skimia" },
{ "id": 20, "company": "Twitterbeat" },
{ "id": 21, "company": "Jetpulse" },
{ "id": 22, "company": "Youspan" },
{ "id": 23, "company": "Cogidoo" },
{ "id": 24, "company": "Photobug" },
{ "id": 25, "company": "Quaxo" },
{ "id": 26, "company": "Abatz" },
{ "id": 27, "company": "Gigabox" },
{ "id": 28, "company": "Avamba" },
{ "id": 29, "company": "Flashset" },
{ "id": 30, "company": "Gigashots" }
]

export const companyDetails = productDetails.map((element)=>{
    // console.log('company name from state',element)
    let companyData ={
        company:element.company,
        kind:'Messanger',
        brand:'HRA',



    }
    return companyData
})