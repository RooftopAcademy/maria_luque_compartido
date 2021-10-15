class Footer {
    constructor() {
        this.title = "Healthy Desserts";
        this.newtworks = [];

    }
    showAll() {
        return this.newtworks;
    }
    addNetwork(newNetwork) {
        this.newtworks.push(newNetwork);
    }

}