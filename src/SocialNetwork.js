class SocialNetwork {
    constructor() {
            this._name = String;
            this._image = String;
            this._id = Number;
            this._link = String;

        }
        // setters
    set name(newName) {
        this._name = newName;
    }
    set id(newId) {
        this._id = newId;
    }
    set image(newImage) {
        this._image = newImage;
    }
    set link(newLink) {
        this._image = newLink;
    }


    // getters
    get name() {
        return this._name;
    }
    get id() {
        return this._id;
    }
    get image() {
        return this._image;
    }
    get link() {
        return this._link;
    }

    getAllData() {
        console.log(`Name: ${this.name}, Id: ${this.id},Image=${this.image}, Link =${this.link}`)
    }
}