const TerminusClient = require("@terminusdb/terminusdb-client")
    
const client = new TerminusClient.WOQLClient(process.env.TERMINUSDB_URL, {user:process.env.TERMINUSDB_USER, organization:TERMINUSDB_ORG})
                                                
//Assign your key to environment variable TERMINUSDB_ACCESS_TOKEN
client.setApiKey(process.env.TERMINUSDB_ACCESS_TOKEN)
client.connect().then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.error(err);
})