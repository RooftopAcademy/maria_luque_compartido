import SocialNetwork from "../SocialNetwork";

export default class NetworkFactory {
    static create(obj:{id:number,name:string,image:string}) {
        let network = new SocialNetwork;

        network.id = obj.id;
        network.name = obj.name;
        network.image = obj.image;
        return network
    }
}