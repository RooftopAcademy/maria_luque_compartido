class User {
    constructor() {
        this._name = String;
        this._id = Number;
        this._usuario = String;
        this._contrasenia = String;
        this._historial = [];
        this._nivel = Number;
    }
    get name() {
        return this._name;
    }
    get id() {
        return this._id;
    }
    get nivel() {
        return this._nivel;
    }
    set name(newName) {
        this._name = newName;
    }
    set id(newId) {
        this._id = newId;
    }

    set nivel(newNivel) {
        this._nivel = newNivel
    }
}