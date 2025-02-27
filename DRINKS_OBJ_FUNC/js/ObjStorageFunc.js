function ObjStorageFunc() {
    const self = this;

    self.storageItem = {};

    self.addValue = function (key, value) {
        self.storage[key] = value;
    }

    self.getValue = function (key) {
        return self.storage[key];
    }

    self.deleteValue = function (key) {
        if (key in self.storage) {
            delete self.storage[key];
            return true;
        } else {
            return false;
        }
    }

    self.getKeys = function () {
        return Object.keys(self.storage);
    }
}


