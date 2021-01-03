export const convertion = {
    get data () {
        return this._data;
    },
    set data (data) {
        this._data = data;
        Object.keys(this.watchers).forEach(key => this.watchers[key](data));
    }
};

convertion._data = [];
convertion.watchers = {};

export const rates = {
    get response () {
        return this._response;
    },
    set response (response) {
        this._response = response;
        Object.keys(this.watchers).forEach(key => this.watchers[key](response));
    }
};

rates._response = {};
rates.watchers = {};

console.log('>>> ', convertion);