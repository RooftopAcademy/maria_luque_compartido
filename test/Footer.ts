import SocialNetwork from "./SocialNetwork"

export default class Footer {
    title : string = "Healthy Desserts";
    copy: string = "Copyright 2021 by Maria Luque";
    networks : SocialNetwork[] =[];

    showAll(){
        return this.networks;
    }

    addNetwork(newNetwork :SocialNetwork){
        this.networks.push(newNetwork);
    }

    removeNetwork(networkId:number){
       this.networks.filter(function(netw:SocialNetwork){
           return netw.id !== networkId;
       })  
    }
}