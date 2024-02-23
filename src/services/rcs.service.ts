import { REACT_APP_BOT_MANAGEMENT_BACKEND_URL } from "@/config";
import axios from "axios";


export class RCSService{
    

    public async addNewBotService(formDataToSend,orgId:string):Promise<any>{
        try {
            const headers = { "Content-Type": "multipart/form-data", orgId };
          
           const createdBotDetails = await axios.post(`${REACT_APP_BOT_MANAGEMENT_BACKEND_URL}/bot/create-bot`, formDataToSend, { headers });


            return createdBotDetails
            
        } catch (error) {
            throw error
        }
    }



    public async getAllBotsListService(orgId:string,authorizationBearerToken:string):Promise<any>{
        try {

            const rcsBotManagementBackendUrl = process.env.REACT_APP_BOT_MANAGEMENT_BACKEND_URL;

            const headers = {
                "Content-Type": "multipart/form-data",
                orgId,
                'Authorization': authorizationBearerToken
              };
          
              const response = await axios.get(`${rcsBotManagementBackendUrl}bot/get-all-bots`, { headers });



            return response.data.data;
            
        } catch (error) {
            throw error;
        }
    }







}