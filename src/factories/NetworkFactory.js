class NetworkFactory {
    static create(obj) {
        let network = new SocialNetwork;

        network.id = obj.id;
        network.name = obj.name;
        network.image = obj.image;
        return network
    }
}